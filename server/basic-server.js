const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes.js');

const port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);

// 필요한 모듈만 내보내기 위해 module.exports = app 하지 않고 server 변수에 넣어서 export해 봄
const server = app.listen(port, () => {
    console.log(`chatterbox-server refactored w/ Express listen on ${port}`);
})
module.exports = server;
