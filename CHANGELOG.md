## version 3.0.5 (August 18, 2020)

- fixed bugs when working with iFrames

## version 3.0.4 (August 17, 2020)

- fixed bug where the `disable_page_scrolling` property introduced in `3.0.0` had an undesired effect on pages where there was no scroll

## version 3.0.3 (July 19, 2020)

- SASS files are now available in the `dist` folder
- fixed broken example for overlapping dialogs

## version 3.0.2 (April 26, 2020)

- minor release which only adds screenshots to the examples

## version 3.0.1 (March 31, 2020)

- fixed [#32](https://github.com/stefangabos/Zebra_Dialog/issues/32) where the `center_buttons` property was not centering buttons; thanks [LukeSavefrogs](https://github.com/LukeSavefrogs)!

## version 3.0.0 (September 03, 2019)

- page scrolling behind an open dialog box is now disabled by default
- added `margin` property to prevent the dialog box from touching the viewport's limits when stretched 100% horizontally and/or vertically
- added `max_width` property which, together with the existing `max_height` property, can now be specified as percentage
- added the `default_value` property to be used for `prompt` type dialog boxes
- `width` and `height` properties can now be specified as percentages, too
- `custom_class` is now also added to the overlay, not just to the dialog box
- the word `center` can also be used when specifying vertical position (alongside `middle`)
- when using iFrames, the width and height is now automatically computed to fit those of the dialog box; additionally, now a spinner is also shown while the iFrame content is loading
- the library now automatically does backdrop management when opening multiple modal dialog boxes
- dropped IE6 support
- fixed bug where the positioning of the dialog box was incorrect it had borders
- removed the `backdrop_container` property
- minor tweaks to all the templates

## version 2.1.0 (June 03, 2019)

- added [prompt](https://stefangabos.github.io/Zebra_Dialog/flat.html#handling-input) dialog box type; thanks to [Sebi Popa](https://github.com/sebipopa)!
- added `height` property for setting custom heights to dialog boxes
- added `update` method for adjusting the dialog box's position when content is changed dynamically, at run-time
- the overlay can now have a different parent than the `body` element, via the newly added `overlay_container` property

## version 2.0.0 (August 01, 2018)

- added a new "auto_focus_button" property for indicating the button to place the focus on when a dialog box is first shown
- simplified dialogs' HTML markup and all the classes indicating various states/setups of the dialog box are now added to the main container
- some of the alignments done previously from JavaScript are now done from CSS - but still working in IE6 :)
- completely rewritten the CSS for the themes and we're now using [clean-css](https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api) to optimize CSS output, resulting in a reduction of 0.5KB for the flat theme and 1.8KB for the classic theme
- added a new *materialize* theme, inspired by Google Material Design

## version 1.6.0 (July 10, 2018)

- "warning" dialog boxes now have "Yes" and "No" buttons instead of just the "Ok" button
- changed the labels for the buttons on "confirmation" dialog boxes from "Yes" and "No" to "Ok" and "Cancel"
- revamped example pages

## version 1.5.0 (July 05, 2018)

- fixed bug where inputs in dialog box could never receive focus on mobile devices - see [#14](https://github.com/stefangabos/Zebra_Dialog/issues/14), thanks [Clément](https://github.com/chou666)!
- fixed [#18](https://github.com/stefangabos/Zebra_Dialog/issues/18) where the plugin was not working in IE8
- custom classes can now be added to buttons; this fixes [#15](https://github.com/stefangabos/Zebra_Dialog/issues/15)
- added version number as a public property - useful to find out the version number even if all you have is the minified source code; see [#13](https://github.com/stefangabos/Zebra_Dialog/issues/13)

## version 1.4.1 (October 13, 2017)

- fixed bug where dialog box height could exceed viewport height; see [#8](https://github.com/stefangabos/Zebra_Dialog/issues/8)
- fixed scrolling on iPhone; see [#9](https://github.com/stefangabos/Zebra_Dialog/issues/9)

## version 1.4.0 (June 04, 2017)

- performance improvements and source code tweaks
- new folder structure
- the home of the library is now exclusively on GitHub
- files required in the build process are not included anymore when installing via npm nor when downloading from GitHub

## version 1.3.12 (January 26, 2016)

- the library is now available as an [npm package](https://www.npmjs.com/package/zebra_dialog)

## version 1.3.9 (January 21, 2016)

- added missing preloader.gif file to the "flat" theme; thanks to **Juan** for reporting;
- replaced all instances of jQuery with $, for consistency and for making it easier to use with jQuery.noConflict(); thanks to **Julio** for suggesting;
- fixes and additions to the bowser.json file, for better integration with [Bower](http://bower.io/)
- examples now use jQuery version 1.12.0
- dropped support for jQuery's deprectated official plugins repository

## version 1.3.8 (December 20, 2013)

- fixed a bug where setting the "type" attribute to FALSE would not remove the left padding of the dialog box; thanks to **Laurent** for reporting
- added "use strict" statement
- added integration with [Grunt](http://gruntjs.com/)
- the library is now available as a [Bower](http://bower.io/) package

## version 1.3.7 (November 26, 2013)

- added a new "flat" theme

## version 1.3.6 (October 16, 2013)

- fixed a bug where custom buttons were showing up in reversed order;
- fixed a bug where, since the previous release, you'd have to explicitly return TRUE from a callback function attached to a custom button, in order for the dialog box to close;
- thanks to **store88** for spotting both of the above!

## version 1.3.5 (September 08, 2013)

- dialog boxes can now be kept open on button click; previously there was no way of keeping a dialog box from closing when a button was clicked; now, returning FALSE from the callback will do just that;

## version 1.3.4 (August 18, 2013)

- added a new "center_buttons" property which when set to TRUE will instruct the script to center any available buttons instead of floating them to the right;
- added a new "show_close_button" property which is set to TRUE by default and which displays the little "x" button in the top-right of the dialog box;
- fixed a few issues in order to keep [JSHint](http://www.jshint.com/) (reasonably) happy;
- slightly increased performance due to optimal management of event handlers;
- fixed an issue where some things that should've been done in CSS were done in JavaScript;

## version 1.3.3 (May 29, 2013)

- The z-index value for the overlay and the dialog box can now be set from CSS. Previously these were set in the JavaScript code and would require hacking the source code in order to change them; thanks **Israel Sato**

## version 1.3.2 (May 26, 2013)

- fixed a bug where if the "reposition_speed" property was &gt; 0 and the browser window was manually resized, the animations for repositioning the window would queue up and slow down the process to almost a complete halt;
- changed the name of the "animation_speed" property to "animation_speed_hide" and added a new "animation_speed_show" used to set the speed by which the dialog box will fade in when appearing;

## version 1.3.1 (May 06, 2013)

- fixed a bug where the dialog box was not looking 100% as expected if the page it was used on had the "box-sizing" CSS property set to "border-box", which is the default for some widely-used CSS frameworks like [Twitter Bootstrap](http://twitter.github.io/bootstrap/) and [Foundation](http://foundation.zurb.com/). Read more about it at [http://paulirish.com/2012/box-sizing-border-box-ftw/](http://paulirish.com/2012/box-sizing-border-box-ftw/)

## version 1.3 (April 08, 2013)

- external content can now easily be loaded into the dialog box via AJAX, or using an iFrame, or an inline element, by using the newly added "source" property; when passing an inline element, it will be copied together with any attached events - useful for passing, for example, a complete form with attached events; thanks to **tom**;
- the dialog box will use an animation when repositioning due to a browser window resize; the animation's speed is set by the newly added "reposition_speed" property;
- the plugin is now available on [GitHub](https://github.com/stefangabos/Zebra_Dialog)!

## version 1.2.2 (February 09, 2013)

- added a new "max_height" property; when setting it to something to other than "0", the content in the dialog box will be scrolled if it's height exceeds the given value;
- new layout;

## version 1.2.1 (January 28, 2013)

- fixed an issue due to which the plugin was not working with jQuery 1.9.0;

## version 1.2 (April 07, 2012)

- when used as a notification widget, the notification can now be closed before the timer runs out by clicking on it; thanks to **Ovidiu Mihalcea** for suggesting;
- callback functions can now be attached to custom buttons; credit goes to **Matt**!
- added an example on how to add custom icons

## version 1.1.1 (September 24, 2011)

- fixed a bug where the script would sometimes "forget" to clear the semi-transparent overlay; thanks to **Jack Everson** for reporting;

## version 1.1 (August 18, 2011)

- the last button of the dialog box will now have the focus once the dialog box is open. previously, for any dialog boxes other than notifications, if the user pressed the ENTER key, it re-triggered the event and more dialog boxes were shown one on top of the other; thanks to **Yasir** for reporting;
- it is now possible to add a custom class to the dialog box; this makes it easy to switch between styles at run-time; thanks to **Ed** for suggesting;
- fixed a bug where the message's text color was inherited; now it is set from the CSS file;
- examples are now also available in the downloadable package;

## version 1.0 (June 25, 2011)

- initial release
