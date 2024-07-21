const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);

app.get('/',(req,res)=>{
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath);
})

server.listen(8080,()=>{
    console.log("server started");
})