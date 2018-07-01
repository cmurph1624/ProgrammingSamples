(function () {
  'use strict';

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
        expect(true).toBe(true);
      });
    });
  });

  describe("A spec", function() {
    it("is just a function, so it can contain any code", function() {
        var foo = 0;
        foo += 1;
        expect(foo).toEqual(1);
    });
 
    it("can have more than one expectation", function () {
        var foo = 0;
        foo += 1;
 
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });

    it("evaluate hello world", function() {
      expect(helloWorld()).toEqual('Hello world!');
    })
});
})();
