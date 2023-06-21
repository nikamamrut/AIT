document.addEventListener("DOMContentLoaded", function() {
    // SVG
    var svgCanvas = document.getElementById("svgCanvas");

    var svgTriangle = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    svgTriangle.setAttribute("points", "250,50 50,400 450,400");
    svgTriangle.setAttribute("fill", "orange");

    svgCanvas.appendChild(svgTriangle);

    // Canvas
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    var path = new CanvasPath();

    path.moveTo(250, 50);
    path.lineTo(50, 400);
    path.lineTo(450, 400);
    path.closePath();

    ctx.fillStyle = "orange";
    ctx.fill(new Path2D(path.toString()));
});