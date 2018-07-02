(function () {
    'use strict';


    describe('Tests for finding duplicate numbers', function () {
        it('find one missing number', function () {
            var a = [1,2,3,4,5,6,7,7,8,9,10];
            var actual = DuplicateNumber(a);
            var expected = 7;
            expect(expected).toBe(actual);
        });
    });
})();