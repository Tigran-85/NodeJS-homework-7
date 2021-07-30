const express = require('express');
const router = express.Router();


router.route('/users').get((req, res) => {
    res.end(`${new Date().toDateString()} Method ${req.method}`)
}).post((req, res) => {
    res.end(`${new Date().toDateString()} Method ${req.method}`)
}).put((req, res) => {
    res.end(`${new Date().toDateString()} Method ${req.method}`)
}).delete((req, res) => {
    res.end(`${new Date().toDateString()} Method ${req.method}`)
});

module.exports = router;