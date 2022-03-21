const websocket = require("ws")
const wss = new websocket.Server({port:8080},()=>{
    console.log("server started");
})
  
wss.on("connection",(ws)=>{
    ws.on("message",(data)=>{
      console.log("data recived"+data);
      ws.send(data)
    })
})
wss.on("listening",()=>{
    console.log("server is listening on port 8080");
})