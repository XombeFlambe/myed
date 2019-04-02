/* Tabs Module ***************************************************************************/
$(document).ready(Tabs = function() {
	var tab = '.js-tab';
	var heading = '.js-tab-heading';
	var heading1 = '.js-tab-heading_1';
	var heading2 = '.js-tab-heading_2';
	var heading3 = '.js-tab-heading_3';
	var heading4 = '.js-tab-heading_4';
	var heading5 = '.js-tab-heading_5';
	var heading6 = '.js-tab-heading_6';
	var heading7 = '.js-tab-heading_7';
	var heading8 = '.js-tab-heading_8';
	var headingActive = '.js-tab-heading.isActive';
	var trigger = '.js-tab-trigger';
	var trigger1 = '.js-tab-trigger_one';
	var trigger2 = '.js-tab-trigger_two';
	var trigger2Compare = '.js-tab-trigger_twoCompare';
	var trigger3 = '.js-tab-trigger_three';
	var trigger3Compare = '.js-tab-trigger_threeCompare';
	var trigger4 = '.js-tab-trigger_four';
	var trigger4Compare = '.js-tab-trigger_fourCompare';
	var trigger5 = '.js-tab-trigger_five';
	var trigger5Compare = '.js-tab-trigger_fiveCompare';
	var trigger6 = '.js-tab-trigger_six';
	var trigger6Compare = '.js-tab-trigger_sixCompare';
	var trigger7 = '.js-tab-trigger_seven';
	var trigger7Compare = '.js-tab-trigger_sevenCompare';
	var trigger8 = '.js-tab-trigger_eight';
	var trigger8Compare = '.js-tab-trigger_eightCompare';
	var content = '.js-tab-content';
	var content1 = '.js-tab-content_one';
	var content2 = '.js-tab-content_two';
	var content3 = '.js-tab-content_three';
	var content4 = '.js-tab-content_four';
	var content5 = '.js-tab-content_five';
	var content6 = '.js-tab-content_six';
	var content7 = '.js-tab-content_seven';
	var content8 = '.js-tab-content_eight';
	var contentActive = '.js-tab-content.isActive';

	var duration = 300;

	// Styles tabs item if you choose to start with an open tabs on load //
	$(tab).find(content).css("display", "none");
	$(tab).find(contentActive).css("display", "block");
	$(tab).find(heading).css("display", "none");
	$(tab).find(headingActive).css("display", "inline-block");

	// Click function logic, remove active class from triggers //
	$(tab).find(trigger).click(function(event) {
		$(tab).find(trigger).removeClass('isActive');
	});

	// Click function logic, trigger 1 //
	$(tab).find(trigger1).click(function(event) {
		$(tab).find(trigger1).addClass('isActive');
		$(this).parents(tab).find(content).slideUp(duration);
		$(this).parents(tab).find(content1).slideDown(duration);
		$(this).parents(tab).find(heading).slideUp(0);
		$(this).parents(tab).find(heading1).slideDown(0);
	});

	// Click function logic, trigger 2 //
	$(tab).find(trigger2).click(function(event) {
		$(tab).find(trigger2).addClass('isActive');
		$(this).parents(tab).find(content).slideUp(duration);
		$(this).parents(tab).find(content2).slideDown(duration);
		$(this).parents(tab).find(heading).slideUp(0);
		$(this).parents(tab).find(heading2).slideDown(0);
	});

	// Click function logic, trigger 2, Custom Compare //
	$(tab).find(trigger2Compare).click(function(event) {
		$(tab).find(trigger2).addClass('isActive');
		$(this).parents(tab).find(content).slideUp(duration);
		$(this).parents(tab).find(content2).slideDown(duration);
		$(this).parents(tab).find(heading).slideUp(0);
		$(this).parents(tab).find(heading2).slideDown(0);
	});

	// Click function logic, trigger 3 //
	$(tab).find(trigger3).click(function(event) {
		$(tab).find(trigger3).addClass('isActive');
		$(this).parents(tab).find(content).slideUp(duration);
		$(this).parents(tab).find(content3).slideDown(duration);
		$(this).parents(tab).find(heading).slideUp(0);
		$(this).parents(tab).find(heading3).slideDown(0);
	});

	// Click function logic, trigger 3, Custom Compare //
	$(tab).find(trigger3Compare).click(function(event) {
		$(tab).find(trigger3).addClass('isActive');
		$(this).parents(tab).find(content).slideUp(duration);
		$(this).parents(tab).find(content3).slideDown(duration);
		$(this).parents(tab).find(heading).slideUp(0);
		$(this).parents(tab).find(heading3).slideDown(0);
	});

	// Click function logic, trigger 4 //
	$(tab).find(trigger4).click(function(event) {
		$(tab).find(trigger4).addClass('isActive');
		$(this).parents(tab).find(content).slideUp(duration);
		$(this).parents(tab).find(content4).slideDown(duration);
		$(this).parents(tab).find(heading).slideUp(0);
		$(this).parents(tab).find(heading4).slideDown(0);
	});

	// Click function logic, trigger 4, Custom Compare //
	$(tab).find(trigger4Compare).click(function(event) {
		$(tab).find(trigger2).addClass('isActive');
		$(this).parents(tab).find(content).slideUp(duration);
		$(this).parents(tab).find(content4).slideDown(duration);
		$(this).parents(tab).find(heading).slideUp(0);
		$(this).parents(tab).find(heading4).slideDown(0);
	});

	// Click function logic, trigger 5 //
	$(tab).find(trigger5).click(function(event) {
		$(tab).find(trigger5).addClass('isActive');
		$(this).parents(tab).find(content).slideUp(duration);
		$(this).parents(tab).find(content5).slideDown(duration);
		$(this).parents(tab).find(heading).slideUp(0);
		$(this).parents(tab).find(heading5).slideDown(0);
	});

	// Click function logic, trigger 5, Custom Compare //
	$(tab).find(trigger5Compare).click(function(event) {
		$(tab).find(trigger3).addClass('isActive');
		$(this).parents(tab).find(content).slideUp(duration);
		$(this).parents(tab).find(content5).slideDown(duration);
		$(this).parents(tab).find(heading).slideUp(0);
		$(this).parents(tab).find(heading5).slideDown(0);
	});

	// Click function logic, trigger 6, Custom Compare //
	$(tab).find(trigger6Compare).click(function(event) {
		$(tab).find(trigger2).addClass('isActive');
		$(this).parents(tab).find(content).slideUp(duration);
		$(this).parents(tab).find(content6).slideDown(duration);
		$(this).parents(tab).find(heading).slideUp(0);
		$(this).parents(tab).find(heading6).slideDown(0);
	});

	// Click function logic, trigger 7 //
	$(tab).find(trigger7Compare).click(function(event) {
		$(tab).find(trigger3).addClass('isActive');
		$(this).parents(tab).find(content).slideUp(duration);
		$(this).parents(tab).find(content7).slideDown(duration);
		$(this).parents(tab).find(heading).slideUp(0);
		$(this).parents(tab).find(heading7).slideDown(0);
	});

	// Click function logic, trigger 8 //
	$(tab).find(trigger8).click(function(event) {
		$(tab).find(trigger8).addClass('isActive');
		$(this).parents(tab).find(content).slideUp(duration);
		$(this).parents(tab).find(content8).slideDown(duration);
		$(this).parents(tab).find(heading).slideUp(0);
		$(this).parents(tab).find(heading8).slideDown(0);
	});

	// Click function logic, trigger 8 //
	$(tab).find(trigger8Compare).click(function(event) {
		$(tab).find(trigger3).addClass('isActive');
		$(this).parents(tab).find(content).slideUp(duration);
		$(this).parents(tab).find(content8).slideDown(duration);
		$(this).parents(tab).find(heading).slideUp(0);
		$(this).parents(tab).find(heading8).slideDown(0);
	});

});

module.exports = Tabs;