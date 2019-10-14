$(document).ready(function(){
	var main = $('.bxslider').bxSlider({
		mode: 'fade',
		controls : true,	//좌우 화살표
		autoControls: true,	//stop,play
		pager:true,	//페이징
		pause: 3000,
		slideWidth: 1200,	//이미지박스 크기
		speed: 500,
	});
});
