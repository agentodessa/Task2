$(document).ready(function () {
	$(".link_section a").click(function () {
		$(".link_section a").removeClass("clicked_link");
		$(this).addClass("clicked_link");
	});


	$(".thumbs img").click(function () {
		$(".thumbs img").removeClass("active");
		var smallTitle = parseInt($(this).attr("title"));

		$(this).addClass("active");

		$(".gallery img").removeClass("opaque");
		var newImg = $(this).parent().index();
		$(".gallery img").eq(newImg).addClass("opaque");

		$(".picture_counter").html(smallTitle);
	});

	$(".thumbs img").hover(function() {
		
	});


	var isAnimated;

	var dx = 135;
	$(".thumb_prev").click(function () {
		var currentPos = parseInt($(".carousel").css('margin-left').replace(/[^-\d\.]/g, ''));
		var offset;
		(currentPos >= 0) ? (offset = 0) : (offset = currentPos + dx);
		if (!isAnimated) {
			isAnimated = true;
			$(".carousel").animate({ marginLeft: offset }, 400, function () {
				isAnimated = false;
			});
		}
	});


	$(".thumb_next").click(function () {

		var currentPos = parseInt($(".carousel").css('margin-left').replace(/[^-\d\.]/g, ''));
		var maxWidth, offset, liMargin,elementCount;
		liMargin = parseInt($(".thumbs_nav li").css("margin-left"));
		elementCount = $(".thumbs img").length ;
		maxWidth = ((elementCount - 1) * dx)-(liMargin*elementCount);
		((-currentPos) >= maxWidth) ? (offset = currentPos) : (offset = currentPos - dx);
		if (!isAnimated) {
			isAnimated = true;
			$(".carousel").animate({ marginLeft: offset }, 400, function () {
				isAnimated = false;
			});
		}


	});
});
