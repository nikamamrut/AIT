document.addEventListener("DOMContentLoaded", function() {
    var svgCanvas = document.getElementById("svgCanvas");

    var rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rectangle.setAttribute("x", "50");
    rectangle.setAttribute("y", "50");
    rectangle.setAttribute("width", "200");
    rectangle.setAttribute("height", "100");
    rectangle.setAttribute("fill", "blue");

    svgCanvas.appendChild(rectangle);

    animateRectangle(rectangle);
});

function animateRectangle(rectangle) {
    var x = parseInt(rectangle.getAttribute("x"));
    var y = parseInt(rectangle.getAttribute("y"));

    var animation = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animation.setAttribute("attributeName", "x");
    animation.setAttribute("from", x);
    animation.setAttribute("to", x + 200);
    animation.setAttribute("dur", "2s");
    animation.setAttribute("repeatCount", "indefinite");

    rectangle.appendChild(animation);
}




