// const http = require("http"); // node core module인 http module 사용
// const requestHandler = require('./request-handler.js') // 직접 작성한 request-handler.js 파일을 사용하도록 하는 file module

// const port = 3000;
// const ip = "127.0.0.1";

// const server = http.createServer(requestHandler);
// console.log(`Listening on http://${ip}:${port}`);

// server.listen(port, ip);

// module.exports = server;

const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //npm install body-parser 후 사용할 수 있다.
const cors = require('cors') // npm install cors 후 사용할 수 있다.


const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let data = {"results":[]};
app.get('/messages',(req, res) => {
    res.send(data);
})
app.post('/messages',(req, res) => {
    res.send(req.body)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

module.exports = app;

