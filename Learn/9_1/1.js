$(function(){
	$(window).resize(function(){
		var docao = $(window).height();
		console.log(docao);
		$('.bigpicture').css({'height': docao});	
	});

	$(window).scroll(function(){
		vitrihientai = $('body').scrollTop();
				console.log(vitrihientai);
		// console.log(vitrihientai);
		if (vitrihientai>106){
			$('.navbar-default').addClass('change-bar');
		}
		else{
			$('.navbar-default').removeClass('change-bar');	
		}

		// if (vitrihientai>681){
		// 	$('.portfolio').addClass('bienra');
		// }
	});
})  
