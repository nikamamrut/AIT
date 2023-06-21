document.addEventListener("DOMContentLoaded", function() {
    var redRange = document.getElementById("redRange");
    var greenRange = document.getElementById("greenRange");
    var blueRange = document.getElementById("blueRange");
    var redValue = document.getElementById("redValue");
    var greenValue = document.getElementById("greenValue");
    var blueValue = document.getElementById("blueValue");
    var colorBox = document.getElementById("colorBox");

    redRange.addEventListener("input", function() {
        redValue.textContent = this.value;
        changeBackgroundColor();
    });

    greenRange.addEventListener("input", function() {
        greenValue.textContent = this.value;
        changeBackgroundColor();
    });

    blueRange.addEventListener("input", function() {
        blueValue.textContent = this.value;
        changeBackgroundColor();
    });

    function changeBackgroundColor() {
        var red = redRange.value;
        var green = greenRange.value;
        var blue = blueRange.value;
        var color = "rgb(" + red + "," + green + "," + blue + ")";
        colorBox.style.backgroundColor = color;
    }
});