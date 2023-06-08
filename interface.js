let WIDTH =1000
let HEIGHT = 800

angle = 0
speed = 0

let dispAng 
let dispSpe

let sendValues = {

}

function setup() {
    dispAng = document.getElementById("angle")
    dispSpe = document.getElementById("speed")
    createCanvas(WIDTH, HEIGHT);
    // x = WIDTH *0.5
    // y = HEIGHT *0.5
    angleMode(DEGREES)
    rectMode(CENTER)

}
  
function draw() {
    background(220);
    
    push()
        translate(WIDTH/2, HEIGHT/2)
        rotate(angle)
        rect(0,0,50,50+speed);
        if(controllers[0]){
            update();
        }
    pop()
}
  

function update () {
    let multi = 5
    angle =  (controllers[0].axes[0]) * 80
    speed =  (controllers[0].axes[1]) * 400
    
    sendValues.angle = controllers[0].axes[0]
    sendValues.speed= -controllers[0].axes[1]

    dispAng.innerText = controllers[0].axes[0]
    dispSpe.innerText = -controllers[0].axes[1]

    socket.emit('drive-control', sendValues)
}