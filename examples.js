$(document).ready(function() {

    $('#example1_1').on('click', function() {
        new $.Zebra_Dialog('Use error messages to let the user know that an action has not completed successfully and show the reason why that happened.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Error',
            type: 'error'
        });
    });

    $('#example1_2').on('click', function() {
        new $.Zebra_Dialog('Show warning messages like this when you are about to perform a sensitive operation and you want to make sure that the user understands the implications.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Warning',
            type: 'warning',
        });
    });

    $('#example1_3').on('click', function() {
        new $.Zebra_Dialog('Show confirmation dialogs like this when you want the user\'s accept for non-critical actions.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Question',
            type: 'question'
        });
    });

    $('#example1_4').on('click', function() {
        new $.Zebra_Dialog('Use information boxes to show information or help messages that the user requested.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Information',
            type: 'information'
        });
    });

    $('#example1_5').on('click', function() {
        new $.Zebra_Dialog('Use confirmation messages to let the user know that an action has completed successfully.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Confirmation',
            type: 'confirmation'
        });
    });

    $('#example2').on('click', function() {
        new $.Zebra_Dialog('We can set as many buttons as we want and we handle the user\'s choice though the callback function attached to the <strong>onClose</strong> event.<br><br>See the next example to handle user\'s choice in a different way.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Custom buttons',
            type: 'question',
            buttons: ['Yes', 'No', 'Help'],
            onClose: function(caption) {
                alert((caption != '' ? '"' + caption + '"' : 'nothing') + ' was clicked');
            }
        });
    });

    $('#example3').on('click', function() {
        new $.Zebra_Dialog('We can set as many buttons as we want and we can handle the user\'s choice though the callback functions attached to the buttons.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Custom buttons',
            type: 'question',
            buttons: [
                {caption: 'Yes', callback: function() { alert('"Yes" was clicked')}},
                {caption: 'No', callback: function() { alert('"No" was clicked')}},
                {caption: 'Cancel', callback: function() { alert('"Cancel" was clicked')}}
            ]
        });
    });

    $('#example4_1').on('click', function() {
        new $.Zebra_Dialog('I am positioned in the <strong>top-left</strong> corner, 20&nbsp;pixels from the edges. Here\'s how it\'s done:<br><code>position: [\'left + 20\', \'top + 20\']</code>', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Custom positioning',
            width: 460,
            position: ['left + 20', 'top + 20']
        });
    });

    $('#example4_2').on('click', function() {
        new $.Zebra_Dialog('I am positioned in the <strong>top-right</strong> corner, 20&nbsp;pixels from the edges. Here\'s how it\'s done:<br><code>position: [\'right - 20\', \'top + 20\']</code>', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Custom positioning',
            width: 460,
            position: ['right - 20', 'top + 20']
        });
    });

    $('#example4_3').on('click', function() {
        new $.Zebra_Dialog('I am positioned in the <strong>bottom-right</strong> corner, 20&nbsp;pixels from the edges. Here\'s how it\'s done:<br><code>position: [\'right - 20\', \'bottom - 20\']</code>', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Custom positioning',
            width: 460,
            position: ['right - 20', 'bottom - 20']
        });
    });

    $('#example4_4').on('click', function() {
        new $.Zebra_Dialog('I am positioned in the <strong>bottom-left</strong> corner, 20&nbsp;pixels from the edges. Here\'s how it\'s done:<br><code>position: [\'left + 20\', \'bottom - 20\']</code>', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Custom positioning',
            width: 460,
            position: ['left + 20', 'bottom - 20']
        });
    });

    $('#example4_5').on('click', function() {
        new $.Zebra_Dialog('I am positioned in the <strong>center</strong> of the screen. Here\'s how it\'s done:<br><code>position: [\'center\', \'center\']</code>', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Custom positioning',
            width: 460,
            position: ['center', 'center']
        });
    });

    $('#example4_6').on('click', function() {
        new $.Zebra_Dialog('I am centered horizontally and 50&nbsp;pixels from the top edge. Here\'s how it\'s done:<br><code>position: [\'center\', \'top + 50\']</code>', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Custom positioning',
            width: 460,
            position: ['center', 'top + 50']
        });
    });

    $('#example5').on('click', function() {
        new $.Zebra_Dialog('<strong>Zebra_Dialog</strong>, a small, compact and highly configurable dialog box plugin for jQuery', {
            auto_focus_button: $('body.materialize').length ? false : true
        });
    });

    $('#example6').on('click', function() {
        new $.Zebra_Dialog('I am a notification widget. No buttons, no overlay, I am positioned in the top-right corner and I stay on screen for 2 seconds.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            buttons: false,
            modal: false,
            position: ['right - 20', 'top + 20'],
            auto_close: 2000
        });
    });

    $('#example7').on('click', function() {
        new $.Zebra_Dialog({
            auto_focus_button: $('body.materialize').length ? false : true,
            source: {
                inline: $('#boxcontent').html()
            },
            width: 600,
            title: 'Content loaded from an element on the page'
        });
    });

    $('#example8').on('click', function() {
        new $.Zebra_Dialog({
            auto_focus_button: $('body.materialize').length ? false : true,
            source: {
                ajax: 'ajax.html'
            },
            width: 600,
            title: 'Content loaded via AJAX'
        });
    });

    $('#example9').on('click', function() {
        new $.Zebra_Dialog({
            auto_focus_button: $('body.materialize').length ? false : true,
            source: {
                iframe: {
                    src: 'https://en.m.wikipedia.org/wiki/Dialog_box',
                    height: 500
                }
            },
            width: 800,
            title:  'External content loaded in an iFrame'
        });
    });

    $('#example10').on('click', function() {
        new $.Zebra_Dialog('I love coffee!', {
            auto_focus_button: $('body.materialize').length ? false : true,
            custom_class: 'myclass',
            title: 'Customizing the appearance',
            width: 300
        });
    });

    setTimeout(function() {
        $.Zebra_Pin($('blockquote.bg-warning'));
    }, 500);

});
