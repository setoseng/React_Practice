var expect = require('chai').expect;
describe('Array', function() {
  describe('#indexOf()', function() {
    it('return -1 when value is not present', function() {
      expect(-1).to.equal([1,2,3].indexOf(4));
    });
    it('return index when value ispresent', function() {
      expect(0).to.equal([1,2,3].indexOf(1));
    });
  });
});
