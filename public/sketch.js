function preload(){
  // put preload code here
}

var socket;

function setup() {
  createCanvas(windowWidth,windowHeight);
  socket = io();

  socket.on('mouseBroadcast', newDrawing);

  function newDrawing(receivedData){
    fill('yellow');
    ellipse(receivedData.x, receivedData.y, 50);
  }

  fill('red');
  background("red");

}

function draw() {

}

function mouseDragged(){
  fill("white")
  ellipse(mouseX, mouseY, 50);

  var sendData = {
    x:mouseX,
    y:mouseY
  }

  socket.emit('mouse', sendData);


}
