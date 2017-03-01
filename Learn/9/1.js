$(function(){
	$('.navbar-right li:nth-child(2) a')
	.click(function(){
		$('body').animate({scrollTop: 700});
		return false;
	})

	$('.navbar-right li:nth-child(3) a')
	.click(function(){
		$('body').animate({scrollTop: 1500});
		return false;
	})
})  
