canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_posistion_of_x, last_posistion_of_y;
color="black";
width_of_line=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of)line").value;
mouseEvent="mouseDown";
}
canvas.addEventListener("mousedown", my_mousedown);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e){
        mouseEvent="mouseLeave";   
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
current_posistion_of_mouse_x=e.clientX-canvas.offsetleft;
current_posistion_of_mouse_y=e.clientY-canvas.offsettop;
if(mouseEvent=="mouseDown"){
    ctx.beginpath();
    ctx.strokestyle=color;
    ctx.linewidth=width_of_line;
    console.log("last posistion of x snd y cordinates= ");
    console.log("Last position of x and y coordinates = "); 
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    console.log("Current position of x and y coordinates = "); 
    console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
    ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
