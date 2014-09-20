Npm.depends({
    'chai':'1.8.1'
});

Package.describe({
    summary: "The Chai Assertion Library, v1.8.1",
    name: "spacejamio:chai",
    version: "1.0.0",
    git: "https://github.com/spacejamio/meteor-chai.git"
});

Package.onUse(function (api, where) {
    api.addFiles(['server.js'], ['server']);
    api.addFiles(['chai.js'], ['client']);
    api.addFiles(['exports.js'], ['client','server']);
    api.export(['chai','assert','expect','should'],['client','server']);
});

Package.onTest(function(api) {
    api.use(['coffeescript', 'tinytest', 'test-helpers', 'spacejamio:chai']);
    api.addFiles(['tests/chai.coffee']);
});
