'use strict';

var slider = document.getElementById("Range");
var output = document.getElementById("card");
output.style.width = (slider.value + "rem"); // Display the default slider value

let arcScale = 25;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.style.width = (slider.value + "rem");
    arcScale = slider.value;
    $("#curves").css("height", ((arcScale*1.5)+"rem"));
    console.log(arcScale);


    $(".ruler[data-items]").each(function() {
        var ruler = $(this).empty(),
            len = Number(ruler.attr("data-items")) || 0,
            item = $(document.createElement("li")),
            i;
        for (i = 0; i < len; i++) {
            if(i*(1.2*arcScale*.6)<=100){
              ruler.append(item.clone().text(i + 1));
            } else {
              item.nextAll("li").remove();
            }
        }
    $(".ruler").
            css("padding-right", (arcScale*.60+"vw")).
            find("li").
            css("padding-left", (arcScale*.60+ "vw"));
});
}



//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches


current_fs = $("#page1").children();
console.log($("#page1").children());
$("#backArrow").hide();
$("#page1").children().show();


let nextField = $(".next").click(function(){
  $("#backArrow").show();

	next_fs = current_fs.parent().next().children();
  console.log("curr fs=" + current_fs);
  console.log("nxt fs=" + next_fs);

	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");


	//show the next fieldset
  current_fs.hide();
	next_fs.show();
  current_fs = next_fs;
  console.log(current_fs);
  console.log(current_fs.parent().index());
  if ((current_fs.parent().index() == 3)){
    console.log("true");
    $("#nextArrow").hide();
    $("#flexContainer").css("justify-content","flex-start");
  }
});

// $("clothesIcon").click(nextField);

//back arrow
// $("#page1").children().show();
$(".back").click(function(){
	previous_fs = current_fs.parent().prev().children();
  $("#nextArrow").show();

	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(previous_fs)).addClass("active");


	//show the next fieldset
  current_fs.hide();
	previous_fs.show();
  current_fs = previous_fs;
  console.log(current_fs);

  console.log(current_fs.parent().index());
  if ((current_fs.parent().index() == 1)){
    $("#backArrow").hide();
  }
  if ((current_fs.parent().index() == 2)){
    $("#flexContainer").css("justify-content","center");
  }
});

const spacing = arcScale;
$(function() {
    // Build "dynamic" rulers by adding items
    $(".ruler[data-items]").each(function() {
        var ruler = $(this).empty(),
            len = Number(ruler.attr("data-items")) || 0,
            item = $(document.createElement("li")),
            i;
        for (i = 0; i < len; i++) {
            if(i*(1*arcScale*.6)<=80){
              ruler.append(item.clone().text(i + 1));
            }
        }
    });
    $(".ruler").
        css("padding-right", (arcScale*.6+"vw")).
        find("li").
        css("padding-left", (arcScale*.6+ "vw"));
});
