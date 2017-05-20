var figure = $("#v1").hover(hoverVideo, hideVideo);
var figure = $("#v2").hover(hoverVideo, hideVideo);
var figure = $("#v3").hover(hoverVideo, hideVideo);
var figure = $("#v4").hover(hoverVideo, hideVideo);
var figure = $("#v5").hover(hoverVideo, hideVideo);
var figure = $("#v6").hover(hoverVideo, hideVideo);

function hoverVideo(e) {  
	$('video', this).get(0).muted = false;
}

function hideVideo(e) {
   $('video', this).get(0).muted = true;
}

// function rndBkgImgDsply () {
// 	var bkgImg = new Array (
// 		"assets/bkgImg/1.jpg",
// 		"assets/bkgImg/2.jpg",
// 		"assets/bkgImg/3.jpg",
// 		"assets/bkgImg/4.jpg",
// 		"assets/bkgImg/5.jpg",
// 		"assets/bkgImg/6.jpg",
// 		"assets/bkgImg/7.jpg",
// 		"assets/bkgImg/8.jpg",
// 		"assets/bkgImg/9.jpg",
// 		"assets/bkgImg/10.jpg",
// 		"assets/bkgImg/11.jpg",
// 		"assets/bkgImg/12.jpg",
// 		"assets/bkgImg/13.jpg",
// 		"assets/bkgImg/14.jpg",
// 		"assets/bkgImg/15.jpg",
// 		"assets/bkgImg/16.jpg",
// 		"assets/bkgImg/17.jpg",
// 		"assets/bkgImg/18.jpg",
// 		"assets/bkgImg/19.jpg",
// 		"assets/bkgImg/20.jpg",
// 		"assets/bkgImg/21.jpg",
// 		"assets/bkgImg/22.jpg",
// 		"assets/bkgImg/23.jpg",
// 		"assets/bkgImg/24.jpg"
// 	);
// 	var rndBkgImg = Math.floor ( Math.random () * bkgImg.length );
// 	document.getElementById ( "bkgImg" ) .src = bkgImg [ rndBkgImg ];
// }
// 
// window.onload = rndBkgImgDsply ();