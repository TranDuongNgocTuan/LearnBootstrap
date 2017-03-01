$(function(){
	$('.n1').click(function(){
		$('body').animate({scrollTop:$("#sanpham").offset().top}, 2000, "easeInOutBack");
		return false;
	});

	$('.n2').click(function(){
		$('body').animate({scrollTop:$("#gioithieu").offset().top});
		return false;
	});

	$('.n3').click(function(){
		$('body').animate({scrollTop:$("#lienhe").offset().top});
		return false;
	});
	$(window).scroll(function(){
		vitrihientai = $('body').scrollTop();
		if (vitrihientai>318){
			$('.navbar-default').addClass('tienhoa');
		}
		else{
			$('.navbar-default').removeClass('tienhoa');	
		}

		if (vitrihientai>681){
			$('.portfolio').addClass('bienra');
		}

	});
})	  
