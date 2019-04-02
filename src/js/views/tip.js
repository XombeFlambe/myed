/* Tip Module ***************************************************************************/
$(document).ready(Tip = function() {
	var tip = '.js-tip';
	var trigger = '.js-tip-trigger';
	var content = '.js-tip-content';
	var spike = '.js-tip-spike';

	$(tip).find(content).prepend('<div class="tip-spike js-tip-spike"></div>');

	$(tip).find(trigger).click(function() {
		var posX = $(this).position().left;

		$(this).parents(tip).find(content).slideToggle(200);
		$(this).parents(tip).find(spike).css('left', posX);
	});

	
});

module.exports = Tip;