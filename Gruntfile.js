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
          'bwconner/css/projects.css' : 'bwconner/scss/projects.scss',
          'comicCollector/css/base.css' : 'comicCollector/scss/base.scss',
          'comicCollector/css/index.css' : 'comicCollector/scss/index.scss',
          'comicCollector/css/search.css' : 'comicCollector/scss/search.scss',
          'comicCollector/css/profile.css' : 'comicCollector/scss/profile.scss',
          'comicCollector/css/comicInfoPage.css' : 'comicCollector/scss/comicInfoPage.scss',
          'comicCollector/css/createAccount.css' : 'comicCollector/scss/createAccount.scss'
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