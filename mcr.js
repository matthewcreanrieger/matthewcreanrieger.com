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

var bkgImg = new Array (
		"../assets/bkgImg/1.jpg",
		"../assets/bkgImg/2.jpg",
		"../assets/bkgImg/3.jpg",
		"../assets/bkgImg/4.jpg",
		"../assets/bkgImg/5.jpg",
		"../assets/bkgImg/6.jpg",
		"../assets/bkgImg/7.jpg",
		"../assets/bkgImg/8.jpg",
		"../assets/bkgImg/9.jpg",
		"../assets/bkgImg/10.jpg",
		"../assets/bkgImg/11.jpg",
		"../assets/bkgImg/12.jpg",
		"../assets/bkgImg/13.jpg",
		"../assets/bkgImg/14.jpg",
		"../assets/bkgImg/15.jpg",
		"../assets/bkgImg/16.jpg",
		"../assets/bkgImg/17.jpg",
		"../assets/bkgImg/18.jpg",
		"../assets/bkgImg/19.jpg",
		"../assets/bkgImg/20.jpg",
		"../assets/bkgImg/21.jpg",
		"../assets/bkgImg/22.jpg",
		"../assets/bkgImg/23.jpg",
		"../assets/bkgImg/24.jpg"
);
var bkgImgIndex = 0;
	
function rndBkgImgDsply (x) {
	bkgImgIndex = bkgImgIndex + x;
	if (bkgImgIndex < 0) bkgImgIndex = bkgImg.length - 1;
	if (bkgImgIndex > bkgImg.length - 1) bkgImgIndex = 0;
	document.getElementById ( "bkgImg" ) .src = bkgImg[bkgImgIndex];
}

window.onload = rndBkgImgDsply (0);