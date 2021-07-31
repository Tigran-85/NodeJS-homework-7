const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');


router.route('/users').get((req, res) => {
    res.end(`${new Date().toDateString()} Method ${req.method}`)
}).post(upload.single('image'), (req, res) => {
    
    console.log(req.file);
    res.end(`${new Date().toDateString()} Method ${req.method}`)
}).put((req, res) => {
    res.end(`${new Date().toDateString()} Method ${req.method}`)
}).delete((req, res) => {
    res.end(`${new Date().toDateString()} Method ${req.method}`)
});

module.exports = router;