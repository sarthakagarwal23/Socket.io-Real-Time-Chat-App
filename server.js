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
io.sockets.on('connections',(socket)=>{
    connections.push(socket);
    console.log('Connected :%s spckets connected' , connections.length);

//disconnect
connections.splice(connections.indexOf(socket),1);
console.log('Disconnected : %s sockets connected' , connections.length);
});
