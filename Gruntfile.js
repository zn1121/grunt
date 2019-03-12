module.exports = function(grunt){
  grunt.initConfig({
    sprite:{
      all: {
        src: './images/*.png',
        dest: '.images/all.png',
        destCss: '/sprites.css'
                                                                  
      }
    });
  grunt.loadNpmTasks('grunt-contrib-spritesmith');

  grunt.registerTask('default',['sprite']);
};
