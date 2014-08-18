﻿$(document).ready(function () {


	$(".carousel img").click(function () {
		$(".carousel img").removeClass("active");
		var smallTitle = parseInt($(this).attr("title"));

		$(this).addClass("active");
		var parent = $(this).parent();
		parent.css('background', 'none');


		$(".gallery img").removeClass("opaque");
		var newImg = $(this).parent().index();
		$(".gallery img").eq(newImg).addClass("opaque");

		$(".picture_counter").html(smallTitle);
	});
	//Main gallery
	var isAnimated;
	var dxGallery = 146;
	$(".thumb_prev").click(function () {
		var currentPos = parseInt($(".carousel").css('margin-left').replace(/[^-\d\.]/g, ''));
		var offset;
		(currentPos >= 0) ? (offset = 0) : (offset = currentPos + dxGallery);
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
		liMargin = parseInt($(".thumbs_nav li").css('margin-left'));
		elementCount = $(".thumbs img").length ;
		maxWidth = ((elementCount - 3) * dxGallery)-liMargin*elementCount;
		((-currentPos) >= maxWidth) ? (offset = currentPos) : (offset = currentPos - dxGallery);
		if (!isAnimated) {
			isAnimated = true;
			$(".carousel").animate({ marginLeft: offset }, 400, function() {
				isAnimated = false;
			});
		}
	});
	//Sidebar gallery
	var dxSidebar = 240;
	var counter=0;
	$(".button_rigth").click(function () {
		var currentPos = parseInt($(".carousel_sidebar").css('margin-left').replace(/[^-\d\.]/g, ''));
		var maxWidth, offset, elementCount;
		elementCount = $(".carousel_sidebar img").length;
		maxWidth = ((elementCount - 1) * dxSidebar) -  elementCount;
		((-currentPos) <= maxWidth) ? (offset = currentPos - dxSidebar) : (offset = currentPos);
		if (!isAnimated) {
			isAnimated = true;
			{
				//$(".carousel_sidebar img").eq(counter).animate({ opacity: 0 },400);
				//$(".carousel_sidebar li").eq(counter).animate({ marginRight: offset });
				$(".carousel_sidebar").animate({ marginLeft: offset }, 400, function () {
					isAnimated = false;
				});
				//$(".carousel_sidebar img").eq(counter).animate({ width: 0 });
				counter++;
			}
		}
	});

	$(".button_left").click(function() {
		var currentPos = parseInt($(".carousel_sidebar").css('margin-left').replace(/[^-\d\.]/g, ''));
		var offset;
		(currentPos >= 0) ? (offset = 0) : (offset = currentPos + dxSidebar);

		if (!isAnimated) {
			isAnimated = true;
			$(".carousel_sidebar").animate({ marginLeft: offset }, 400, function () {
				isAnimated = false;
				counter--;
				$(".carousel_sidebar img").eq(counter - 1).animate({ opacity: 1 });
				//$(".carousel_sidebar img").animate({width:0});
			});
		}
	});
});