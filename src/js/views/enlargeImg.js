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