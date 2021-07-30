const event = require('events');
const fs = require('fs');
const http = require('http');

const express = require('express');

const app = express();

//Homework1

// const myEvent = new event.EventEmitter();

// myEvent.on('homework', () => {
//     fs.readFile('Homeworks.txt', "utf-8", (err, data) => {
//         console.log(data);
//     })
// })

// myEvent.emit('homework');

//Homework2

const rout = require('./users/routes');

app.use(rout);

http.createServer(app).listen(3000);

