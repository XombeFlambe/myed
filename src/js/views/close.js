/* Close Module ***************************************************************************/
$(document).ready(Close = function() {
	var close = '.js-close';
	var trigger = '.js-close-trigger';
	var duration = 300;

	$(close).find(trigger).click(function() {
		$(this).parents(close).slideUp(duration);
		return false;
	});
});

module.exports = Close;