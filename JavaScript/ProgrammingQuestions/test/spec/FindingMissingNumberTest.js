(function () {
    'use strict';


    describe('Tests for finding missing numbers', function () {
        it('Simple missing number test', function () {
            var a = [1,2,3,4,5,6,8,9,10];
            var actual = basicsumming(a);
            var expected = 7;
            expect(expected).toBe(actual);
        });
        it('duplicate number sequence test', function() {
            var a = [1,2,3,7,5,6,6,4,9,10];
            var actual = duplicatenumbers(a);
            var expected = 8;
            expect(expected).toBe(actual);
        })
    });
})();
