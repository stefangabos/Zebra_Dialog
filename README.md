##Zebra_Dialog

####A small, compact, and highly configurable jQuery plugin for creating modal dialog boxes####

**Zebra_Dialog** is a small, compact, and highly configurable jQuery plugin for creating modal dialog boxes, meant to replace native Java Script “alert” and “confirmation” dialog boxes

Can also be used as a notification widget - when configured to show no buttons and to close automatically - for updates or errors, without distracting users from their browser experience by displaying obtrusive alerts.

![Screenshot](https://raw.github.com/stefangabos/Zebra_Dialog/master/examples/screenshot.png)

##Features

 - great looks - out of the box
 - 5 types of dialog boxes available: *confirmation*, *information*, *warning*, *error* and *question*
 - content can also be added through AJAX calls, iFrames, or from inline elements (together with attached events)
 - easily customisable appearance by editing the stylesheet
 - create modal or non-modal dialog boxes - callback functions can be used for further customisations
 - easily add custom buttons
 - position the dialog box wherever you want - not just in the middle of the screen
 - use callback functions to handle user's choice
 - works in all major browsers (Firefox, Opera, Safari, Chrome, Internet Explorer 6+)

##Requirements

**Zebra_Dialog** has no dependencies other than jQuery 1.4.1+

##How to use

First, load the latest version of jQuery from a CDN and provide a fallback to a local source, like:

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="public/javascript/jquery-1.9.1.js"><\/script>')</script>
```

Load the Zebra_Dialog plugin

```html
<script type="text/javascript" src="path/to/zebra_dialog.js"></script>
```

Load the plugin’s stylesheet file

```html
<link rel="stylesheet" href="path/to/zebra_dialog.css" type="text/css">
```

Now, within the DOM-ready event do

```javascript
$(document).ready(function() {

    // show a dialog box when clicking on a link
    $(anchor).bind('click', function(e) {
        e.preventDefault();
        $.Zebra_Dialog('The link was clicked!');
    });

});
```

Configuration options and demos on the **[project's homepage](http://stefangabos.ro/jquery/zebra-dialog/)**
