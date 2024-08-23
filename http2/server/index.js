const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
  key: fs.readFileSync('./new-private-key1.pem'),
  cert: fs.readFileSync('./new-certificate.pem')
});

server.on('stream', (stream, headers) => {
  if (headers[':path'] === '/api/data' && headers[':method'] === 'GET') {
    const data = {
      message: 'Hello from HTTP/2 server!',
      timestamp: new Date().toISOString()
    };

    stream.respond({
      'content-type': 'application/json',
      ':status': 200
    });

    stream.end(JSON.stringify(data));
  } else {
    stream.respond({ ':status': 404 });
    stream.end('Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`HTTP/2 server running on https://localhost:${port}`);
});