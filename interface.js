let WIDTH =1000
let HEIGHT = 800

angle = 0
speed = 0

let dispAng 
let dispSpe

let multiAng = 1
let multiSpeed = 200

let sendValues = {}

function setup() {
    dispAng = document.getElementById("angle")
    dispSpe = document.getElementById("speed")
    createCanvas(WIDTH, HEIGHT);
    stroke(51);
    strokeWeight(5);
}
  
function draw() {
    background(220);
    
    push()
        translate(WIDTH/2, HEIGHT/2)
        let x = (Math.sin(angle)*speed)*multiSpeed
        let y = (Math.cos(angle)*speed)*multiSpeed

        line(0,0,x,y)
        circle(x,y, 10)

        if(controllers[0]){
            update();
        }
    pop()
}
  

function update () {
    let xAxis = controllers[0].axes[0]
    let yAxis = controllers[0].axes[1]
    
    angle = Math.atan2(xAxis, yAxis)
    speed = Math.hypot(xAxis, yAxis)
    
    sendValues.angle = angle
    sendValues.speed= speed

    dispAng.innerText = angle
    dispSpe.innerText = speed

    socket.emit('drive-control', sendValues)
}