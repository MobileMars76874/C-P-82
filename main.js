mouseEvent = "";

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
mouseEvent = "mousedown";
color = document.getElementById("C").value;
line_width = document.getElementById("W").value;
radius = document.getElementById("R").value;
}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){

current_x = e.clientX - canvas.offsetLeft;
current_y = e.clientY - canvas.offsetTop;

if(mouseEvent == "mousedown"){
ctx.beginPath()
ctx.strokeStyle = color;
ctx.lineWidth = line_width;
ctx.arc(current_x, current_y, radius, 0 ,2 * Math.PI);
ctx.stroke()
}
}

