Npm.depends({
    'chai':'1.8.1'
});

Package.describe({
    summary: "The Chai Assertion Library, v1.8.1",
    name: "spacejamio:chai",
    version: "0.1.6",
    git: "https://github.com/spacejamio/meteor-chai.git"
});

Package.on_use(function (api, where) {
    api.add_files(['server.js'], ['server']);
    api.add_files(['chai.js'], ['client']);
    api.add_files(['exports.js'], ['client','server']);
    api.export(['chai','assert','expect','should'],['client','server']);
});

Package.on_test(function(api) {
    api.use(['chai','tinytest', 'test-helpers',"templating","coffeescript"]);
    api.add_files(['tests/chai.coffee']);
});
