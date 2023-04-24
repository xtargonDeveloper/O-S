const express = require("express")

const http = require("http")
const request = require("request")
const { isObject } = require("util")

const port = 8000
var app = express();

let server = http.createServer(app).listen(port, ()=>{
    console.log("server listening in port "+ port)
})

const Engine = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["ga-orderSystem"],
    credentials: true
  }
})

var orders = [];
function between(min, max) {  
    return Math.floor(
        Math.random() * (max - min) + min
    )
}

Engine.on("connection", (socket)=>{
    Engine.emit("first", {a: "hello from server"})
    
    socket.on("sendOrder", (body)=>{
        var clientSocketID = body.room
        var ident = between(10, 20000)

        Engine.to(clientSocketID).emit("ask", 'Listo! Tu pedido llegara pronto');
        Engine.emit("reciveOrder", {a: ident, b: body.order});

        orders.push(body.order)
        console.log(orders)
    })

    socket.on("loginAdmin", (body)=>{
        console.log(body)
    })

    app.get("/", (req, res)=>{
        res.send(orders)
    })
})

