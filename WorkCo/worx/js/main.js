$(window).load(function(){
	$("#carousel").als({
		visible_items: 3,
		scrolling_items: 2,
		orientation: "horizontal",
		circular: "yes",
		autoscroll: "yes",
		interval: 4000
	});
	$( "#tabs" ).tabs();
	$('#slider').nivoSlider({
		directionNav:false,
		effect: "fade"
	});
});
$(document).ready(function(){
	$("#tabs li a").on("click", function(e){
		e.preventDefault();
	});
	$('.label-over').focus(function() {
	  $('label.label-hide[for="' + $(this)[0].id + '"]').fadeOut(200);
	  }).blur(function() {
	  if($(this).val() == '') {
	    $('label.label-hide[for="' + $(this)[0].id + '"]').fadeIn(200);
	  }
	});
});
