
$(document).ready(function () {

	$(".thumbs img").click(function () {

		var smallTitle =parseInt($(this).attr("title"));

		$(".gallery img").removeClass("opaque");
		var newImg = $(this).parent().index();


		$(".gallery img").eq(newImg).addClass("opaque");

		$(".picture_counter").html(smallTitle);
		return false;
	});



	var dx = 120;
	$(".thumb_prev").click(function() {
		var currentPos = parseInt($(".carousel").css('margin-left').replace(/[^-\d\.]/g, ''));
		var offset;
		(currentPos == 0) ? offset = 0 : offset = currentPos + dx;

		//$(".carousel").css('margin-left', '' + offset + 'px');
		$(".carousel").animate({ marginLeft: offset }, 800);
	});




	$(".thumb_next").click(function () {




		var currentPos = parseInt($(".carousel").css('margin-left').replace(/[^-\d\.]/g, ''));
		var maxWidth, offset;
		maxWidth = $(".thumbs img").length * dx;
		((-currentPos) >= maxWidth) ? offset = currentPos : offset = currentPos - dx;
		//$(".carousel").css('margin-left', offset + 'px');
		$(".carousel").animate({ marginLeft: offset }, 800);
	});


});
