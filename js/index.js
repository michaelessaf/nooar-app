'use strict';

var slider = document.getElementById("Range");
var output = document.getElementById("card");
output.style.width = (slider.value + "rem"); // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.style.width = (slider.value + "rem");
}
