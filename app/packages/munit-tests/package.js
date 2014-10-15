Package.describe({
  summary: "munit tests"
});

Package.onUse(function (api) {
  api.use(['coffeescript', 'spacejamio:chai']);

  api.addFiles('code.coffee');
});

Package.onTest(function (api) {
  api.use(['munit-tests', 'coffeescript', 'spacejamio:munit']);

  api.addFiles('tests/tests.coffee');
});
