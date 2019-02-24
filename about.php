<!DOCTYPE html>
<html lang=”en”>
	<head>
		<title>Matthew Crean Rieger</title>
		<meta charset=”utf-8”>
		<link rel="stylesheet" type="text/css" href="mcr.css">
		<script type="text/javascript">
			
		</script>
	</head>
	
	<body>
		<div class="hdrBkg">
			<div class="logo">
				<a href="about.html">Matthew C. Rieger</a>
			</div>
		
			<div class="info">
				<a href="experience.html">Experience</a>
				<a href="assets/pdf/resume.pdf" target="_blank">Resume</a><br>
				<a href="mailto:matthewcreanrieger@gmail.com">Contact</a>
				<a href="etc.html">Etc.</a></p>
			</div>
			
			<img src="assets/grey.png">
		</div>
		
		<div class="responder">
			<div class="left">
				<h1>
					<div id="welcome-1" hidden>Welcome</div>
					<div id="welcome-2" hidden>Bienvenue</div>
					<div id="welcome-3" hidden>&#12424;&#12358;&#12371;&#12381;</div>
					<div id="welcome-4" hidden>Willkommen</div>
					<div id="welcome-5" hidden>Hoan ngh&#234;nh</div>
					<div id="welcome-6" hidden>V&auml;lkommen</div>
					<div id="welcome-7" hidden>Bienvenido</div>
					<div id="welcome-8" hidden>&#27489;&#36814;&#20809;&#33256;</div>
					<div id="welcome-9" hidden>Welkom</div>
					<div id="welcome-10" hidden>&#54872;&#50689;&#54633;&#45768;&#45796;</div>
					<div id="welcome-11" hidden>W&euml;llkomm</div>
					<div id="welcome-13" hidden>&#1044;&#1086;&#1073;&#1088;&#1086; &#1087;&#1086;&#1078;&#1072;&#1083;&#1086;&#1074;&#1072;&#1090;&#1100;</div>
					<div id="welcome-12" hidden>Selamat datang</div>
					<div id="welcome-14" hidden>Velkommen</div>
					<div id="welcome-14" hidden>&#3618;&#3636;&#3609;&#3604;&#3637;&#3605;&#3657;&#3629;&#3609;&#3619;&#3633;&#3610;</div>
				</h1>
				<p>
				<?php
					include 'vars.php';
					echo "My first PHP script!";
					echo $tester;
				?>
				I built this website not only to showcase my professional experience, but also as a portfolio piece in and of itself. I opted to build the site from scratch, rather than to use a website builder, in order to demonstrate my ability to self-teach new skills.<br><br>I am not a graphic designer nor a professional developer, but everything on this website reflects my original work. The code for this site can be viewed on <a href="https://github.com/matthewcreanrieger/portfolio/tree/gh-pages" target="_blank">my GitHub profile</a>.</p>
			</div>
			
			<div class="me">
				<img src="assets/pic/me.jpg">
			</div>
		</div>
		
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
      <script src="mcr.js"></script>
      <script>
			var divs = $('div[id^="welcome-"]').hide(), i = 0;
				(function cycle() { 
					divs.eq(i).fadeIn(800).delay(2000).fadeOut(800, cycle);
					i = ++i % divs.length;
				})();
		</script>
	</body>
</html>

