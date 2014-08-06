
$(document).ready(function () {

	//$("h2").append('<em></em>')

	$(".thumbs a").click(function () {

		var largePath = $(this).attr("href");
		var largeAlt = $(this).attr("title");

		$(".largeimg").attr({ src: largePath, alt: largeAlt });
		 return false;
	});

});
