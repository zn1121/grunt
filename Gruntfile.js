module.exports = function(grunt) {
  grunt.initConfig({
    htmlmin: {
      dev: {                                       // Another target
        files: {
                  'dist/index.html': './index.html',
        }
      }          
    }
            
  });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default', ['htmlmin']);
    
};

