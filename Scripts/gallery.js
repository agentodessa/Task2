$(document).ready(function () {

	$(".thumbs img").click(function () {
		
		var smallTitle =parseInt($(this).attr("title"));

		$(".gallery img").removeClass("opaque");
		var newImg = $(this).parent().index();
		$(".gallery img").eq(newImg).addClass("opaque");
		$(".picture_counter").html(smallTitle);
		return false;
	});


	var isAnimated;
	var dx = 102;
	$(".thumb_prev").click(function() {

		var currentPos = parseInt($(".carousel").css('margin-left').replace(/[^-\d\.]/g, ''));
		var offset;
		(currentPos >= 0) ? offset = 0 : offset = currentPos + dx;
		if (isAnimated) {
			isAnimated = true;
		}
		$(".carousel").animate({ marginLeft: offset }, 500, function() {
			isAnimated = false;
		});
});




	$(".thumb_next").click(function () {
		isAnimated = true;
		var currentPos = parseInt($(".carousel").css('margin-left').replace(/[^-\d\.]/g, ''));
		var maxWidth, offset;
		maxWidth = ($(".thumbs img").length -1) * dx;
		((-currentPos) >= maxWidth) ? offset = currentPos : offset = currentPos - dx;

			$(".carousel").animate({ marginLeft: offset }, 500, function () {
				isAnimated = false;
			});
	});
});
