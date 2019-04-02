/* Slim Module ***************************************************************************/
$(document).ready(Slim = function() {
	var slim = '.js-slimArc';
	var trigger = '.js-slimTrigger';
	var content = '.js-slimContent';

	if ($(trigger).prev('input').attr('checked')) {
		$(trigger).parents(slim).find(content).show(0);
	} else {
		$(trigger).parents(slim).find(content).hide(0);
	}

});

module.exports = Slim;