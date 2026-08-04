const fs = require('fs');
const path = require('path');

const root = __dirname;
const dist = path.join(root, 'dist');

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.copyFileSync(path.join(root, 'index.html'), path.join(dist, 'index.html'));
copyDir(path.join(root, 'assets'), path.join(dist, 'assets'));
// Fallback file for static hosts that request an unknown path directly.
fs.copyFileSync(path.join(root, 'index.html'), path.join(dist, '404.html'));
console.log('Build complete:', dist);
