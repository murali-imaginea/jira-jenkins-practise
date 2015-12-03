module.exports = function (grunt) {
  grunt.registerTask('default', function(){
    var buildNumber = process.env.BUILD_NUMBER;
      var buildName = process.env.JOB_NAME;
    console.log('this is grunt task boss',buildNumber , buildName );
  });
};
