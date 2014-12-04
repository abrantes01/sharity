//Grunt is just JavaScript running in node, after all...
module.exports = function(grunt) {

    // All upfront config goes in a massive nested object.
    grunt.initConfig({
        // You can set arbitrary key-value pairs.
        distFolder: 'dist',
        // You can also set the value of a key as parsed JSON.
        // Allows us to reference properties we declared in package.json.
        pkg: grunt.file.readJSON('package.json'),
        // Grunt tasks are associated with specific properties.
        // these names generally match their npm package name.
        concat: {
            // Specify some options, usually specific to each plugin.
            options: {
                // Specifies string to be inserted between concatenated files.
                separator: '\n'
            },
            // 'dist' is what is called a "target."
            // It's a way of specifying different sub-tasks or modes.
            dist: {
                // The files to concatenate:
                // Notice the wildcard, which is automatically expanded.
                src: ['scripts/**/*.js',
                    'bower_components/angularSails/dist/ngsails.io.js',
                    'bower_components/sails.io.js/dist/sails.io.js',

                    '!scripts/vendors/*.js',
                    '!scripts/Modules/admin/adminScheduleCtrl.js',
                    '!scripts/Modules/folder/folderCtrl.js',
                    '!scripts/Modules/course/courseCtrl.js',
                    '!scripts/Modules/course/displayCtrl.js',
                    '!scripts/Modules/course/studentCourseCtrl.js',
                    '!scripts/Modules/course/viewCourseCtrl.js',
                    '!scripts/Modules/course/viewHandInCtrl.js',
                    '!scripts/Modules/homework/homeworkCtrl.js',
                    '!scripts/Modules/schedule/scheduleCtrl.js',
                    '!scripts/Modules/shared/bugCtrl.js',
                    '!scripts/Modules/team/teamCtrl.js',
                    '!scripts/Modules/user/absenceCtrl.js'
                ],
                // The destination file:
                // Notice the angle-bracketed ERB-like templating,
                // which allows you to reference other properties.
                // This is equivalent to 'dist/main.js'.
                dest: '<%= distFolder %>/app.js'
                // You can reference any grunt config property you want.
                // Ex: '<%= concat.options.separator %>' instead of ';'
            },
            vendors: {
                src: ['scripts/config.js',
                    'scripts/vendors/*.js',
                    '!scripts/vendors/pdf.worker.js',
                    '!scripts/vendors/pdf.js',
                    '!scripts/vendors/xlsx-reader.js'
                ],
                dest: '<%= distFolder %>/vendors.js'
            },
            modals: {
                src: [
                    'scripts/Modules/admin/adminScheduleCtrl.js',
                    'scripts/Modules/folder/folderCtrl.js',
                    'scripts/Modules/course/courseCtrl.js',
                    'scripts/Modules/course/displayCtrl.js',
                    'scripts/Modules/course/studentCourseCtrl.js',
                    'scripts/Modules/course/viewCourseCtrl.js',
                    'scripts/Modules/course/viewHandInCtrl.js',
                    'scripts/Modules/homework/homeworkCtrl.js',
                    'scripts/Modules/schedule/scheduleCtrl.js',
                    'scripts/Modules/shared/bugCtrl.js',
                    'scripts/Modules/team/teamCtrl.js',
                    'scripts/Modules/user/absenceCtrl.js'
                ],
                dest: '<%= distFolder %>/modals.js'
            },
            components: {
                src: ['bower_components/angular-route/angular-route.min.js',
                    'bower_components/angular-animate/angular-animate.min.js',
                    'bower_components/underscore/underscore-min.js',
                    'bower_components/jquery-spinner/dist/jquery.spinner.min.js',
                    'bower_components/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js',
                    'bower_components/jquery-steps/build/jquery.steps.min.js',
                    'bower_components/toastr/toastr.min.js',
                    'bower_components/bootstrap-file-input/bootstrap.file-input.js',
                    'bower_components/jquery.slimscroll/jquery.slimscroll.min.js',
                    'bower_components/holderjs/holder.js',
                    'bower_components/raphael/raphael-min.js',
                    'bower_components/morris.js/morris.js',
                    'bower_components/flot/jquery.flot.js',
                    'bower_components/dropzone/downloads/dropzone.min.js',
                    'bower_components/flot/jquery.flot.resize.js',
                    'bower_components/flot/jquery.flot.pie.js',
                    'bower_components/flot/jquery.flot.stack.js',
                    'bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js',
                    'bower_components/flot/jquery.flot.time.js',
                    'bower_components/gauge.js/dist/gauge.min.js',
                    'bower_components/jquery.easy-pie-chart/dist/angular.easypiechart.min.js',
                    'bower_components/angular-wizard/dist/angular-wizard.min.js',
                    'bower_components/textAngular/textAngular.min.js',
                    'bower_components/textAngular/textAngular-sanitize.min.js',
                    'bower_components/angular-touch/angular-touch.js',
                    'bower_components/angular-carousel/dist/angular-carousel.min.js',
                    'bower_components/angular-ui-tree/dist/angular-ui-tree.min.js',
                    'bower_components/angularjs-google-maps/dist/ng-map.min.js',
                    'bower_components/jqvmap/jqvmap/jquery.vmap.min.js',
                    'bower_components/jqvmap/jqvmap/maps/jquery.vmap.world.js',
                    'bower_components/jqvmap/jqvmap/maps/jquery.vmap.usa.js',
                    'bower_components/jqvmap/jqvmap/maps/jquery.vmap.europe.js',
                    'bower_components/ng-tags-input/ng-tags-input.min.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.js',
                    'bower_components/angular-gridster/src/angular-gridster.js',
                    'bower_components/angular-qrcode/qrcode.js',
                    'bower_components/moment/moment.js',
                    'bower_components/angular-moment/angular-moment.js',
                    'bower_components/moment/lang/fr.js',
                    'bower_components/angularjs-scroll-glue/src/scrollglue.js',
                    'bower_components/jquery-ui/ui/jquery-ui.js',
                    'bower_components/angular-ui-calendar/src/calendar.js',
                    'bower_components/fullcalendar/fullcalendar.js',
                    'bower_components/fullcalendar/gcal.js',
                    'bower_components/angular-dragdrop/src/angular-dragdrop.min.js',
                    'bower_components/angular-media-player/dist/angular-media-player.min.js',

                    'bower_components/lodash/dist/lodash.min.js',
                    'bower_components/js-xlsx/jszip.js',
                    'bower_components/js-xlsx/dist/xlsx.min.js',
                    'scripts/vendors/xlsx-reader.js'

                ],
                dest: '<%= distFolder %>/components.js'
            }
        },
        cssmin: {
            build: {
                files: {
                    'dist/application.min.css': [
                        'bower_components/angular-gridster/dist/angular-gridster.min.css',
                        'bower_components/angular-carousel/dist/angular-carousel.css',
                        'styles/*.css',
                        'bower_components/fullcalendar/fullcalendar.css'
                    ]
                }
            }
        },
        comments: {
            dist: {
                // Target-specific file lists and/or options go here.
                options: {
                    singleline: false,
                    multiline: true
                },
                src: [ 'scripts/**/*.js'] // files to remove comments from
            }
        },
        uglify: {
            options: {
                compress: {
                    //drop_console: true
                }
            },
            dist: {
                files: {
                    /*'<%= distFolder %>/app.min.js': ['<%= distFolder %>/app.js'],
                    '<%= distFolder %>/components.min.js': ['<%= distFolder %>/components.js'],
                    '<%= distFolder %>/vendors.worker.js': ['scripts/vendors/pdf.worker.js'],
                    '<%= distFolder %>/vendors.min.js': ['<%= distFolder %>/vendors.js'],
                    '<%= distFolder %>/modals.min.js': ['<%= distFolder %>/modals.js'],
                    '<%= distFolder %>/pdf.min.js': ['scripts/vendors/pdf.js'],
                    '<%= distFolder %>/pdf.min.worker.js': ['scripts/vendors/pdf.worker.js']*/
                }
            }
        }
    }); // The end of grunt.initConfig

    // We've set up each task's configuration.
    // Now actually load the tasks.
    // This will do a lookup similar to node's require() function.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-stripcomments');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Register our own custom task alias.
    grunt.registerTask('build', ['cssmin', 'concat' ,'uglify']);
};