$(window).load(function() {

  var $container = $('#portfolio');
  // initialize
  $container.masonry({
    columnWidth: 5,
    itemSelector: '.item'
  });

});
$(document).ready(function(){
	
	var numImgs = $("#portfolio>a>img").length;
	var randNum = Math.floor(Math.random()*numImgs);
	$("#portfolio>a>img").eq(randNum).attr("id","special-img");
	$("#special-img").animate({opacity: 1.0},1);

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});	
});



