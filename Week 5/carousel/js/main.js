/*Click on skip button, next image appears
Change src of the image to the next image src
(getting next image in the array)

Click on back button, previous image appears
Change src of the image to the previous image src
(getting previous image in the array)*/

var images = ['images/food1.jpg','images/food2.jpg','images/food3.jpg','images/food4.jpg','images/food5.jpg','images/food6.jpg','images/food7.jpg','images/food8.jpg'];
var i = 0;
var sumOfVotes=0;
$(document).ready(function(){
	$('.skip').on('click', goForward);
	$('.back').on('click', goBack);
	$("select").on("change",goForward);
});
function goForward(){
	recordVote();
	$('#image-vote').attr('src', images[i+=1]);
	if(this.tagName=="SELECT"){
		$(this).children().removeProp('selected');
	}
}
function goBack(){
	$('#image-vote').attr('src', images[i-=1]);	
}
function recordVote(){
	sumOfVotes=parseInt($("select").val())+sumOfVotes;
	if (i==images.length-1){
		var average=sumOfVotes/images.length;
		$(".average").text("You have reached the end. Total deliciousness score was: " + average);
	}
}