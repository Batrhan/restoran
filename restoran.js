placeSmallCubes()
function placeSmallCubes (){
let originalSmallCube = document.getElementById("cube0")
let container = document.getElementById("smallCubesContainer")
w = 66.6
startLeft = originalSmallCube.offsetLeft
startTop = originalSmallCube.offsetTop
let j =0
for( let i=1; i < 9; i++) {
if(i%3==0){
    j++
}
copySmallCube = originalSmallCube.cloneNode(true);
copySmallCube.style.left= startLeft + w*(i%3);
copySmallCube.style.top = startTop + w*j;
copySmallCube.id = "cube" + i;
container.appendChild(copySmallCube)
}
}
function changeColor() {
    var square = document.querySelector('.square');
    square.classList.toggle('clicked');
  }
let x = 0;
let deg = 0;
let square = document.getElementById("square");
let speed = 22;
let trenie = 0.1;
let rotateSpeed = 5;
let rotateAccel = 0.07; 
let isMoved = false 
function moveBigSquare(){ 
    if(rotateSpeed < 0){
rotateSpeed = 0
rotateAccel = 0
}
if(x >= 1006 && isMoved == false) {
isMoved = true
moveAllSquares()
}
if(speed < 0){
    return 0;
}
x += speed;
speed -= trenie 
deg += rotateSpeed;
rotateSpeed -= rotateAccel
square.style.left = x + "px";
square.style.transform = "rotateZ("+deg+"deg)"; 
setTimeout(moveBigSquare, 10);
}
function moveSmallSquare (cube, speed2left, speed2top, angle2, x2, y2, rotateSpeed2) {
    if(rotateSpeed2 < 0){
    rotateSpeed2 = 0
    rotateAccel2 = 0
    }
    if(speed2left < 0){
        return 0;
    }   
    x2 += speed2left;
    speed2left -= trenie*0.5;
    y2 -= speed2top;
    speed2top -= trenie * 0.15 
    cube.style.left = x2 + "px";
    cube.style.top = y2 + "px"; 
    angle2 -= rotateSpeed2
    rotateSpeed2 -= rotateAcce12 
    cube.style.transform = "rotateZ("+angle2+"deg)";
    console.log(cube);
    setTimeout(function(){moveSmallSquare (cube, speed2left, speed2top, angle2, x2, y2, rotateSpeed2)}, 5);
    }

    let rotateAcce12 = 0.07;
    function moveAllSquares(){
    for (let i =0; i < 9; i++){
    let cube = document.getElementById("cube" + i);
    let speed2left = 11
    let speed2top = 3 - (i*Math.random())
    let angle2 = 0
    let x2 = cube.offsetLeft;
    let y2 = cube.offsetTop;
    let rotateSpeed2 = 5*Math.random();
    moveSmallSquare (cube, speed2left, speed2top, angle2, x2, y2, rotateSpeed2)
    }
}