var figure = $(".v").hover(hoverVideo, exitVideo);

function hoverVideo(e) {  
// 	$('video', this).get(0).muted = false;
	if ($('video', this).get(0).id == "v2" || $('video', this).get(0).id == "v6") $('video', this).get(0).volume = .7;
	else if ($('video', this).get(0).id != "v5") $('video', this).get(0).volume = .4;
	$('a', this).get(0).style.color = "gold";
}

function exitVideo(e) {
   $('video', this).get(0).muted = true;
   $('a', this).get(0).style.color = "white";
   $('a', this).get(1).style.color = "white";
}

var figure = $(".p").hover(hoverImage, exitImage);

function hoverImage(e) {
	$('a', this).get(0).style.color = "gold";
	$('a', this).get(1).style.color = "gold";
}

function exitImage(e) {
   $('a', this).get(0).style.color = "white";
   $('a', this).get(1).style.color = "white";
}

var bkgImg = new Array ();
for (i = 1; i < 90; i++) { 
		bkgImg.push('assets/bkgImgs/' + i + '.jpg');
};

var bkgImgIndex = Math.floor ( Math.random () * bkgImg.length );
	
function bkgImgDsply (x) {
	bkgImgIndex = bkgImgIndex + x;
	if (bkgImgIndex < 0) bkgImgIndex = bkgImg.length - 1;
	if (bkgImgIndex > bkgImg.length - 1) bkgImgIndex = 0;
	document.getElementById ( "bkgImg" ) .src = bkgImg[bkgImgIndex];
}

window.onload = bkgImgDsply (0);