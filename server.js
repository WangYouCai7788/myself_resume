const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const PORT = 3000;
const FILE = path.join(__dirname, 'index.html');

// 获取本机局域网IP
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1';
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(FILE, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading resume');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

const localIP = getLocalIP();
server.listen(PORT, '0.0.0.0', () => {
  console.log('');
  console.log('╔══════════════════════════════════════════╗');
  console.log('║     王雨阳 · 简历网站已启动 🚀          ║');
  console.log('╠══════════════════════════════════════════╣');
  console.log(`║  本机:   http://localhost:${PORT}          ║`);
  console.log(`║  手机:   http://${localIP}:${PORT}           ║`);
  console.log('║                                          ║');
  console.log('║  手机访问要求:                           ║');
  console.log('║  手机和电脑连同一个WiFi                  ║');
  console.log('║  浏览器打开上面的手机地址                ║');
  console.log('║                                          ║');
  console.log('║  Ctrl+C 停止服务                         ║');
  console.log('╚══════════════════════════════════════════╝');
  console.log('');
});
