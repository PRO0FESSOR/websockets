const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    connectionStateRecovery: {
        maxAttempts: 5,
        maxDelay: 5000,
        randomizationFactor: 0.5
    }
});

app.get('/',(req,res)=>{
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath);
})

io.on('connection', (socket) => {
    console.log('A user connected');
    socket.emit('connection state', { recovered: false });

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });

    socket.on('reconnect_attempt', () => {
        socket.emit('connection state', { recovered: true });
    });
});
server.listen(8080,()=>{
    console.log("server started");
})