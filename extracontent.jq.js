/*
	# ExtraContent (jQuery) #
	
	AUTHOR:	Adam Merrifield <http://adam.merrifield.ca>
			Giuseppe Caruso <http://www.bonsai-studio.net/>
	VERSION: r1.4.2
	DATE: 12-16-10 09:40

	USAGE:
	- be sure to include a copy of the jQuery libraray in the <head>
		before the inclusion of this function
	- noConflict mode is optional but highly recommended
	- call this script in the <head>
	- change the value of ecValue to match the number of ExtraContent
		areas in your theme
*/
jQuery.noConflict();
jQuery(document).ready(function($){
	var extraContent =  (function() {
		// change ecValue to suit your theme
		var ecValue = 10;
		for (i=1;i<=ecValue;i++)
		{
			$('#myExtraContent'+i+' script').remove();
			$('#myExtraContent'+i).appendTo('#extraContainer'+i);
		}
	})();
});

