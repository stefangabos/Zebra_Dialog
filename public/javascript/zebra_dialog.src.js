/**
 *  Zebra_Dialog
 *
 *  A small, compact (one JS file, no dependencies other than jQuery 1.5.2+) and highly configurable dialog box plugin
 *  for jQuery meant to replace JavaScript's native "alert" and "confirmation" windows.
 *
 *  Can also be used as a notification widget - when configured to show no buttons and to close automatically - for updates
 *  or errors, without distracting users from their browser experience by displaying obtrusive alerts.
 *
 *  Features:
 *
 *  -   great looks - out of the box, with 2 themes included
 *  -   5 types of dialog boxes available: confirmation, information, warning, error and question
 *  -   content can also be added through AJAX calls, iFrames, or from inline elements (together with attached events)
 *  -   easily customizable appearance by changing the CSS file
 *  -   create modal or non-modal dialog boxes
 *  -   easily add custom buttons
 *  -   position the dialog box wherever you want - not just in the middle of the screen
 *  -   use callback functions to handle user's choice
 *  -   works in all major browsers (Firefox, Opera, Safari, Chrome, Internet Explorer 6+)
 *
 *  Visit {@link http://stefangabos.ro/jquery/zebra-dialog/} for more information.
 *
 *  For more resources visit {@link http://stefangabos.ro/}
 *
 *  @author     Stefan Gabos <contact@stefangabos.ro>
 *  @version    1.3.8 (last revision: December 20, 2013)
 *  @copyright  (c) 2011 - 2013 Stefan Gabos
 *  @license    http://www.gnu.org/licenses/lgpl-3.0.txt GNU LESSER GENERAL PUBLIC LICENSE
 *  @package    Zebra_Dialog
 */
;(function($) {

    'use strict';

    $.Zebra_Dialog = function() {

        // default options
        var defaults = {

            animation_speed_hide:       250,            //  The speed, in milliseconds, by which the overlay and the
                                                        //  dialog box will be animated when closing.
                                                        //
                                                        //  Default is 250

            animation_speed_show:       0,              //  The speed, in milliseconds, by which the dialog box will
                                                        //  fade in when appearing.
                                                        //
                                                        //  Default is 0

            auto_close:                 false,          //  The number of milliseconds after which to automatically
                                                        //  close the dialog box or FALSE to not automatically close the
                                                        //  dialog box.
                                                        //
                                                        //  Default is FALSE

            buttons:                    true,           //  Use this for localization and for adding custom buttons.
                                                        //
                                                        //  If set to TRUE, the default buttons will be used, depending
                                                        //  on the type of the dialog box: ['Yes', 'No'] for "question"
                                                        //  type and ['Ok'] for the other dialog box types.
                                                        //
                                                        //  For custom buttons, use an array containing the captions of
                                                        //  the buttons to display: ['My button 1', 'My button 2'].
                                                        //
                                                        //  Set to FALSE if you want no buttons.
                                                        //
                                                        //  Note that when the dialog box is closed as a result of clicking
                                                        //  a button, the "onClose" event is triggered and the callback
                                                        //  function (if any) receives as argument the caption of the
                                                        //  clicked button.
                                                        //
                                                        //  See the comments for the "onClose" event below for more
                                                        //  information.
                                                        //
                                                        //  You can also attach callback functions to individual buttons
                                                        //  by using objects in the form of:
                                                        //
                                                        //  [
                                                        //   {caption: 'My button 1', callback: function() { // code }},
                                                        //   {caption: 'My button 2', callback: function() { // code }}
                                                        //  ]
                                                        //
                                                        //  The main difference is that a callback function attached this
                                                        //  way is executed as soon as the button is clicked rather than
                                                        //  *after* the dialog box is closed, as it is the case with the
                                                        //  "onClose" event.
                                                        //
                                                        //  Callback functions attached to buttons get as argument the
                                                        //  entire dialog box jQuery object.
                                                        //
                                                        //  A callback function returning FALSE will prevent the dialog
                                                        //  box from closing.

            center_buttons:              false,         //  When set to TRUE, the buttons will be centered instead of
                                                        //  right-aligned.
                                                        //
                                                        //  Default is FALSE

            custom_class:                false,         //  An extra class to add to the dialog box's container. Useful
                                                        //  for customizing a dialog box elements' styles at runtime.
                                                        //
                                                        //  For example, setting this value to "mycustom" and in the
                                                        //  CSS file having something like
                                                        //  .mycustom .ZebraDialog_Title { background: red }
                                                        //  would set the dialog box title's background to red.
                                                        //
                                                        //  See the CSS file for what can be changed.
                                                        //
                                                        //  Default is FALSE

            keyboard:                   true,           //  When set to TRUE, pressing the ESC key will close the dialog
                                                        //  box.
                                                        //
                                                        //  Default is TRUE.

            max_height:                 0,              //  The maximum height, in pixels, before the content in the
                                                        //  dialog box is scrolled.
                                                        //
                                                        //  If set to "0" the dialog box's height will automatically
                                                        //  adjust to fit the entire content.
                                                        //
                                                        //  Default is "0"

            message:                    '',             //  The text (or HTML) to be displayed in the dialog box.
                                                        //
                                                        //  See the "source" property on how to add content via AJAX,
                                                        //  iFrames or from inline elements.

            modal:                      true,           //  When set to TRUE there will be a semitransparent overlay
                                                        //  behind the dialog box, preventing users from clicking
                                                        //  the page's content.
                                                        //
                                                        //  Default is TRUE

            overlay_close:              true,           //  Should the dialog box close when the overlay is clicked?
                                                        //
                                                        //  Default is TRUE

            overlay_opacity:            '.9',           //  The opacity of the overlay (between 0 and 1)
                                                        //
                                                        //  Default is .9

            position:                   'center',       //  Position of the dialog box.
                                                        //
                                                        //  Can be either "center" (which would center the dialog box) or
                                                        //  an array with 2 elements, in the form of
                                                        //  {'horizontal_position +/- offset', 'vertical_position +/- offset'}
                                                        //  (notice how everything is enclosed in quotes) where
                                                        //  "horizontal_position" can be "left", "right" or "center",
                                                        //  "vertical_position" can be "top", "bottom" or "middle", and
                                                        //  "offset" represents an optional number of pixels to add/substract
                                                        //  from the respective horizontal or vertical position.
                                                        //
                                                        //  Positions are relative to the viewport (the area of the
                                                        //  browser that is visible to the user)!
                                                        //
                                                        //  Examples:
                                                        //
                                                        //  ['left + 20', 'top + 20'] would position the dialog box in the
                                                        //  top-left corner, shifted 20 pixels inside.
                                                        //
                                                        //  ['right - 20', 'bottom - 20'] would position the dialog box
                                                        //  in the bottom-right corner, shifted 20 pixels inside.
                                                        //
                                                        //  ['center', 'top + 20'] would position the dialog box in
                                                        //  center-top, shifted 20 pixels down.
                                                        //
                                                        //  Default is "center".

            reposition_speed:           500,            //  The duration (in milliseconds) of the animation used to
                                                        //  reposition the dialog box when the browser window is resized.
                                                        //
                                                        //  Default is 100.

            show_close_button:          true,           //  When set to TRUE, a "close" button (the little "x") will be
                                                        //  shown in the upper right corner of the dialog box.
                                                        //
                                                        //  If the dialog box has a title bar then the "close" button
                                                        //  will be shown in the title bar, vertically centered and
                                                        //  respecting the right padding.
                                                        //
                                                        //  If the dialog box does not have a title bar then the "close"
                                                        //  button will be shown in the upper right corner of the body
                                                        //  of the dialog box, respecting the position related properties
                                                        //  set in the stylesheet.
                                                        //
                                                        //  Default is TRUE.

            source:                     false,          //  Add content via AJAX, iFrames or from inline elements (together
                                                        //  with the already applied events).
                                                        //
                                                        //  This property can be any of the following:
                                                        // 
                                                        //  - 'ajax': object - where "object" can be an object with any
                                                        //  of the properties you'd normally use to make an AJAX call in
                                                        //  jQuery (see the description for the "settings" argument at
                                                        //  http://api.jquery.com/jQuery.ajax/), or it can be a string
                                                        //  representing a valid URL whose content to be fetched via
                                                        //  AJAX and placed inside the dialog box.
                                                        //
                                                        //  Example:
                                                        //
                                                        //  source: {'ajax': 'http://myurl.com/'}
                                                        //
                                                        //  source: {'ajax': {
                                                        //      'url':      'http://myurl.com/',
                                                        //      'cache':    false
                                                        //  }}
                                                        //
                                                        //  Note that you cannot use the "success" property as it will
                                                        //  always be overwritten by the library; use the "complete"
                                                        //  property instead, if you have to!
                                                        //
                                                        //  - 'iframe': object - where "object" can be an object where
                                                        //  property names can be valid attributes of the <iframe> tag
                                                        //  (see https://developer.mozilla.org/en-US/docs/HTML/Element/iframe),
                                                        //  or it can be a string representing a valid URL to be loaded
                                                        //  inside an iFrame and placed inside the dialog box.
                                                        //
                                                        //  Example:
                                                        //
                                                        //  source: {'iframe': 'http://myurl.com/'}
                                                        //
                                                        //  source: {'iframe': {
                                                        //      'src':          'http://myurl.com/',
                                                        //      'width':        480,
                                                        //      'height':       320,
                                                        //      'scrolling':    'no'
                                                        //  }}
                                                        //
                                                        //  Note that you should always set the iFrame's width and height
                                                        //  and adjust the dialog box's "width" property accordingly!
                                                        //
                                                        //  - 'inline': selector - where "element" is a jQuery element
                                                        //  from the page; the element will be copied and placed inside
                                                        //  the dialog box together with any attached events! if you just
                                                        //  want the element's inner HTML, use $('#element').html().
                                                        //
                                                        //  Example:
                                                        //
                                                        //  source: {'inline': $('#myelement')}
                                                        //
                                                        //  Default is FALSE

            title:                      '',             //  Title of the dialog box
                                                        //
                                                        //  Default is "" (an empty string - no title)

            type:                       'information',  //  Dialog box type.
                                                        //
                                                        //  Can be any of the following:
                                                        //
                                                        //  - confirmation
                                                        //  - error
                                                        //  - information
                                                        //  - question
                                                        //  - warning
                                                        //
                                                        //  If you don't want an icon, set the "type" property to FALSE.
                                                        //
                                                        //  By default, all types except "question" have a single button
                                                        //  with the caption "Ok"; type "question" has two buttons, with
                                                        //  the captions "Ok" and "Cancel" respectively.
                                                        //
                                                        //  Default is "information".

            vcenter_short_message:      true,           //  Should short messages be vertically centered?
                                                        //
                                                        //  Default is TRUE

            width:                      0,              //  By default, the width of the dialog box is set in the CSS
                                                        //  file. Use this property to override the default width at
                                                        //  runtime.
                                                        //
                                                        //  Must be an integer, greater than 0. Anything else will instruct
                                                        //  the script to use the default value, as set in the CSS file.
                                                        //  Value should be no less than 200 for optimal output.
                                                        //
                                                        //  Default is 0 - use the value from the CSS file.

            onClose:                null                //  Event fired when *after* the dialog box is closed.
                                                        //
                                                        //  For executing functions *before* the closing of the dialog
                                                        //  box, see the "buttons" attribute.
                                                        //
                                                        //  The callback function (if any) receives as argument the
                                                        //  caption of the clicked button or boolean FALSE if the dialog
                                                        //  box is closed by pressing the ESC key or by clicking on the
                                                        //  overlay.

        };

        var

            // to avoid confusions, we use "plugin" to reference the current instance of the object
            plugin = this,

            // by default, we assume there are no custom options provided
            options = {},

            // we'll use this when resizing
            timeout;

        // this will hold the merged default, and user-provided options
        plugin.settings = {};

        // if plugin is initialized so that first argument is a string
        // that string is the message to be shown in the dialog box
        if (typeof arguments[0] == 'string') options.message = arguments[0];

        // if plugin is initialized so that first or second argument is an object
        if (typeof arguments[0] == 'object' || typeof arguments[1] == 'object')

            // extend the options object with the user-provided options
            options = $.extend(options, (typeof arguments[0] == 'object' ? arguments[0] : arguments[1]));

        /**
         *  Constructor method
         *
         *  @return object  Returns a reference to the plugin
         */
        plugin.init = function() {

            var $title;

            // the plugin's final properties are the merged default and user-provided options (if any)
            plugin.settings = $.extend({}, defaults, options);

            // check if browser is Internet Explorer 6 and set a flag accordingly as we need to perform some extra tasks
            // later on for Internet Explorer 6
            plugin.isIE6 = (browser.name == 'explorer' && browser.version == 6) || false;

            // if dialog box should be modal
            if (plugin.settings.modal) {

                // create the overlay
                plugin.overlay = $('<div>', {

                    'class':    'ZebraDialogOverlay'

                // set some css properties of the overlay
                }).css({

                    'position': (plugin.isIE6 ? 'absolute' : 'fixed'),  //  for IE6 we emulate the "position:fixed" behaviour
                    'left':     0,                                      //  the overlay starts at the top-left corner of the
                    'top':      0,                                      //  browser window (later on we'll stretch it)
                    'opacity':  plugin.settings.overlay_opacity         //  set the overlay's opacity

                });

                // if dialog box can be closed by clicking the overlay
                if (plugin.settings.overlay_close)

                    // when the overlay is clicked
                    // remove the overlay and the dialog box from the DOM
                    plugin.overlay.bind('click', function() {plugin.close();});

                // append the overlay to the DOM
                plugin.overlay.appendTo('body');

            }

            // create the dialog box
            plugin.dialog = $('<div>', {

                'class':        'ZebraDialog' + (plugin.settings.custom_class ? ' ' + plugin.settings.custom_class : '')

            // set some css properties of the dialog box
            }).css({

                'position':     (plugin.isIE6 ? 'absolute' : 'fixed'),  //  for IE6 we emulate the "position:fixed" behaviour
                'left':         0,                                      //  by default, place it in the top-left corner of the
                'top':          0,                                      //  browser window (we'll position it later)
                'visibility':   'hidden'                                //  the dialog box is hidden for now

            });

            // if a notification message
            if (!plugin.settings.buttons && plugin.settings.auto_close)

                // assign a unique id to each notification
                plugin.dialog.attr('id', 'ZebraDialog_' + Math.floor(Math.random() * 9999999));

            // check to see if the "width" property is given as an integer
            // try to convert to a integer
            var tmp = parseInt(plugin.settings.width, 10);

            // if converted value is a valid number
            if (!isNaN(tmp) && tmp == plugin.settings.width && tmp.toString() == plugin.settings.width.toString() && tmp > 0)

                // set the dialog box's width
                plugin.dialog.css({'width' : plugin.settings.width});

            // if dialog box has a title
            if (plugin.settings.title)

                // create the title
                $title = $('<h3>', {

                    'class':    'ZebraDialog_Title'

                // set the title's text
                // and append the title to the dialog box
                }).html(plugin.settings.title).appendTo(plugin.dialog);

            // get the buttons that are to be added to the dialog box
            var buttons = get_buttons();

            // we create an outer container to apply borders to
            var body_container = $('<div>', {

                'class':    'ZebraDialog_BodyOuter' + (!plugin.settings.title ? ' ZebraDialog_NoTitle' : '') + (!buttons ? ' ZebraDialog_NoButtons' : '')

            }).appendTo(plugin.dialog);

            // create the container of the actual message
            // we save it as a reference because we'll use it later in the "draw" method
            // if the "vcenter_short_message" property is TRUE
            plugin.message = $('<div>', {

                // if a known dialog box type is specified, also show the appropriate icon
                'class':    'ZebraDialog_Body' + (get_type() !== false ? ' ZebraDialog_Icon ZebraDialog_' + get_type() : '')

            });

            // if we have a max-height set
            if (plugin.settings.max_height > 0) {

                // set it like this for browsers supporting the "max-height" attribute
                plugin.message.css('max-height', plugin.settings.max_height);

                // for IE6, go this way...
                if (plugin.isIE6) plugin.message.attr('style', 'height: expression(this.scrollHeight > ' + plugin.settings.max_height + ' ? "' + plugin.settings.max_height + 'px" : "85px")');

            }

            // if short messages are to be centered vertically
            if (plugin.settings.vcenter_short_message)

                // create a secondary container for the message and add everything to the message container
                // (we'll later align the container vertically)
                $('<div>').html(plugin.settings.message).appendTo(plugin.message);

            // if short messages are not to be centered vertically
            else

                // add the message to the message container
                plugin.message.html(plugin.settings.message);

            // if dialog box content is to be fetched from an external source
            if (plugin.settings.source && typeof plugin.settings.source == 'object') {

                // the object where the content will be injected into
                var canvas = (plugin.settings.vcenter_short_message ? $('div:first', plugin.message) : plugin.message);

                // let's see what type of content we need
                for (var type in plugin.settings.source) {

                    switch (type) {

                        // if we have to fetch content using an AJAX call
                        case 'ajax':

                            var

                                // prepare the options for the AJAX call
                                ajax_options = typeof plugin.settings.source[type] == 'string' ? {'url': plugin.settings.source[type]} : plugin.settings.source[type],

                                // create the animated preloader and show it
                                preloader = $('<div>').attr('class', 'ZebraDialog_Preloader').appendTo(canvas);

                            // handle the "success" event
                            ajax_options.success = function(result) {

                                // remove the preloader
                                preloader.remove();

                                // append new content
                                canvas.append(result);

                                // reposition the dialog box
                                draw(false);
                            };

                            // make the AJAX call
                            $.ajax(ajax_options);

                            break;

                        // if we have to show an iFrame
                        case 'iframe':

                            // these are the default options
                            var default_options = {
                                    'width':        '100%',
                                    'height':       '100%',
                                    'marginheight': '0',
                                    'marginwidth':  '0',
                                    'frameborder':  '0'
                                },

                                // extend the default options with the ones provided by the user, if any
                                iframe_options = $.extend(default_options, typeof plugin.settings.source[type] == 'string' ? {'src': plugin.settings.source[type]} : plugin.settings.source[type]);

                            // create the iFrame and place it inside the dialog box
                            canvas.append($('<iframe>').attr(iframe_options));

                            break;

                        // if content is to be taken from an inline element
                        case 'inline':

                            // copy content and place it inside the dialog box
                            canvas.append(plugin.settings.source[type]);

                            break;

                    }

                }

            }

            // add the message container to the dialog box
            plugin.message.appendTo(body_container);

            // if there are any buttons to be added to the dialog box
            if (buttons) {

                // reverse the order of the buttons because they are floated to the right
                buttons.reverse();

                // create the button bar
                var button_bar = $('<div>', {

                    'class':    'ZebraDialog_Buttons'

                // append it to the dialog box
                }).appendTo(plugin.dialog);

                // iterate through the buttons that are to be attached to the dialog box
                $.each(buttons, function(index, value) {

                    // create button
                    var button = $('<a>', {

                        'href':     'javascript:void(0)',
                        'class':    'ZebraDialog_Button_' + index

                    });

                    // if button is given as an object, with a caption and a callback function
                    // set the button's caption
                    if ($.isPlainObject(value)) button.html(value.caption);

                    // if button is given as a plain string, set the button's caption accordingly
                    else button.html(value);

                    // handle the button's click event
                    button.bind('click', function() {

                        // by default, clicking a button closes the dialog box
                        var close = true;

                        // execute the callback function when button is clicked
                        if (undefined !== value.callback) close = value.callback(plugin.dialog);

                        // if dialog box is to be closed
                        if (close !== false)

                            // remove the overlay and the dialog box from the DOM
                            // also pass the button's label as argument
                            plugin.close(undefined !== value.caption ? value.caption : value);

                    });

                    // append the button to the button bar
                    button.appendTo(button_bar);

                });

                // wrap everything in another wrapper
                // and center buttons if needed
                button_bar.wrap($('<div>').addClass('ZebraDialog_ButtonsOuter' + (plugin.settings.center_buttons ? ' ZebraDialog_Buttons_Centered' : '')));

            }

            // insert the dialog box in the DOM
            plugin.dialog.appendTo('body');

            // if we need to show the little "x" for closing the dialog box, in the top-right corner
            if (plugin.settings.show_close_button) {

                // create the button now and append it to the dialog box's title, or to the dialog box's body if there's no title
                var $close = $('<a href="javascript:void(0)" class="ZebraDialog_Close">&times;</a>').bind('click', function(e){

                    e.preventDefault();
                    plugin.close();


                }).appendTo($title ? $title : plugin.message);

                // if the close button was added to the title bar
                if ($title)

                    // center it vertically
                    $close.css({
                        'right':    parseInt($title.css('paddingRight'), 10),
                        'top':      (parseInt($title.css('height'), 10) + parseInt($title.css('paddingTop'), 10) + parseInt($title.css('paddingBottom'), 10) - $close.height()) / 2
                    });

            }

            // if the browser window is resized
            $(window).bind('resize.Zebra_Dialog', function() {

                // clear a previously set timeout
                // this will ensure that the next piece of code will not be executed on every step of the resize event
                clearTimeout(timeout);

                // set a small timeout before doing anything
                timeout = setTimeout(function() {

                    // reposition the dialog box
                    draw();

                }, 100);

            });

            // if dialog box can be closed by pressing the ESC key
            if (plugin.settings.keyboard)

                // if a key is pressed
                $(document).bind('keyup.Zebra_Dialog', function(e) {

                    // if pressed key is ESC
                    // remove the overlay and the dialog box from the DOM
                    if (e.which == 27) plugin.close();

                    // let the event bubble up
                    return true;

                });

            // if browser is Internet Explorer 6 we attach an event to be fired whenever the window is scrolled
            // that is because in IE6 we have to simulate "position:fixed"
            if (plugin.isIE6)

                // if window is scrolled
                $(window).bind('scroll.Zebra_Dialog', function() {

                    // make sure the overlay and the dialog box always stay in the correct position
                    emulate_fixed_position();

                });

            // if plugin is to be closed automatically after a given number of milliseconds
            if (plugin.settings.auto_close !== false) {

                // if, in the meantime, the box is clicked
                plugin.dialog.bind('click', function() {

                    // stop the timeout
                    clearTimeout(plugin.timeout);

                    // close the box now
                    plugin.close();

                });

                // call the "close" method after the given number of milliseconds
                plugin.timeout = setTimeout(plugin.close, plugin.settings.auto_close);

            }

            // draw the overlay and the dialog box
            // (no animation)
            draw(false);

            // return a reference to the object itself
            return plugin;

        };

        /**
         *  Close the dialog box
         *
         *  @return void
         */
        plugin.close = function(caption) {

            // remove all event handlers set by the plugin
            $(document).unbind('.Zebra_Dialog');
            $(window).unbind('.Zebra_Dialog');

            // if an overlay exists
            if (plugin.overlay)

                // animate overlay's css properties
                plugin.overlay.animate({

                    opacity: 0  // fade out the overlay

                },

                // animation speed
                plugin.settings.animation_speed_hide,

                // when the animation is complete
                function() {

                    // remove the overlay from the DOM
                    plugin.overlay.remove();

                });

            // animate dialog box's css properties
            plugin.dialog.animate({

                top: 0,     // move the dialog box to the top
                opacity: 0  // fade out the dialog box

            },

            // animation speed
            plugin.settings.animation_speed_hide,

            // when the animation is complete
            function() {

                // remove the dialog box from the DOM
                plugin.dialog.remove();

                // if a callback function exists for when closing the dialog box
                if (plugin.settings.onClose && typeof plugin.settings.onClose == 'function')

                    // execute the callback function
                    plugin.settings.onClose(undefined !== caption ? caption : '');

            });

        };

        /**
         *  Draw the overlay and the dialog box
         *
         *  @return void
         *
         *  @access private
         */
        var draw = function() {

            var

                // get the viewport width and height
                viewport_width = $(window).width(),
                viewport_height = $(window).height(),

                // get dialog box's width and height
                dialog_width = plugin.dialog.width(),
                dialog_height = plugin.dialog.height(),

                // the numeric representations for some constants that may exist in the "position" property
                values = {

                    'left':     0,
                    'top':      0,
                    'right':    viewport_width - dialog_width,
                    'bottom':   viewport_height - dialog_height,
                    'center':   (viewport_width - dialog_width) / 2,
                    'middle':   (viewport_height - dialog_height) / 2

                };

            // reset these values
            plugin.dialog_left = undefined;
            plugin.dialog_top = undefined;

            // if
            if (

                // the position is given as an array
                $.isArray(plugin.settings.position) &&

                // the array has exactly two elements
                plugin.settings.position.length == 2 &&

                // first element is a string
                typeof plugin.settings.position[0] == 'string' &&

                // first element contains only "left", "right", "center", numbers, spaces, plus and minus signs
                plugin.settings.position[0].match(/^(left|right|center)[\s0-9\+\-]*$/) &&

                // second element is a string
                typeof plugin.settings.position[1] == 'string' &&

                // second element contains only "top", "bottom", "middle", numbers, spaces, plus and minus signs
                plugin.settings.position[1].match(/^(top|bottom|middle)[\s0-9\+\-]*$/)

            ) {

                // make sure both entries are lowercase
                plugin.settings.position[0] = plugin.settings.position[0].toLowerCase();
                plugin.settings.position[1] = plugin.settings.position[1].toLowerCase();

                // iterate through the array of replacements
                $.each(values, function(index, value) {

                    // we need to check both the horizontal and vertical values
                    for (var i = 0; i < 2; i++) {

                        // replace if there is anything to be replaced
                        var tmp = plugin.settings.position[i].replace(index, value);

                        // if anything could be replaced
                        if (tmp != plugin.settings.position[i])

                            // evaluate string as a mathematical expression and set the appropriate value
                            if (i === 0) plugin.dialog_left = eval(tmp); else plugin.dialog_top = eval(tmp);

                    }

                });

            }

            // if "dialog_left" and/or "dialog_top" values are still not set
            if (undefined === plugin.dialog_left || undefined === plugin.dialog_top) {

                // the dialog box will be in its default position, centered
                plugin.dialog_left = values['center'];
                plugin.dialog_top = values['middle'];

            }

            // if short messages are to be centered vertically
            if (plugin.settings.vcenter_short_message) {

                var

                    // the secondary container - the one that contains the message
                    message = plugin.message.find('div:first'),

                    // the height of the secondary container
                    message_height = message.height(),

                    // the main container's height
                    container_height = plugin.message.height();

                // if we need to center the message vertically
                if (message_height < container_height)

                    // center the message vertically
                    message.css({

                        'padding-top':   (container_height - message_height) / 2

                    });

            }

            // if dialog box is to be placed without animation
            if ((typeof arguments[0] == 'boolean' && arguments[0] === false) || plugin.settings.reposition_speed === 0) {

                // position the dialog box and make it visible
                plugin.dialog.css({

                    'left':         plugin.dialog_left,
                    'top':          plugin.dialog_top,
                    'visibility':   'visible',
                    'opacity':      0

                }).animate({'opacity': 1}, plugin.settings.animation_speed_show);

            // if dialog box is to be animated into position
            } else {

                // stop any ongoing animation
                // (or animations will queue up when manually resizing the window)
                plugin.dialog.stop(true);

                plugin.dialog.css('visibility', 'visible').animate({
                    'left': plugin.dialog_left,
                    'top':  plugin.dialog_top
                }, plugin.settings.reposition_speed);

            }

            // move the focus to the first of the dialog box's buttons
            plugin.dialog.find('a[class^=ZebraDialog_Button]:first').focus();

            // if the browser is Internet Explorer 6, call the "emulate_fixed_position" method
            // (if we do not apply a short delay, it sometimes does not work as expected)
            if (plugin.isIE6) setTimeout(emulate_fixed_position, 500);

        };

        /**
         *  Emulates "position:fixed" for Internet Explorer 6.
         *
         *  @return void
         *
         *  @access private
         */
        var emulate_fixed_position = function() {

            var

                // get how much the window is scrolled both horizontally and vertically
                scroll_top = $(window).scrollTop(),
                scroll_left = $(window).scrollLeft();

            // if an overlay exists
            if (plugin.settings.modal)

                // make sure the overlay is stays positioned at the top of the viewport
                plugin.overlay.css({

                    'top':  scroll_top,
                    'left': scroll_left

                });

            // make sure the dialog box always stays in the correct position
            plugin.dialog.css({

                'left': plugin.dialog_left + scroll_left,
                'top':  plugin.dialog_top + scroll_top

            });

        };

        /**
         *  Returns an array containing the buttons that are to be added to the dialog box.
         *
         *  If no custom buttons are specified, the returned array depends on the type of the dialog box.
         *
         *  @return array       Returns an array containing the buttons that are to be added to the dialog box.
         *
         *  @access private
         */
        var get_buttons = function() {

            // if plugin.settings.buttons is not TRUE and is not an array either, don't go further
            if (plugin.settings.buttons !== true && !$.isArray(plugin.settings.buttons)) return false;

            // if default buttons are to be used
            if (plugin.settings.buttons === true)

                // there are different buttons for different dialog box types
                switch (plugin.settings.type) {

                    // for "question" type
                    case 'question':

                        // there are two buttons
                        plugin.settings.buttons = ['Yes', 'No'];

                        break;

                    // for the other types
                    default:

                        // there is only one button
                        plugin.settings.buttons = ['Ok'];

                }

            // return the buttons
            return plugin.settings.buttons;

        };

        /**
         *  Returns the type of the dialog box, or FALSE if type is not one of the five known types.
         *
         *  Values that may be returned by this method are:
         *  -   Confirmation
         *  -   Error
         *  -   Information
         *  -   Question
         *  -   Warning
         *
         *  @return boolean     Returns the type of the dialog box, or FALSE if type is not one of the five known types.
         *
         *  @access private
         */
        var get_type = function() {

            // see what is the type of the dialog box
            switch (plugin.settings.type) {

                // if one of the five supported types
                case 'confirmation':
                case 'error':
                case 'information':
                case 'question':
                case 'warning':

                    // return the dialog box's type, first letter capital
                    return plugin.settings.type.charAt(0).toUpperCase() + plugin.settings.type.slice(1).toLowerCase();

                // if unknown type
                default:

                    // return FALSE
                    return false;

            }

        };

        // since with jQuery 1.9.0 the $.browser object was removed, we rely on this piece of code from
        // http://www.quirksmode.org/js/detect.html to detect the browser
        var browser = {
            init: function () {
                this.name = this.searchString(this.dataBrowser) || '';
                this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || '';
            },
            searchString: function (data) {
                for (var i=0;i<data.length;i++)    {
                    var dataString = data[i].string;
                    var dataProp = data[i].prop;
                    this.versionSearchString = data[i].versionSearch || data[i].identity;
                    if (dataString) {
                        if (dataString.indexOf(data[i].subString) != -1)
                            return data[i].identity;
                    }
                    else if (dataProp)
                        return data[i].identity;
                }
            },
            searchVersion: function (dataString) {
                var index = dataString.indexOf(this.versionSearchString);
                if (index == -1) return;
                return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
            },
            dataBrowser: [
                {
                    string: navigator.userAgent,
                    subString: 'MSIE',
                    identity: 'explorer',
                    versionSearch: 'MSIE'
                }
            ]
        };

        browser.init();

        // fire up the plugin!
        // call the "constructor" method
        return plugin.init();

    };

})(jQuery);
