//go to server 
const socket = io("http://192.168.2.11:3000")

socket.on("connection", ()=> {
    console.log("c")
    socket.emit("ID", "js-controller")
})