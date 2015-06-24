module.exports = function (grunt) {



    // Load the plugin that provides the "uncss" task.
    grunt.loadNpmTasks('grunt-uncss');
    // Load the plugin that provides the "autoprefixer" task.
    grunt.loadNpmTasks('grunt-autoprefixer');
    // Load the plugin that provides the "processhtml" task.
    grunt.loadNpmTasks('grunt-processhtml');
    // Load the plugin that provides the "cssmin" task.
    grunt.loadNpmTasks('grunt-contrib-cssmin');



    grunt.initConfig({

        // uncss task
        uncss: {
            dist: {
                files: { // files scanned on the right are cleaned css. On the left you can add all the HTML files you want to append the uncss changes.
                    'website/stylesheets/app.css': ['website/index.html']
                }
            }
        },

        // autoprefixer task
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', 'Android 2.3']
            },
            target: {
                src: 'website/stylesheets/app.css',
                dest: 'website/stylesheets/app.css'
            }
        },

        // cssmin task
        cssmin: {
            minify: {
                files: {
                    'website/stylesheets/app.min.css': ['website/stylesheets/app.css']
                }
            }
        },

        //processhtml task
        processhtml: {
            dist: {
                files: {
                    // Here you add all the HTML files you want to append the uncss/minified changes.
                    'website/index.html': ['website/index.html']
                }
            }
        }
    });

    // Register one task that gets the job done
    grunt.registerTask('clean', ['uncss', 'autoprefixer', 'cssmin', 'processhtml']);
}