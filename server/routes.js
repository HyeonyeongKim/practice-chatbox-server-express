const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
//const jsonParser = bodyParser.json();

router.use(bodyParser.json());
let data = {"results":[]};
router.get('/messages',(req, res) => {
    res.send(data);
});
router.post('/messages',(req, res) => {
    res.send(req.body)
});

module.exports = router;