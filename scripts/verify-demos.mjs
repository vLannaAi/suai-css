#!/usr/bin/env node
// Zero-dep regression gate for the Stage-1 CSS migration.
// Fails (non-zero exit) if legacy --suai- variables or contract-range emoji
// are found anywhere under suai-html/.
import { execSync } from 'node:child_process';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function grep(args) {
  try {
    return execSync(`grep ${args}`, { encoding: 'utf8' });
  } catch (err) {
    // grep exits 1 when no matches are found — that's the pass case.
    if (err.status === 1) return '';
    throw err;
  }
}

// Emoji check is done natively (not via `grep -P`) because BSD grep, which
// `/bin/sh` resolves to on macOS even when an interactive shell has GNU/PCRE
// grep on PATH, doesn't support -P.
const EMOJI_RE = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}]/u;

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

let failed = false;

const legacyVars = grep(`-rnE -- '--suai-' suai-html/`);
if (legacyVars) {
  failed = true;
  console.error('FAIL: legacy --suai- variables found in suai-html/:\n' + legacyVars);
} else {
  console.log('PASS: no --suai- variables in suai-html/');
}

// Skip binary files (fonts, images) the same way grep does: a NUL byte in
// the first chunk marks a file as binary, so it's excluded from the scan.
function isBinary(buf) {
  return buf.subarray(0, 8000).includes(0);
}

const emojiFiles = walk('suai-html').filter((p) => {
  const buf = readFileSync(p);
  return !isBinary(buf) && EMOJI_RE.test(buf.toString('utf8'));
});
if (emojiFiles.length) {
  failed = true;
  console.error('FAIL: decorative emoji found in suai-html/:\n' + emojiFiles.join('\n'));
} else {
  console.log('PASS: no decorative emoji in suai-html/');
}

process.exit(failed ? 1 : 0);
