$(function(){
	//change size desktop
	$(window).resize(function(){
		var docao = $(window).height();
		$('.top1').css({'height': docao});	
	});

	// click into menu
	$('.menu').click(function(){
		$('.menuphai').addClass('ra');
		return false;
	});

	$('.tat').click(function(){
		$('.menuphai').removeClass('ra');
		return false;
	});

	//move web
	$('.top1 a.btn.btn-default').click(function(){
		$('body').animate({scrollTop: $('.top2').offset().top});
		return false;
	});

	$('.n2').click(function(){
		$('body').animate({scrollTop: $('.top3').offset().top});
		return false;
	});	

	$('.n1').click(function(){
		$('body').animate({scrollTop: 0});
		return false;
	});	
	
})  
 