const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Handle the request here.  Example of potential error:
    // if (req.url === '/error') { throw new Error('Intentional Error'); }
    console.log('Request received');
    res.end();
  } catch (error) {
    console.error('Error handling request:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}).on('error', err => {
  console.error('Server error:', err);
  process.exit(1);
});

// Improved error handling
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection:', reason);
  process.exit(1);
});