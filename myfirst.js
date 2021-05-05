const http = require('http');
const dt = require('./dateTime');

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('The data and time is currently: ' + dt.dateTime());
  res.end();
}).listen(3000);