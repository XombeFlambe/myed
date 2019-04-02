/* SubTabs Module ***************************************************************************/
$(document).ready(SubTabs = function() {
	var subTab = '.js-subTab';
	var trigger = '.js-subTab-trigger';
	var trigger1 = '.js-subTab-trigger_1';
	var trigger2 = '.js-subTab-trigger_2';
	var trigger3 = '.js-subTab-trigger_3';
	var content = '.js-subTab-content';
	var content1 = '.js-subTab-content_1';
	var content2 = '.js-subTab-content_2';
	var content3 = '.js-subTab-content_3';
	var contentActive = '.js-subTab-content.isActive';
	var duration = 300;

	// Styles subTabs item if you choose to start with an open subTabs on load //
	$(subTab).find(content).css("display", "none");
	$(subTab).find(contentActive).css("display", "block");

	// Click function logic, remove active class from triggers //
	$(subTab).find(trigger).click(function(event) {
		$(subTab).find(trigger).removeClass('isActive');
	});

	// Click function logic, trigger 1 //
	$(subTab).find(trigger1).click(function(event) {
		$(subTab).find(trigger1).addClass('isActive');
		$(this).parents(subTab).find(content).slideUp(duration);
		$(this).parents(subTab).find(content1).slideDown(duration);
	});

	// Click function logic, trigger 2 //
	$(subTab).find(trigger2).click(function(event) {
		$(subTab).find(trigger2).addClass('isActive');
		$(this).parents(subTab).find(content).slideUp(duration);
		$(this).parents(subTab).find(content2).slideDown(duration);
	});

	// Click function logic, trigger 3 //
	$(subTab).find(trigger3).click(function(event) {
		$(subTab).find(trigger3).addClass('isActive');
		$(this).parents(subTab).find(content).slideUp(duration);
		$(this).parents(subTab).find(content3).slideDown(duration);
	});
});

module.exports = SubTabs;