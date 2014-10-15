Package.describe({
    name: "spacejamio:chai",
    summary: "The Chai Assertion Library, v1.9.2",
    version: "1.9.2_2",
    git: "https://github.com/spacejamio/meteor-chai.git"
});


Package.onUse(function (api) {
    api.versionsFrom('0.9.3');

    api.use(['meteor', 'coffeescript']);

    api.addFiles(['chai-1.9.2.js', 'config.coffee', 'exports.js']);

    api.export(['chai','assert','expect','should']);
});


Package.onTest(function(api) {
    api.use(['spacejamio:chai', 'coffeescript', 'tinytest', 'test-helpers']);

    api.addFiles(['tests/chai.coffee']);
});
