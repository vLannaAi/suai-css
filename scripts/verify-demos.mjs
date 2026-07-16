#!/usr/bin/env node
// Zero-dep regression gate for the Stage-1 CSS migration.
// Fails (non-zero exit) if legacy --suai- variables or contract-range emoji
// are found anywhere under suai-html/.
import { execSync } from 'node:child_process';

function grep(args) {
  try {
    return execSync(`grep ${args}`, { encoding: 'utf8' });
  } catch (err) {
    // grep exits 1 when no matches are found — that's the pass case.
    if (err.status === 1) return '';
    throw err;
  }
}

let failed = false;

const legacyVars = grep(`-rnE -- '--suai-' suai-html/`);
if (legacyVars) {
  failed = true;
  console.error('FAIL: legacy --suai- variables found in suai-html/:\n' + legacyVars);
} else {
  console.log('PASS: no --suai- variables in suai-html/');
}

const emojiFiles = grep(`-rlP '[\\x{1F000}-\\x{1FAFF}\\x{2600}-\\x{27BF}\\x{2B00}-\\x{2BFF}]' suai-html/`);
if (emojiFiles) {
  failed = true;
  console.error('FAIL: decorative emoji found in suai-html/:\n' + emojiFiles);
} else {
  console.log('PASS: no decorative emoji in suai-html/');
}

process.exit(failed ? 1 : 0);
