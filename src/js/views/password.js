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
