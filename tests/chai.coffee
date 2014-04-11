Tinytest.add "chai - exists", (test) ->
  test.isNotNull chai, "library chai is not defined"
  test.notEqual chai, `undefined`, "library chai is not defined"

Tinytest.add "chai - exists - assert", (test) ->
  test.isNotNull assert, "assert is not defined"
  test.notEqual assert, `undefined`, "assert is not defined"

Tinytest.add "chai - exists - expect", (test) ->
  test.isNotNull expect, "expect is not defined"
  test.notEqual expect, `undefined`, "expect is not defined"

Tinytest.add "chai - exists - should", (test) ->
  test.isNotNull should, "library chai is not defined"
  test.notEqual should, `undefined`, "library chai is not defined"

