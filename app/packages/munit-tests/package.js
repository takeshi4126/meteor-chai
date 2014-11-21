Package.describe({
  summary: "munit tests"
});

Package.onUse(function (api) {
  api.use(['coffeescript', 'practicalmeteor:chai']);

  api.addFiles('code.coffee');
});

Package.onTest(function (api) {
  api.use(['munit-tests', 'coffeescript', 'practicalmeteor:munit']);

  api.addFiles('tests/tests.coffee');
});
