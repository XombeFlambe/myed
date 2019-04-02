/* Drawer Module ***************************************************************************/
$(document).ready(Drawer = function() {
	var drawer = '.js-drawer';
	var trigger = '.js-drawer-trigger';
	var content = '.js-drawer-content';
	var close = '.js-drawer-close';

	$(drawer).find(content).css("display", "none");
	$(drawer).find('.isActive').css("display", "block");

	$(drawer).find(trigger).click(function() {
		$(this).parents(drawer).find(content).slideToggle(200);
		return false;
	});

	$(drawer).find(close).click(function() {
		$(this).parents(drawer).find(content).slideUp(200);
		return false;
	});
});

module.exports = Drawer;