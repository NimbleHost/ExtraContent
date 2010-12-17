# ExtraContent SDK r0.1 #
##### Created by Adam Merrifield, 12-16-10 11:22 #####

## About ExtraContent ##

ExtraContent came about when a handful of 3rd party RapidWeaver theme developers got together to address the need for more content spaces in RapidWeaver. While the content area and sidebar are ample space for the vast majority of RapidWeaver users, there are some who want more flexibility to add content in ways keeping with todays modern web designs.

ExtraContent was the solution agreed upon by these developers as an easy means of end users adding more content to their site in developer designated areas of ExtraContent enabled themes. While these areas will vary from theme to theme, the process will be very much the same. These developers worked closely to come up with a solution that would give all users a common experience.

## Contents ##

* extracontent.js - native javascript version that runs free of jQuery
* extracontent.jq.js - runs with the assistance of jQuery
* demo.html - shows ExtraContent in action
* add-ons
	* Snippets
		* .rwsnippet examples for utilizing ExtraContent in RapidWeaver
	* Stacks
		* ExtraContent.stack - for use with the Stacks RapidWeaver plugin

## The Developer Standard ##

The strength of ExtraContent for both the theme developers and end users is the common experience in its use and application. For this reason we thought long and hard to come up with an appropriate naming convention and common application to help ensure that end users who have experience with one instance of ExtraContent will be familiar with another. This also allows for shared resources between RapidWeaver developers, such as snippets, stacks, tutorials, manuals, etc...

ExtraContent operates on a very simple principle; the end user applies a simple snippet (or stack) that wraps or envelops the users content  that they want applied elsewhere in the layout (as determined by the theme developer). The ExtraContent script detects that snippet then renders its contents in a predetermined location.

### User Implementation ###

This is the critical component that shouldn't vary from theme to theme. All users should be able to apply a simple snippet with, at a minimum, the following component; a single div with the id of "myExtraContentX" where X is a base 10 integer that will correlate to a reciprocating component in the theme. The standard, base snippet is as follows:

	<div id="myExtraContent1">
		<!-- User content goes here -->
	</div><!-- #myExtraContent -->
	
Expanding on the base snippet, you will learn quickly that just about anything can be contained within the div tag and some examples are included within the SDK.

All ExtraContent areas should, where possible, operate from top down. Meaning that if an ExtraContent area is to be rendered in the header and another in the footer, it would be advisable (but not a deal breaker) if #myExtraContent1 would correlate with the header while #myExtraContent2 would correlate with the footer. Where there are exceptions, for instance if a developer adds additional ExtraContent features at a later date, then the developer should be mindful that such additions are not overly disruptive and are documented. This would be purely for the end users benefit and consideration. THESE ARE ONLY GUIDELINES.

### Developer Implementation ###

Developer implementation of ExtraContent is fairly straight forward. Simple apply the reciprocal div tag anywhere in your layout that you wish the ExtraContent to appear. The reciprocal div tag has the id of "extraContainerX" where X is a base 10 integer. It will look like this:

	<div id="extraContainer1">
		<!-- ExtraContent gets rendered here -->
	</div><!-- #extraContainer -->
	
Now you will need to decide which version of ExtraContent to use. This will depend on current the needs of your theme and whether you are already utilizing the jQuery library as many themes do. If you are using jQuery in your theme then you can use the jQuery assisted version (extracontent.jq.js) of ExtraContent. If not then it's likely faster to use the straight javascript version (extracontent.js).

Next you need to call the script into your theme. Keep in mind that if you are using the jQuery version then you will also need a reference to a jQuery library. You will also need to make sure you reference the correct ExtraContent script name:

	<script type="text/javascript" src="%pathto(scripts/extracontent.js)%"></script>

The above example assumes you've placed the scripts in a "scripts" folder. You can choose any path you like, provided your theme knows where to find theme and your plist knows what to do with them.

### Controlling ExtraContent ###

You may wish to apply separate styling to affect the appearance of the content that appears in your ExtraContent areas. This can be done many ways, none of which are right or wrong. Here are three examples;

You can apply CSS rules to the end user "myExtraContentX" selectors like so:

	#myExtraContent1 { color: red; padding: 10xp; }
	#myExtraContent2 { color: green; margin-top: 1em; }

You can apply CSS rules to the themes "extraContainerX" selectors like so:

	#extraContainer1 { color: red; padding: 10xp; }
	#extraContainer2 { color: green; margin-top: 1em; }

You can have the user content inherit CSS rules from enclosing elements like so:

	.header { color: red; padding: 10xp; } /* .header contains #extraContainer1 */
	#footer { color: green; margin-top: 1em; } /* #footer contains #extraContainer2 */

While all will have the same effect, it's my personal preference to go with the latter for reasons of flexibility. The choice is ultimately yours.

### Putting it all together ###

See the demo.html file.