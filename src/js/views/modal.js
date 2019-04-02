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