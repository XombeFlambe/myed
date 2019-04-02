/* discMap Module ***************************************************************************/
$(document).ready(DiscMap = function() {
	var discMap = '.js-discMap';
	var discMap1 = '.js-discMap_1';
	var discMap2 = '.js-discMap_2';
	var discMap3 = '.js-discMap_3';

	var heading = '.js-discMap-heading';
	var heading1 = '.js-discMap-heading_1';
	var heading2 = '.js-discMap-heading_2';
	var heading3 = '.js-discMap-heading_3';
	var heading4 = '.js-discMap-heading_4';
	var heading5 = '.js-discMap-heading_5';
	var heading6 = '.js-discMap-heading_6';
	var heading7 = '.js-discMap-heading_7';
	var heading8 = '.js-discMap-heading_8';
	var heading9 = '.js-discMap-heading_9';
	var heading10 = '.js-discMap-heading_10';
	var heading11 = '.js-discMap-heading_11';
	var heading12 = '.js-discMap-heading_12';
	var headingActive = '.js-discMap-heading.isActive';

	var headingHide = '.js-discMap-heading_hide';
	var headingShow = '.js-discMap-heading_show';

	var trigger = '.js-discMap-trigger';
	var trigger1 = '.js-discMap-trigger_1';
	var trigger2 = '.js-discMap-trigger_2';
	var trigger3 = '.js-discMap-trigger_3';
	var trigger4 = '.js-discMap-trigger_4';
	var trigger5 = '.js-discMap-trigger_5';
	var trigger6 = '.js-discMap-trigger_6';
	var trigger7 = '.js-discMap-trigger_7';
	var trigger8 = '.js-discMap-trigger_8';
	var trigger9 = '.js-discMap-trigger_9';
	var trigger10 = '.js-discMap-trigger_10';
	var trigger11 = '.js-discMap-trigger_11';
	var trigger12 = '.js-discMap-trigger_12';

	var content = '.js-discMap-content';
	var content1 = '.js-discMap-content_1';
	var content2 = '.js-discMap-content_2';
	var content3 = '.js-discMap-content_3';
	var content4 = '.js-discMap-content_4';
	var content5 = '.js-discMap-content_5';
	var content6 = '.js-discMap-content_6';
	var content7 = '.js-discMap-content_7';
	var content8 = '.js-discMap-content_8';
	var content9 = '.js-discMap-content_9';
	var content10 = '.js-discMap-content_10';
	var content11 = '.js-discMap-content_11';
	var content12 = '.js-discMap-content_12';
	var contentActive = '.js-discMap-content.isActive';
	var duration = 300;

	// Styles discMap item if you choose to start with an open discMaps on load //
	$(discMap).find(content).css("display", "none");
	$(discMap).find(contentActive).css("display", "block");
	$(discMap).parents('body').find(heading).css("display", "none");
	$(discMap).parents('body').find(headingActive).css("display", "inline");

	// Click function logic, remove active class from triggers //
	$(discMap).find(trigger).click(function(event) {
		$(discMap).find(trigger).removeClass('isActive');
	});

	// Click function logic, trigger 1 //
	$(discMap).find(trigger1).click(function(event) {
		$(discMap).find(trigger1).addClass('isActive');
		$(this).parents(discMap).find(content).slideUp(duration);
		$(this).parents(discMap).find(content1).slideDown(duration);
		$(this).parents('body').find(heading).slideUp(0);
		$(this).parents('body').find(heading1).slideDown(0);
	});

	// Click function logic, trigger 2 //
	$(discMap).find(trigger2).click(function(event) {
		$(discMap).find(trigger2).addClass('isActive');
		$(this).parents(discMap).find(content).slideUp(duration);
		$(this).parents(discMap).find(content2).slideDown(duration);
		$(this).parents('body').find(heading).slideUp(0);
		$(this).parents('body').find(heading2).slideDown(0);
	});

	// Click function logic, trigger 3 //
	$(discMap).find(trigger3).click(function(event) {
		$(discMap).find(trigger3).addClass('isActive');
		$(this).parents(discMap).find(content).slideUp(duration);
		$(this).parents(discMap).find(content3).slideDown(duration);
		$(this).parents('body').find(heading).slideUp(0);
		$(this).parents('body').find(heading3).slideDown(0);
	});

	// Click function logic, trigger 4 //
	$(discMap).find(trigger4).click(function(event) {
		$(discMap).find(trigger4).addClass('isActive');
		$(this).parents(discMap).find(content).slideUp(duration);
		$(this).parents(discMap).find(content4).slideDown(duration);
		$(this).parents('body').find(heading).slideUp(0);
		$(this).parents('body').find(heading4).slideDown(0);
	});

	// Click function logic, trigger 5 //
	$(discMap).find(trigger5).click(function(event) {
		$(discMap).find(trigger5).addClass('isActive');
		$(this).parents(discMap).find(content).slideUp(duration);
		$(this).parents(discMap).find(content5).slideDown(duration);
		$(this).parents('body').find(heading).slideUp(0);
		$(this).parents('body').find(heading5).slideDown(0);
	});

	// Click function logic, trigger 6 //
	$(discMap).find(trigger6).click(function(event) {
		$(discMap).find(trigger6).addClass('isActive');
		$(this).parents(discMap).find(content).slideUp(duration);
		$(this).parents(discMap).find(content6).slideDown(duration);
		$(this).parents('body').find(heading).slideUp(0);
		$(this).parents('body').find(heading6).slideDown(0);
	});

	// Click function logic, trigger 7 //
	$(discMap).find(trigger7).click(function(event) {
		$(discMap).find(trigger7).addClass('isActive');
		$(this).parents(discMap).find(content).slideUp(duration);
		$(this).parents(discMap).find(content7).slideDown(duration);
		$(this).parents('body').find(heading).slideUp(0);
		$(this).parents('body').find(heading7).slideDown(0);
	});

	// Click function logic, trigger 8 //
	$(discMap).find(trigger8).click(function(event) {
		$(discMap).find(trigger8).addClass('isActive');
		$(this).parents(discMap).find(content).slideUp(duration);
		$(this).parents(discMap).find(content8).slideDown(duration);
		$(this).parents('body').find(heading).slideUp(0);
		$(this).parents('body').find(heading8).slideDown(0);
	});

	// Click function logic, trigger 9 //
	$(discMap).find(trigger9).click(function(event) {
		$(discMap).find(trigger9).addClass('isActive');
		$(this).parents(discMap).find(content).slideUp(duration);
		$(this).parents(discMap).find(content9).slideDown(duration);
		$(this).parents('body').find(heading).slideUp(0);
		$(this).parents('body').find(heading8).slideDown(0);
	});

	// Click function logic, trigger 10 //
	$(discMap).find(trigger10).click(function(event) {
		$(discMap).find(trigger10).addClass('isActive');
		$(this).parents(discMap).find(content).slideUp(duration);
		$(this).parents(discMap).find(content10).slideDown(duration);
		$(this).parents('body').find(heading).slideUp(0);
		$(this).parents('body').find(heading8).slideDown(0);
	});

	// Click function logic, trigger 11 //
	$(discMap).find(trigger11).click(function(event) {
		$(discMap).find(trigger11).addClass('isActive');
		$(this).parents(discMap).find(content).slideUp(duration);
		$(this).parents(discMap).find(content11).slideDown(duration);
		$(this).parents('body').find(heading).slideUp(0);
		$(this).parents('body').find(heading8).slideDown(0);
	});

	// Click function logic, trigger 12 //
	$(discMap).find(trigger12).click(function(event) {
		$(discMap).find(trigger12).addClass('isActive');
		$(this).parents(discMap).find(content).slideUp(duration);
		$(this).parents(discMap).find(content12).slideDown(duration);
		$(this).parents('body').find(heading).slideUp(0);
		$(this).parents('body').find(heading8).slideDown(0);
	});

	// Click function logic, hide heading //
	$(discMap).parents('body').find(headingHide).click(function(event) {
		$(this).parents('body').find(heading).css("font-size", "0");
	});

	// Click function logic, show heading //
	$(discMap).parents('body').find(headingShow).click(function(event) {
		$(this).parents('body').find(heading).css("font-size", "inherit");
	});

});

module.exports = DiscMap;