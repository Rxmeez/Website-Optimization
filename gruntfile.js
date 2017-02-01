module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      my_target:{
        files:[{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'

        }]
      }
    },

    imagemin: {
      dynamic: {
        files:[{
          expand: true,
          cwd: 'views/images',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'views/images/min/'
        }]
      }
    },

    uglify: {
      options: {
        manage: false
      },
      my_target:{
        files: {
          'views/js/main.min.js':['views/js/main.js']
        }
      }
  },

  htmlmin: {
    dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'index.html': 'index.html',     // 'destination': 'source'
        'views/pizza.html': 'views/pizza.html'
      }
    }
  }

});

grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-htmlmin');

};
