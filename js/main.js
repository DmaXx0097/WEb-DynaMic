// JavaScript Document
$(document).ready(function(){
	
	$nav=$('.nav');
	$toggleCollapse=$('.toggle-collapse');
	
	/** click event on toggle menu */
	$toggleCollapse.click(function(){
		$nav.toggleClass('collapse');
	})
})
$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
});
/*$('.down').click(function(){
	$('html,body').animate({
		$scrollTop:0
	},1000);
})*/