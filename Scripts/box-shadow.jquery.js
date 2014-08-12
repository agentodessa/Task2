(function($) {
	$.fn.boxShadow = function(o) {
		if (!o) return;
		var b = o.split(' '), x = parseInt(b[0]), y = parseInt(b[1]), blur = 0, color = '';
		if (b.length == 3) {
			color = b[2]
		} else {
			blur = parseInt(b[2]);
			color = b[3]
		};
		return $(this).each(function() {
			var a = $(this), off = a.offset();
			a.after('<div></div>').next().css({ width: a.width() + parseInt(a.css('padding-left')) + parseInt(a.css('padding-right')), height: a.height() + parseInt(a.css('padding-bottom')) + parseInt(a.css('padding-top')), position: 'absolute', 'z-index': -1, backgroundColor: color, left: off.left + x - blur + 'px', top: off.top + y - blur + 'px' });
			if (blur) a.next().css('filter', 'progid:DXImageTransform.Microsoft.Blur(pixelradius=' + blur + ', enabled="true")')
		});
	}
})(jQuery);

$(document).ready(function () {

	$(".thumbs img").hover(function() {
		$(this).boxShadow('1px 1px 20pxpx #219ff7');
	});
})