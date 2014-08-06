
$(document).ready(function () {

	$(".thumbs a").click(function () {

		var largePath = $(this).attr("href");
		var largeAlt = $(this).attr("title");

		$(".largeimg").attr({ src: largePath, title: largeAlt });


		$(".picture_counter").html(largeAlt);
		return false;

	});

});
