module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'bwconner/css/base.css' : 'bwconner/scss/base.scss',
          'bwconner/css/contact.css' : 'bwconner/scss/contact.scss',
          'bwconner/css/index.css' : 'bwconner/scss/index.scss',
          'bwconner/css/media.css' : 'bwconner/scss/media.scss',
          'bwconner/css/projects.css' : 'bwconner/scss/projects.scss'
        }
      }
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
}