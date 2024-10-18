'use strict';

module.exports = function(grunt) {

    // show time spent on each task
    require('time-grunt')(grunt);

    // required for sass
    const sass = require('sass');

    grunt.initConfig({

        /***************************************************************************************************************
         *  NOTIFY
         *  https://github.com/dylang/grunt-notify
         **************************************************************************************************************/
        'notify': {
            done: {
                options: {
                    title: 'Grunt ',
                    message: 'All tasks were successfully completed!'
                }
            }
        },

        /***************************************************************************************************************
         *  SASS
         *  https://www.npmjs.org/package/grunt-sass
         **************************************************************************************************************/
        'sass': {
            expanded: {
                options: {
                    implementation: sass,
                    outputStyle: 'expanded',
                    indentWidth: 4
                },
                files: {
                    'dist/css/classic/zebra_dialog.css': 'src/css/classic/zebra_dialog.scss',
                    'dist/css/flat/zebra_dialog.css': 'src/css/flat/zebra_dialog.scss',
                    'dist/css/materialize/zebra_dialog.css': 'src/css/materialize/zebra_dialog.scss'
                }
            },
            minified: {
                options: {
                    implementation: sass,
                    outputStyle: 'compressed'
                },
                files: {
                    'dist/css/classic/zebra_dialog.min.css': 'src/css/classic/zebra_dialog.scss',
                    'dist/css/flat/zebra_dialog.min.css': 'src/css/flat/zebra_dialog.scss',
                    'dist/css/materialize/zebra_dialog.min.css': 'src/css/materialize/zebra_dialog.scss'
                }
            }
        },

        /***************************************************************************************************************
         *  CSSMIN
         *  https://github.com/gruntjs/grunt-contrib-cssmin
         **************************************************************************************************************/
        'cssmin': {
            beutify: {
                options: {
                    compatibility: {
                        properties: {
                            ieBangHack: true,
                            ieFilters: true,
                            iePrefixHack: true,
                            ieSuffixHack: true
                        },
                        selectors: {
                            ie7Hack: true
                        }
                    },
                    format: {
                        breaks: {
                            afterAtRule: true,
                            afterBlockBegins: true,
                            afterBlockEnds: true,
                            afterComment: true,
                            afterProperty: true,
                            afterRuleBegins: true,
                            afterRuleEnds: true,
                            beforeBlockEnds: true,
                            betweenSelectors: true
                        },
                        indentBy: 4,
                        indentWith: 'space',
                        spaces: {
                            aroundSelectorRelation: true,
                            beforeBlockBegins: true,
                            beforeValue: true
                        }
                    },
                    level: 2
                },
                files: {
                    'dist/css/classic/zebra_dialog.css': 'dist/css/classic/zebra_dialog.css',
                    'dist/css/flat/zebra_dialog.css': 'dist/css/flat/zebra_dialog.css',
                    'dist/css/materialize/zebra_dialog.css': 'dist/css/materialize/zebra_dialog.css'
                }
            },
            minify: {
                options: {
                    compatibility: {
                        properties: {
                            ieBangHack: true,
                            ieFilters: true,
                            iePrefixHack: true,
                            ieSuffixHack: true
                        },
                        selectors: {
                            ie7Hack: true
                        }
                    },
                    level: 2
                },
                files: {
                    'dist/css/classic/zebra_dialog.min.css': 'dist/css/classic/zebra_dialog.min.css',
                    'dist/css/flat/zebra_dialog.min.css': 'dist/css/flat/zebra_dialog.min.css',
                    'dist/css/materialize/zebra_dialog.min.css': 'dist/css/materialize/zebra_dialog.min.css'
                }
            }
        },

        /***************************************************************************************************************
         *  ESLINT
         *  http://eslint.org/docs/rules/
         **************************************************************************************************************/
        'eslint' : {
            src: ['src/zebra_dialog.src.js']
        },

        /***************************************************************************************************************
         *  JSHINT
         *  https://npmjs.org/package/grunt-contrib-jshint
         **************************************************************************************************************/
        'jshint': {
            options: {
                strict:     true,       //  requires all functions to run in ECMAScript 5's strict mode
                asi:        false,      //  suppresses warnings about missing semicolons
                globals: {              //  white list of global variables that are not formally defined in the source code
                    '$':                true,
                    'console':          true,
                    'jQuery':           true
                },
                browser:    true,       //  defines globals exposed by modern browsers (like `document` and `navigator`)
                bitwise:    true,       //  prohibits the use of bitwise operators such as ^ (XOR), | (OR) and others
                curly:      false,      //  whether to always put curly braces around blocks in loops and conditionals
                eqeqeq:     true,       //  this options prohibits the use of == and != in favor of === and !==
                freeze:     true,       //  this options prohibits overwriting prototypes of native objects such as Array, Date and so on
                scripturl:  true,       //  allow use of scripts
                nonew:      true,       //  this option prohibits the use of constructor functions without assigning them to a variable
                loopfunc:   true,       //  allow functions to be defined inside loops
                undef:      true        //  this option prohibits the use of explicitly undeclared variables
            },
            src: ['src/zebra_dialog.src.js']
        },

        /***************************************************************************************************************
         *  UGLIFY
         *  https://npmjs.org/package/grunt-contrib-uglify
         **************************************************************************************************************/
        'uglify': {
            options: {
                compress: true,
                mangle: true,
                beautify: false,
                ie8: true
            },
            build: {
                src: 'src/zebra_dialog.src.js',
                dest: 'dist/zebra_dialog.min.js'
            }
        },

        /***************************************************************************************************************
         *  COPY
         *  https://github.com/gruntjs/grunt-contrib-copy
         **************************************************************************************************************/
        'copy': {
            js: {
                files: [
                    { src: 'src/zebra_dialog.src.js', dest: 'dist/zebra_dialog.src.js' }
                ]
            },
            css: {
                files: [
                    { expand: true, cwd: 'src/css/classic/', src: ['*.png', '*.scss', '*.txt', '*.gif'], dest: 'dist/css/classic/' },
                    { expand: true, cwd: 'src/css/flat/', src: ['*.png', '*.scss', '*.txt', '*.gif'], dest: 'dist/css/flat/' },
                    { expand: true, cwd: 'src/css/materialize/', src: ['*.png', '*.scss', '*.txt', '*.gif'], dest: 'dist/css/materialize/' }
                ]
            }
        },

        /***************************************************************************************************************
         *  INCLUDES
         *  https://github.com/vanetix/grunt-includes
         **************************************************************************************************************/
        'includes': {
            css: {
                options: {
                    includeRegexp: /^\/\/ include \'(.*?)\'/,
                    includePath: 'src/css/classic/',
                    filenameSuffix: '.scss',
                    silent: true
                },
                files: [
                    { cwd: 'dist/css/classic', src: '*.scss', dest: 'dist/css/classic/zebra_dialog.scss' },
                    { cwd: 'dist/css/flat', src: '*.scss', dest: 'dist/css/flat/zebra_dialog.scss' },
                    { cwd: 'dist/css/materialize', src: '*.scss', dest: 'dist/css/materialize/zebra_dialog.scss' }
                ]
            }
        },

        /***************************************************************************************************************
         *  WATCH
         *  https://npmjs.org/package/grunt-contrib-watch
         **************************************************************************************************************/
        'watch': {
            js: {
                files: ['src/zebra_dialog.src.js'],
                tasks: ['newer:eslint', 'newer:jshint', 'newer:uglify', 'copy:js', 'notify:done'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['src/css/**/*.scss'],
                tasks: ['sass', 'cssmin', 'copy:css', 'includes:css', 'notify:done'],
                options: {
                    livereload: true
                }
            }
        }

    });

    // register plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', ['sass', 'cssmin', 'eslint', 'jshint', 'uglify', 'copy', 'includes', 'watch']);

};