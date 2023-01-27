const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('home1.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    res.end();
  });
});

const port = 80;
server.listen(port);
console.log(`Server listening on port ${port}`);
