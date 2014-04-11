Npm.depends({
    'chai':'1.8.1'
});

Package.describe({
    summary: "Chai Assertion Library"
});

Package.on_use(function (api, where) {
    api.add_files(['server.js'], ['server']);
    api.add_files(['chai.js'], ['client']);
    api.add_files(['exports.js'], ['client','server']);
    api.export(['chai','assert','expect','should'],['client','server']);
});

Package.on_test(function(api) {
    api.use(['chai','tinytest', 'test-helpers',"templating","coffeescript"])
    api.add_files(['tests/chai.coffee']);
});
