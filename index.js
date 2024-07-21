const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.get('/',(req,res)=>{
    res.send("hello");
})

server.listen(8080,()=>{
    console.log("server started");
})