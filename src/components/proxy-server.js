// const http = require('http');
// const httpProxy = require('http-proxy');

// const proxy = httpProxy.createProxyServer({});

// const server = http.createServer((req, res) => {
//   // Replace 'weblify.onrender.com' with the target server's domain.
//   proxy.web(req, res, { target: "http://localhost:8081/v1/urls/public" });
// });

// const port = 8081; 

// server.listen(port, () => {
//   console.log(`Proxy server is running on port ${port}`);
// });


const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  // Replace 'weblify.onrender.com' with the target server's domain.
  proxy.web(req, res, { target: 'http://localhost:8081/v1/urls/public'});
});

const port = 8081; // Choose a port for your proxy server

server.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});
