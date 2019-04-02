(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Drawer = require('./views/drawer.js');
var Menu = require('./views/menu.js');
var Modal = require('./views/modal.js');
var Accordion = require('./views/accordion.js');
var Dropdown = require('./views/dropdown.js');
var Tip = require('./views/tip.js');
var Topside = require('./views/topside.js');
var EaseScroll = require('./views/easeScroll.js');
var Close = require('./views/close.js');
var Tabs = require('./views/tabs.js');
//var SubTabs = require('./views/subTab.js');
var DiscMap = require('./views/discMap.js');
var Password = require('./views/password.js');
var Sort = require('./views/sort.js');
var EnlargeImg = require('./views/enlargeImg.js');
var Slim = require('./views/slim.js');
},{"./views/accordion.js":2,"./views/close.js":3,"./views/discMap.js":4,"./views/drawer.js":5,"./views/dropdown.js":6,"./views/easeScroll.js":7,"./views/enlargeImg.js":8,"./views/menu.js":9,"./views/modal.js":10,"./views/password.js":11,"./views/slim.js":12,"./views/sort.js":13,"./views/tabs.js":14,"./views/tip.js":15,"./views/topside.js":16}],2:[function(require,module,exports){
/* Accordion Module ***************************************************************************/
$(document).ready(Accordion = function() {
	var accordion = '.js-accordion';
	var item = '.js-accordion-item';
	var trigger = '.js-accordion-trigger';
	var content = '.js-accordion-content';
	var contentActive = '.js-accordion-content.isActive';
	var icon = '.caret';
	var duration = 300;

	// Styles accordion item if you choose to start with an open accordion on load //
	$(accordion).find(content).css("display", "none");
	$(accordion).find('.isActive').parent(item).find(icon).addClass('isActive');
	$(accordion).find('.isActive').css("display", "block");

	// Click function logic //
	$(accordion).find(item).find(trigger).click(function(event) {

		$(accordion).find(contentActive).slideUp(duration);
		$(accordion).find(icon).removeClass('isActive');

		if ($(this).next(content).hasClass('isActive')) {
            $(content).removeClass('isActive');
            $(this).find(icon).removeClass('isActive');
        } else {
			$(content).removeClass('isActive');
			$(this).next(content).slideDown(duration);
			$(this).next(content).addClass('isActive');
			$(this).find(icon).addClass('isActive');
		}

	});
});

module.exports = Accordion;

},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
/* Ease Scroll Function ***************************************************************************/
$(document).ready(EaseScroll = function() {
	$('a.js-nav').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
				}, 500);
				return false;
			}
		}
	});
});

module.exports = EaseScroll;
},{}],8:[function(require,module,exports){
/* Enlarge Image Module ***************************************************************************/
$(document).ready(EnlargeImg = function() {
	var enlarge = '.js-enlargeImg';
	var trigger = '.js-enlargeImg-trigger';
	var content = '.js-enlargeImg-content';

	$(trigger).click(function() {
		var self = this;

        $(this).parents(enlarge).toggleClass('isActive');
        $(this).find('i').toggleClass('fa-search-minus');

        if ($(this).find('span').html() == "Enlarge") {
            $(self).find('span').html("Shrink");
            return false;
        } else {
            $(self).find('span').html("Enlarge");
            return false;
        }

	});
});

module.exports = EnlargeImg;
},{}],9:[function(require,module,exports){
/* Menu Module ***************************************************************************/
$(document).ready(Menu = function() {
	var menu = '.js-mainNav';
	var trigger = '.js-mainNav-trigger';
	var content = '.js-mainNav-content';

	$(menu).find(trigger).click(function() {
		$(this).next(content).slideToggle(300);
	});
});

module.exports = Menu;
},{}],10:[function(require,module,exports){
/* Modal Module ***************************************************************************/
$(document).ready(Modal = function() {
	var modalArc = '.js-modalArc';
	var trigger = '.js-modalTrigger';
	var trigger2 = '.js-modalTrigger2';
	var trigger3 = '.js-modalTrigger3';
	var trigger4 = '.js-modalTrigger4';
	var modal = '.js-modal';
	var modal2 = '.js-modal2';
	var modal3 = '.js-modal3';
	var modal4 = '.js-modal4';
	var content = '.js-modal-content';
	var close = '.js-modal-close';
	var maskClose = '.js-modal-mask_close';
	var duration = 300;

	$(modalArc).find(trigger).click(function() {
		$(this).parents(modalArc).find(modal).fadeIn(duration);
	});
	$(modalArc).find(trigger2).click(function() {
		$(this).parents(modalArc).find(modal2).fadeIn(duration);
	});
	$(modalArc).find(trigger3).click(function() {
		$(this).parents(modalArc).find(modal3).fadeIn(duration);
	});
	$(modalArc).find(trigger4).click(function() {
		$(this).parents(modalArc).find(modal4).fadeIn(duration);
	});

	$(modal).find(close).click(function() {
		$(this).parents(modal).fadeOut(duration);
	});
	$(maskClose).click(function() {
		$(this).parent(modal).fadeOut(duration);
	});
	$(modal2).find(close).click(function() {
		$(this).parents(modal2).fadeOut(duration);
	});
	$(maskClose).click(function() {
		$(this).parent(modal2).fadeOut(duration);
	});
	$(modal3).find(close).click(function() {
		$(this).parents(modal3).fadeOut(duration);
		$("#jquery_jplayer_1").jPlayer("pause");
	});
	$(maskClose).click(function() {
		$(this).parent(modal3).fadeOut(duration);
		$("#jquery_jplayer_1").jPlayer("pause");
	});
	$(modal4).find(close).click(function() {
		$(this).parents(modal4).fadeOut(duration);
	});
	$(maskClose).click(function() {
		$(this).parent(modal4).fadeOut(duration);
	});
});

module.exports = Modal;
},{}],11:[function(require,module,exports){
/* Password Module ***************************************************************************/
$(document).ready(Password = function() {
	var password = '.js-password';
	var trigger = '.js-password-trigger';
	var field = '.js-password-field';


	$(password).find(trigger).click(function() {

		var self = this;
	
        if ($(this).html() == "Show") {
            $(self).parent(password).find(field).attr('type', 'text');
            $(self).parent(password).find(trigger).html("Hide");
            return false;
        } else {
            $(self).parent(password).find(field).attr('type', 'password');
            $(self).parent(password).find(trigger).html("Show");
            return false;
        }

	});
});

module.exports = Password;

},{}],12:[function(require,module,exports){
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
},{}],13:[function(require,module,exports){
/* Sort Module ***************************************************************************/
$(document).ready(Sort = function() {
	var sort = '.js-sort';
	var icon = 'i';


	$(sort).click(function() {
        $(this).find(icon).removeClass('fa-sort');
        $(this).find(icon).addClass('fa-sort-desc');
        $(this).find(icon).toggleClass('fa-sort-asc');

	});
});

module.exports = Sort;
},{}],14:[function(require,module,exports){
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
},{}],15:[function(require,module,exports){
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
},{}],16:[function(require,module,exports){
/* Back to Top Button ***************************************************************************/
$(document).ready( Topside = function() {
	var topside = '.js-topside';
    var offset = 250;
    var duration = 300;

    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $(topside).fadeIn(duration);
        } else {
            $(topside).fadeOut(duration);
        }
    });
 
    $(topside).click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
});

module.exports = Topside;
},{}]},{},[1])