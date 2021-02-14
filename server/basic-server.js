const http = require("http"); // node core module인 http module 사용
const requestHandler = require('./request-handler.js') // 직접 작성한 request-handler.js 파일을 사용하도록 하는 file module

const port = 3000;
const ip = "127.0.0.1";

const server = http.createServer(requestHandler);
console.log(`Listening on http://${ip}:${port}`);

server.listen(port, ip);

module.exports = server;
