var cfenv = require('cfenv');

var appEnv = cfenv.getAppEnv();
var slackin = require('./dist').default

var flags = {
  token: process.env.SLACK_API_TOKEN,
  interval: 30000,
  org: process.env.SLACK_SUBDOMAIN,
  path: '',
  silent: false
};

slackin(flags).listen(appEnv.port, '0.0.0.0', function() {
	 console.log("server starting on " + appEnv.url);
});