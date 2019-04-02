/* Dropdown Module ***************************************************************************/
$(document).ready(Dropdown = function() {
	var dropdown = '.js-dropdown';
	var trigger = '.js-dropdown-trigger';
	var content = '.js-dropdown-content';
	var duration = 200;

	$(dropdown).find(trigger).click(function() {
		$(this).next(content).slideToggle(duration);
		$(this).find('i').toggleClass('isActive');
	});

	$(dropdown).find(content).click(function() {
		$(this).slideToggle(duration);
		$(this).prev(trigger).find('i').toggleClass('isActive');
	});
});

module.exports = Dropdown;