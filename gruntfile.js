var JenkinsUrl = "http://localhost:8080";
var jenkinsapi = require('jenkins-api');
var jenkins = jenkinsapi.init(JenkinsUrl);
module.exports = function (grunt) {
  grunt.registerTask('default', function(){
    var done = this.async();
    var buildNumber = process.env.BUILD_NUMBER;
      var buildName = process.env.JOB_NAME;
    console.log('this is grunt task boss',buildNumber , buildName );
    jenkins.build_info(buildName, buildNumber, function(err, data) {
        console.log('jenking changes ', data);
        data.changeSet.items.forEach(function(loopItem){
          console.log('commint : ', loopItem);
        });
        done();
    });
  });
  
  grunt.registerTask('sendmail', function(){
    var request = require('request');
    var done = this.async();
      request('http://cassiopeia.ads.autodesk.com:8080/view/wip1fqa/job/Deploy-wip1fqa-JiraIssueReport/buildWithParameters?token=murali&jobname=test&buildno=14', function (err, response, body) {
        console.log('Invoked sending Mail JOB in remote', err, response.statusCode);
        done();
      })
  });
};

