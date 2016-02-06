Package.describe({
  name: 'brundage:connection-status',
  version: '0.0.2',
  summary: 'Just a little connection status package',
  git: 'https://github.com/brundage/meteor-connection-status.git',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['templating'], 'client', 'ecmascript');
  api.addFiles( [ 'connectionStatus.css',
                   'connectionStatus.html',
                   'connectionStatus.js' ],
                 'client');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('brundage:connection-status');
  api.addFiles('connectionStatusTests.js');
});
