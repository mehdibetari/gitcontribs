const chai = require('chai');
const expect = chai.expect;
const gitContribs = require('../gitContribs');
describe('[UNIT TESTS] ===> gitContribs', function() {
  describe(' -> mergeContribs()', function() {
    it('it should return empty object if empty object are passed in', function() {
      const gitC = new gitContribs();
      const first = {};
      const second = {};
      expect(gitC.mergeContribs(first, second)).to.be.an('object').that.is.empty;
    });
    it('it should return object with 3 attribute if two object are passed in with 1 shared attribute', function() {
      const gitC = new gitContribs();
      const first = {'2016-12-19': 1,'2016-12-20': 1,};
      const second = {'2016-12-21': 1,'2016-12-20': 1,};
      expect(gitC.mergeContribs(first, second)).to.be.an('object');
      expect(Object.keys(gitC.mergeContribs(first, second))).to.be.an('array').to.have.lengthOf(3);
      expect(gitC.mergeContribs(first, second)).to.be.an('object').to.eql({ '2016-12-19': 1, '2016-12-20': 2, '2016-12-21': 1 });
    });
  });
});

