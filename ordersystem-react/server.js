const express = require("express")
const Engine = require("socket.io")(8080)
const http = require("http")
const request = require("request")
const { isObject } = require("util")

const port = 8000
var app = express();

app.get("/", (req, res)=>{
    res.send("Hello World")
})

let server = http.createServer(app).listen(port, ()=>{
    console.log("server listening in port "+ port)
})

Engine.on("connection", (socket)=>{
    Engine.emit("first", {a: "hello from server"})

    socket.on("ask", (body)=>{
        Engine.emit("askEmit", {a: "hello"})
    })
})

