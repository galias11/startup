function getRandomColor(){
    let letter = '0123456789ABCDEF';
    let color = "#";
    for(var i =0;i < 6; i++){
        color += letter[Math.floor(Math.random()*16)];
    }
    return color;
}
const getRandomNumber = (max) => { 
    return Math.floor(Math.random() * Math.floor(max));
}

const drawingCircle = (posX,posY,radius,strtAngle,endAngle,colorm) => {
    let canvas = document.getElementById("canvasElem");
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.arc(posX,posY,radius,strtAngle,endAngle);
    ctx.fillStyle = colorm;
    ctx.fill();
    ctx.stroke();
}
const drawingRectangule = (posX,posY,width,height,color) =>{
    let canvas = document.getElementById("canvasElem");
    let context = canvas.getContext("2d");
    context.beginPath();
    context.rect(posX,posY,width,height);
    context.fillStyle = color;
    context.fill();
    context.stroke();
}
function drawElementsRandom(){
    let canvas = document.getElementById("canvasElem");
    drawingCircle(getRandomNumber(canvas.width),getRandomNumber(canvas.height),getRandomNumber(90),0,2*Math.PI,getRandomColor());
    drawingCircle(getRandomNumber(canvas.width),getRandomNumber(canvas.height),getRandomNumber(90),0,2*Math.PI,getRandomColor());
    drawingRectangule(getRandomNumber(canvas.width),getRandomNumber(canvas.height),getRandomNumber(canvas.width/2),getRandomNumber(canvas.height/2),getRandomColor());   
    drawingRectangule(getRandomNumber(canvas.width),getRandomNumber(canvas.height),getRandomNumber(canvas.width/2),getRandomNumber(canvas.height/2),getRandomColor());
}
function animatedRectang(posX,posY,width,height,color){
    let canvas = document.getElementById("canvasElem");
    let cxt = canvas.getContext("2d");

    setInterval(()=>{
        cxt.clearRect(0,0,width,height);
        posY = (posY + 10) % canvas.height;
        drawingRectangule(posX,posY,width,height,color);
    },15);
}

window.addEventListener("load",() =>{
    drawElementsRandom();

    animatedRectang(getRandomNumber(canvasElem.width),getRandomNumber(canvasElem.height),getRandomNumber(canvasElem.width/2),getRandomNumber(canvasElem.height/2),getRandomColor());
})