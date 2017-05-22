var figure = $(".v").hover(hoverVideo, exitVideo);

function hoverVideo(e) {  
	$('video', this).get(0).muted = false;
	$('a', this).get(0).style.color = "#ADD8E6";
}

function exitVideo(e) {
   $('video', this).get(0).muted = true;
   $('a', this).get(0).style.color = "white";
   $('a', this).get(1).style.color = "white";
}

var figure = $(".p").hover(hoverImage, exitImage);

function hoverImage(e) {
	$('a', this).get(0).style.color = "#ADD8E6";
	$('a', this).get(1).style.color = "#ADD8E6";
}

function exitImage(e) {
   $('a', this).get(0).style.color = "white";
   $('a', this).get(1).style.color = "white";
}