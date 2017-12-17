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
    // it('it should return empty array if an Empty String input are passed in', function() {
    //   const packager = new gitContribs();
    //   expect(packager.prepareNumbers('')).to.be.an('array').that.is.empty;
    // });
    // it('it should return empty array if a Number are passed in input', function() {
    //   const packager = new gitContribs();
    //   expect(packager.prepareNumbers(123)).to.be.an('array').that.is.empty;
    // });
    // it('it should return empty array if a String without numbers [1-9] are passed in input', function() {
    //   const packager = new gitContribs();
    //   expect(packager.prepareNumbers('asdpoi000000-=+@#')).to.be.an('array').that.is.empty;
    // });
    // it('it should return an array if a String with numbers [1-9] and all others chars are passed in input', function() {
    //   const packager = new gitContribs();
    //   expect(packager.prepareNumbers('a12467234562134sdpoi0000042310-=+@42314#')).to.be.an('array').to.have.lengthOf(23);
    // });
    // it('it should return an array if a String with only numbers [1-9] are passed in input', function() {
    //   const packager = new gitContribs();
    //   expect(packager.prepareNumbers('163841689525773')).to.be.an('array').to.have.lengthOf(15);
    // });
  });
//   describe(' - Packager -> sortReverse()', function() {
//     let items = [1, 6, 3, 8, 4, 1, 6, 8, 9, 5, 2, 5, 7, 7, 3];  
//     it('it should return empty array if No Input are passed in', function() {
//       const packager = new XspeedIt();
//       expect(packager.sortReverse()).to.be.an('array').that.is.empty;
//     });
//     it('it should return empty array if an Empty String input are passed in', function() {
//       const packager = new XspeedIt();
//       expect(packager.sortReverse('')).to.be.an('array').that.is.empty;
//     });
//     it('it should return empty array if a String input are passed in', function() {
//       const packager = new XspeedIt();
//       expect(packager.sortReverse('123')).to.be.an('array').that.is.empty;
//     });
//     it('it should return empty array if a Number are passed in input', function() {
//       const packager = new XspeedIt();
//       expect(packager.sortReverse(123)).to.be.an('array').that.is.empty;
//     });
//     it('it should return array with same length if array is passed', function() {
//       const packager = new XspeedIt();
//       expect(packager.sortReverse(items)).to.be.an('array').to.have.lengthOf(15);
//     });
//     it('it should return a decreased ordoned array if array is passed', function() {
//       const packager = new XspeedIt();
//       expect(packager.sortReverse(items)).to.be.an('array').to.eql([9,8,8,7,7,6,6,5,5,4,3,3,2,1,1]);
//     });
//   });
//   describe(' - Packager -> searchItem()', function() {
//     const items = [1, 6, 3, 8, 4, 1, 6, 8, 9, 5, 2, 5, 7, 7, 3];
//     it('it should return Undefined if 0 is passed in first param', function() {
//       const packager = new XspeedIt();
//       expect(packager.searchItem(0, items)).to.eql(undefined);
//     });
//     it('it should return Undefined if String is passed in first param', function() {
//       const packager = new XspeedIt();
//       expect(packager.searchItem('0', items)).to.eql(undefined);
//     });
//     it('it should return Undefined if String is passed in second param', function() {
//       const packager = new XspeedIt();
//       expect(packager.searchItem(1, '091')).to.eql(undefined);
//     });
//     it('it should return Undefined if an Empty Array are passed in second param', function() {
//       const packager = new XspeedIt();
//       expect(packager.searchItem(1, [])).to.eql(undefined);
//     });
//     it('it should return the value of first param if value exist in array of second param passed in', function() {
//       const packager = new XspeedIt();
//       expect(packager.searchItem(9, items)).to.eql(9);
//       expect(items).to.be.an('array').to.have.lengthOf(14);
//     });
//     it('it should return the nearest lower value if value Does Not Exist in array of second param passed in', function() {
//       const packager = new XspeedIt();
//       let itemsPrime = [1, 6, 3, 8, 7];
//       expect(packager.searchItem(4, itemsPrime)).to.eql(3);
//       expect(itemsPrime).to.be.an('array').to.have.lengthOf(4);
//     });
//   });
//   describe(' - Packager -> fillBoxes()', function() {
//     const items = [8, 9, 5, 2, 5, 7, 1, 6, 3, 8, 4, 1, 6, 7, 3];
//     it('it should return false if No Input are passed in', function() {
//       const packager = new XspeedIt();
//       expect(packager.fillBoxes()).to.eql(false);
//     });
//     it('it should return false if an Empty String input are passed in', function() {
//       const packager = new XspeedIt();
//       expect(packager.fillBoxes('')).to.eql(false);
//     });
//     it('it should return false if a Number are passed in input', function() {
//       const packager = new XspeedIt();
//       expect(packager.fillBoxes(123)).to.eql(false);
//     });
//     it('it should return false if a String is passed in input', function() {
//       const packager = new XspeedIt();
//       expect(packager.fillBoxes('asdpoi000000-=+@#')).to.eql(false);
//     });
//     it('it should return true if a Array numbers [1-9] is passed in input', function() {
//       const packager = new XspeedIt();
//       expect(packager.fillBoxes(items)).to.eql(true);
//     });
//   });
//   describe(' - Packager -> getBoxes()', function() {
//     it('it should return empty array if No Input are passed in', function() {
//       const packager = new XspeedIt();
//       expect(packager.getBoxes()).to.be.an('array').that.is.empty;
//     });
//     it('it should return empty array if an Empty String input are passed in', function() {
//       const packager = new XspeedIt('');
//       expect(packager.getBoxes()).to.be.an('array').that.is.empty;
//     });
//     it('it should return empty array if a Number are passed in input', function() {
//       const packager = new XspeedIt(123);
//       expect(packager.getBoxes()).to.be.an('array').that.is.empty;
//     });
//     it('it should return empty array if a String without numbers [1-9] are passed in input', function() {
//       const packager = new XspeedIt('asdpoi000000-=+@#');
//       expect(packager.getBoxes()).to.be.an('array').that.is.empty;
//     });
//     it('it should return an array if a String with numbers [1-9] and all others chars are passed in input', function() {
//       const packager = new XspeedIt('a12467234562134sdpoi0000042310-=+@42314#');
//       expect(packager.getBoxes()).to.be.an('array').to.have.lengthOf(8);
//     });
//     it('it should return an array if a String with only numbers [1-9] are passed in input', function() {
//       const packager = new XspeedIt('163841689525773');
//       expect(packager.getBoxes()).to.be.an('array').to.have.lengthOf(8);
//     });
//   });
});

