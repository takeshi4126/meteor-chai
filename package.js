Package.describe({
    name: "spacejamio:chai",
    summary: "This package has been renamed to practicalmeteor:chai. Please use the new name instead.",
    version: "1.9.2_3",
    git: "https://github.com/practicalmeteor/meteor-chai.git"
});


Package.onUse(function (api) {
    api.versionsFrom('0.9.3');

    api.use(['meteor', 'coffeescript']);

    api.addFiles(['chai-1.9.2.js', 'config.coffee', 'exports.js']);

    api.export(['chai','assert','expect','should']);
});


Package.onTest(function(api) {
    api.use(['practicalmeteor:chai', 'coffeescript', 'tinytest', 'test-helpers']);

    api.addFiles(['tests/chai.coffee']);
});
