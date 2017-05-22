var figure = $(".v").hover(hoverVideo, muteVideo);

function hoverVideo(e) {  
	$('video', this).get(0).muted = false;
	$('a', this).get(0).style.color = "orange";
}

function muteVideo(e) {
   $('video', this).get(0).muted = true;
   $('a', this).get(0).style.color = "white";
}