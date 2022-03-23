const websocket = require("ws")
const user = require("./model/ther")
require("./db")
const wss = new websocket.Server({port:8080},()=>{
    console.log("server started");
})
  
wss.on("connection",(ws)=>{
    ws.on("message",(data)=>{
        const use = user({
            data:data
        })
        use.save()
      console.log("data recived"+data);
      ws.send("success")
    })
})
wss.on("listening",()=>{
    console.log("server is listening on port 8080");
})