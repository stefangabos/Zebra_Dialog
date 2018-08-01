$(document).ready(function() {

    $('#example1').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog('<strong>Zebra_Dialog</strong>, a small, compact and highly configurable dialog box plugin for jQuery');
    });

    $('#example2_1').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog('Use error messages to let the user know that an action has not completed successfully and show the reason why that happened.', {
            type: 'error',
            title: 'Error'
        });
    });

    $('#example2_2').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog('Show warning messages like this when you are about to perform a sensitive operation and you want to make sure that the user understands the implications.', {
            type: 'warning',
            title: 'Warning'
        });
    });

    $('#example2_3').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog('Show confirmation dialogs like this when you want the user\'s accept for non-critical actions.', {
            type: 'question',
            title: 'Question'
        });
    });

    $('#example2_4').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog('Use information boxes to show information or help messages that the user requested.', {
            type: 'information',
            title: 'Information'
        });
    });

    $('#example2_5').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog('Use confirmation messages to let the user know that an action has completed successfully.', {
            type: 'confirmation',
            title: 'Confirmation'
        });
    });

    $('#example3').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog('We can set as many buttons as we want and we handle the user\'s choice though the callback function attached to the <strong>onClose</strong> event.<br><br>See the next example to handle user\'s choice in a different way.', {
            type: 'question',
            title: 'Custom buttons',
            buttons: ['Yes', 'No', 'Help'],
            onClose: function(caption) {
                alert((caption != '' ? '"' + caption + '"' : 'nothing') + ' was clicked');
            }
        });
    });

    $('#example4').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog('We can set as many buttons as we want and we can handle the user\'s choice though the callback functions attached to the buttons.', {
            type: 'question',
            title: 'Custom buttons',
            buttons: [
                {caption: 'Yes', callback: function() { alert('"Yes" was clicked')}},
                {caption: 'No', callback: function() { alert('"No" was clicked')}},
                {caption: 'Cancel', callback: function() { alert('"Cancel" was clicked')}}
            ]
        });
    });

    $('#example5_1').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog('I am positioned in the <strong>top-left</strong> corner, 20&nbsp;pixels from the edges. Here\'s how it\'s done:<br><code>position: [\'left + 20\', \'top + 20\']</code>', {
            title: 'Custom positioning',
            width: 460,
            position: ['left + 20', 'top + 20']
        });
    });

    $('#example5_2').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog('I am positioned in the <strong>top-right</strong> corner, 20&nbsp;pixels from the edges. Here\'s how it\'s done:<br><code>position: [\'right - 20\', \'top + 20\']</code>', {
            title: 'Custom positioning',
            width: 460,
            position: ['right - 20', 'top + 20']
        });
    });

    $('#example5_3').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog('I am positioned in the <strong>bottom-right</strong> corner, 20&nbsp;pixels from the edges. Here\'s how it\'s done:<br><code>position: [\'right - 20\', \'bottom - 20\']</code>', {
            title: 'Custom positioning',
            width: 460,
            position: ['right - 20', 'bottom - 20']
        });
    });

    $('#example5_4').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog('I am positioned in the <strong>bottom-left</strong> corner, 20&nbsp;pixels from the edges. Here\'s how it\'s done:<br><code>position: [\'left + 20\', \'bottom - 20\']</code>', {
            title: 'Custom positioning',
            width: 460,
            position: ['left + 20', 'bottom - 20']
        });
    });

    $('#example5_5').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog('I am positioned in the <strong>center</strong> of the screen. Here\'s how it\'s done:<br><code>position: [\'center\', \'center\']</code>', {
            title: 'Custom positioning',
            width: 460,
            position: ['center', 'center']
        });
    });

    $('#example5_6').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog('I am centered horizontally and 50&nbsp;pixels from the top edge. Here\'s how it\'s done:<br><code>position: [\'center\', \'top + 50\']</code>', {
            title: 'Custom positioning',
            width: 460,
            position: ['center', 'top + 50']
        });
    });

    $('#example6').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog('I am a notification widget. No buttons, no overlay, I am positioned in the top-right corner and I stay on screen for 2 seconds.', {
            buttons: false,
            modal: false,
            position: ['right - 20', 'top + 20'],
            auto_close: 2000
        });
    });

    $('#example7').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog({
            source: {
                inline: $('#boxcontent').html()
            },
            width: 600,
            title: 'Content loaded from an element on the page'
        });
    });

    $('#example8').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog({
            source: {
                ajax: 'ajax.html'
            },
            width: 600,
            title: 'Content loaded via AJAX'
        });
    });

    $('#example9').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog({
            source: {
                iframe: {
                    src: 'http://en.m.wikipedia.org/wiki/Dialog_box',
                    height: 500
                }
            },
            width: 800,
            title:  'External content loaded in an iFrame'
        });
    });

    $('#example10').on('click', function(e) {
        e.preventDefault();
        new $.Zebra_Dialog('I love coffee!', {
            custom_class: 'myclass',
            title: 'Customizing the appearance',
            width: 300
        });
    });

    setTimeout(function() {
        $.Zebra_Pin($('blockquote.bg-warning'));
    }, 500);

});
