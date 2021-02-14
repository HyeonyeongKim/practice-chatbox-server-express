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

//  request handler not required.