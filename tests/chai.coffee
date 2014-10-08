foo = 'bar'

Tinytest.add "chai - chai exported", (test) ->
  test.isTrue chai instanceof Object, "chai is not defined"

Tinytest.add "chai - assert exported", (test) ->
  test.isTrue assert instanceof Object, "assert is not defined"
  assert.equal(foo, 'bar', 'foo equal `bar`')

Tinytest.add "chai - expect exported", (test) ->
  test.isTrue expect instanceof Object, "expect is not defined"
  expect(foo).to.equal('bar')

Tinytest.add "chai - should exported", (test) ->
  test.isTrue should instanceof Object, "should is not defined"
  should()
  foo.should.equal('bar')
