fullscreen();
$(window).resize(fullscreen);
$(window).scroll(headerParallax);

function fullscreen() {
	var masthead = $('.masthead');
	var windowH = $(".video.v1").height();
	var windowH1 = $(".video.v2").height();
	var windowH2 = $(".video.v3").height();
	var windowW = $(window).width();

	masthead.width(windowW);
	masthead.height(windowH);
	masthead.height(windowH1);
	masthead.height(windowH2);
}

function headerParallax() {
	var st = $(window).scrollTop();
	var headerScroll = $('.masthead h1');

	if (st < 500) {
		headerScroll.css('opacity', 0.4-st/1000);
		$('.masthead-arrow ').css('opacity', 0.4-st/250);
		headerScroll.css({
			'-webkit-transform' : 'translateY(' + st/7 + '%)',
			'-ms-transform' : 'translateY(' + st/7 + '%)',
			transform : 'translateY(' + st/7 + '%)'
		});
	}
}
