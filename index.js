const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/',(req,res)=>{
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath);
})

io.on('connection',(socket)=>{
    console.log("a is connected");
    socket.on('disconnect',()=>{
        console.log("a is disconnected");
    })
})

server.listen(8080,()=>{
    console.log("server started");
})