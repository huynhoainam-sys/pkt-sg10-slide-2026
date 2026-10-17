import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = process.cwd();
const errors = [], notes = [];
const exists = (p) => fs.existsSync(path.join(root, p));
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const entries = ['index.html', 'meeting.html', 'ranking-2027/index.html'];

for (const entry of entries) {
  if (!exists(entry)) { errors.push('Missing entry: ' + entry); continue; }
  const html = read(entry);
  const base = path.posix.dirname(entry);
  const attrs = [...html.matchAll(/<(?:script|link)\b[^>]*(?:src|href)\s*=\s*["']([^"']+)["'][^>]*>/gi)];
  for (const match of attrs) {
    let url = match[1].split(/[?#]/)[0];
    if (!url || /^(?:https?:|data:|\/\/|#)/i.test(url)) continue;
    if (url.startsWith('/')) { notes.push('Root-relative reference skipped: ' + url); continue; }
    const rel = path.posix.normalize(path.posix.join(base, url));
    if (!exists(rel)) errors.push(entry + ': missing asset ' + rel);
  }
  notes.push(entry + ': HTML present');
}
for (let i = 0; i < 14; i++) {
  const p = 'parts/' + String(i).padStart(3, '0') + '.txt';
  if (!exists(p)) errors.push('Missing slide fragment: ' + p);
}
function walk(dir) {
  if (!exists(dir)) return;
  for (const item of fs.readdirSync(path.join(root,dir), { withFileTypes: true })) {
    const p = path.posix.join(dir, item.name);
    if (item.isDirectory() && !['.git', 'node_modules', '.cache', 'dist'].includes(item.name)) walk(p);
    else if (item.name.endsWith('.js')) {
      try { new vm.Script(read(p), { filename: p }); }
      catch (e) { errors.push(p + ': ' + e.message); }
    }
  }
}
walk('.');
console.log('SG10 baseline static QA: ' + (errors.length ? 'FAIL' : 'PASS'));
for (const note of notes) console.log('NOTE:', note);
for (const error of errors) console.error('ERROR:', error);
console.log('Visual 4K / popup / PII review: NOT RUN (requires separate inspection)');
if (errors.length) process.exitCode = 1;
