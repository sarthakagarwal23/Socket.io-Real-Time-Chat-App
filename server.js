const express = require('express');
const app = express();
const http = require('http');



const server = http.createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log("server running");

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
io.sockets.on('connections', function(socket){
    connections.push(socket);
    console.log('Connected :%s spckets connected', connections.length);

    socket.on('disconnect', function(data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log('Disconnected : %s sockets connected', connections.length);
    });
    socket.on('send message', function(data){
        console.log(data);
        io.sockets.emit('new message',{msg:data});

    });
});
