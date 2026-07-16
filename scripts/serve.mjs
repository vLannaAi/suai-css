// Zero-dependency static server for the SUAI demos.
// Usage: pnpm demo  (or: node scripts/serve.mjs [port])
// Serves the repo root so every stage's demos share one origin.
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { join, normalize, extname, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const PORT = Number(process.argv[2]) || 8877

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/plain; charset=utf-8',
}

createServer(async (req, res) => {
  try {
    // Resolve inside ROOT only (normalize strips ../ traversal)
    const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname)
    let filePath = normalize(join(ROOT, urlPath))
    if (!filePath.startsWith(ROOT)) throw new Error('traversal')
    if ((await stat(filePath)).isDirectory()) filePath = join(filePath, 'index.html')
    const body = await readFile(filePath)
    res.writeHead(200, { 'content-type': TYPES[extname(filePath)] ?? 'application/octet-stream' })
    res.end(body)
  } catch {
    res.writeHead(404, { 'content-type': 'text/plain' })
    res.end('404')
  }
}).listen(PORT, () => {
  console.log(`SUAI demos → http://localhost:${PORT}`)
  console.log(`  speed theme:  http://localhost:${PORT}/suai-css/demo/speed-demo.html`)
  console.log(`  suai-html:    http://localhost:${PORT}/suai-html/`)
})
