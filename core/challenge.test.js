// q1
describe("Basic tests", () => {
    it("Testing for fixed tests", () => {
      assert.strictEqual(descendingOrder(0), 0)
      assert.strictEqual(descendingOrder(1), 1)
      assert.strictEqual(descendingOrder(111), 111)
      assert.strictEqual(descendingOrder(15), 51)
      assert.strictEqual(descendingOrder(1021), 2110)
      assert.strictEqual(descendingOrder(123456789), 987654321)
      })
    })


//q2
describe("Basic tests", () => {
    it("Should pass Basic tests", () => {
      assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
      assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
      assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
      assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
      assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
      assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
    });
  });

  //q3

  describe("Example tests", () => {
    it("Test 1", () => {
      assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
    });
    it("Test 2", () => {
      assert.strictEqual(highAndLow("1 2 3"), "3 1");
    });
  });

  //q4

  describe("Sample Tests", () => {
    it("Should pass sample tests", () => {
      assert.strictEqual(solution('camelCasing'), 'camel Casing', 'Unexpected result')
      assert.strictEqual(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
    });
  });

  //q5
  describe("Sample Tests", () => {
    it("should pass some sample tests", () => {
      assert.deepEqual(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
      assert.deepEqual(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
      assert.deepEqual(sortArray([]),[]);
    });
  });

  //q6

  describe("GetMiddle", function() {
    it("Tests", function() {
      Test.assertEquals(getMiddle("test"),"es");
      Test.assertEquals(getMiddle("testing"),"t");
      Test.assertEquals(getMiddle("middle"),"dd");
      Test.assertEquals(getMiddle("A"),"A");
    });
  });

  //q7

  describe("Tests", () => {
    it("sample tests", () => {
      doTest('XXI', 21);
      doTest('I', 1);
      doTest('IV', 4);
      doTest('MMVIII', 2008);
      doTest('MDCLXVI', 1666);
    });
  });
  

  //q9
  describe("Tests", () => {
    it("test", () => {
      assert.strictEqual(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
      assert.strictEqual(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);
    });
  });