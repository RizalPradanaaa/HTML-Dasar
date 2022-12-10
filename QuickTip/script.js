$(window).scroll(function() {
	
	let windowTop = $(this).scrollTop();
	console.log(windowTop);

	$('h1').css({
		'transform' : 'translate(0px, '+ windowTop +'%)'
	});

	$('.kotak').css({
		'transform' : 'translate(0px, '+ windowTop/2 +'px)'
	});
});