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

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    });
  });

server.listen(8080,()=>{
    console.log("server started");
})