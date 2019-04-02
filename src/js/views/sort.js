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