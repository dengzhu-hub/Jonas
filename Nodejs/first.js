const http = require("http");
const https = require("https");
const hostname = "127.0.0.1";
const port = 3004;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("the world is end on my li\n");
});

server.listen(port, hostname, https, () => {
  console.log(`Server running at ${https}://${hostname}:${port}/`);
});
server.close();
