const fs = require('fs');
const path = require('path');
const base = 'H:/VCP/博客/portfolio-site/public/projects';
const dirs = fs.readdirSync(base).sort();
for (const d of dirs) {
  const full = path.join(base, d);
  if (fs.statSync(full).isDirectory() === false) continue;
  const files = fs.readdirSync(full).sort((a, b) => {
    if (a.startsWith('cover')) return -1;
    if (b.startsWith('cover')) return 1;
    const na = parseInt((a.match(/\d+/) || ['0'])[0]);
    const nb = parseInt((b.match(/\d+/) || ['0'])[0]);
    return na - nb;
  });
  console.log(d + ': ' + files.join(', '));
}
