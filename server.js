const express = require('express');
const app = express();
const http = require('http');



const server = http.createServer(app);
var io = require('socket.io').listen(server);
users =[];
connections =[];

server.listen(process.env.PORT || 3000); 
console.log("server running");

app.get('/',(req,res) =>{
    res.sendFile(__dirname + '/index.html');
});