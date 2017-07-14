Package.describe({
    name: "practicalmeteor:chai",
    summary: "The Chai Assertion Library, v2.1.0",
    version: "2.1.0_1",
    testOnly: true,
    git: "https://github.com/practicalmeteor/meteor-chai.git"
});


Package.onUse(function (api) {
    api.versionsFrom('0.9.3');

    api.use(['meteor', 'coffeescript']);

    api.addFiles(['chai-2.1.0.js', 'chai-string-1.1.1.js', 'config.coffee', 'exports.js']);

    api.export(['chai','assert','expect','should']);
});


Package.onTest(function(api) {
    api.use(['practicalmeteor:chai', 'coffeescript', 'tinytest', 'test-helpers']);

    api.addFiles(['tests/chai.coffee']);
});
