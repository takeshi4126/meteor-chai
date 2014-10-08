Npm.depends({
    'chai':'1.8.1'
});


Package.describe({
    name: "spacejamio:chai",
    summary: "The Chai Assertion Library, v1.8.1",
    version: "1.0.0",
    git: "https://github.com/spacejamio/meteor-chai.git"
});


Package.onUse(function (api) {
    api.versionsFrom('0.9.0');

    api.addFiles(['server.js'], 'server');
    api.addFiles(['chai.js'], 'client');
    api.addFiles('config.js');
    api.addFiles(['exports.js']);

    api.export(['chai','assert','expect','should']);
});


Package.onTest(function(api) {
    api.use(['spacejamio:chai', 'coffeescript', 'tinytest', 'test-helpers']);

    api.addFiles(['tests/chai.coffee']);
});
