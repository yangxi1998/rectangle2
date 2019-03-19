module.exports = function (grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['*.js']
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      src: '*.css'
    },
    htmlhint: {
      options: {
        htmlhintrc: '.htmlhintrc'
      },
      src: '*.html'
    }
    mocha: {
      test: {
        src: ['test/index.html'],
      },
      options: {
        run: true,
        reporter: 'Spec'
      }
    
    
    }
    htmlmin: {
      options: {
          collapseWhitespace: true,
         preserveLineBreaks: true
                                       
      },
    files: {
        src: './index.html',
        dest: 'dist/index.html'
      }
                 
           },
    cssmin: {
      target:{
        files:[{
          src:['*.css'],
          dest:'release/rectangle.css'
        }
      ]
                           
    }},
    uglify: {
          release:{
            files: {
                  'dist/rectangle.js': 'rectangle.js',
                                                 
                 }
                              
               }
                           
             }      
  });
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['htmlhint', 'csslint', 'eslint']);
  grunt.registerTask('default', ['mocha']);
  grunt.registerTask('default', ['htmlmin']);
  grunt.registerTask('default',['cssmin']);
  grunt.registerTask('default',['uglify:release']);

};
