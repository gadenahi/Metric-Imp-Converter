/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '0.35kg'
      assert.equal(convertHandler.getNum(input),0.35);
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '7/20lbs'
      assert.equal(convertHandler.getNum(input),0.35);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '7/20/0.35mi'
      assert.equal(convertHandler.getNum(input), 1)
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '0..35km'
      assert.equal(convertHandler.getNum(input), undefined)      
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'aaa'
      assert.equal(convertHandler.getNum(input), undefined)
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele), ele.toLowerCase())
        
        //assert
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = '1del'
        assert.equal(convertHandler.getUnit(input), undefined)      
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect_i = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      var expect_r = ['liters','gallons','kilometers','miles','kilograms','pounds'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getString(1, ele, 1.00000, ''), 1 +" "+ expect_i[i] + " converts to " + "1.00000" + " " + expect_r[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [18, 'l'];
      var expected = 4.7551;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance      
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [1, 'mi'];
      var expected = 0.62137;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance      
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [1, 'km'];
      var expected = 1.60934;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance      
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [1, 'lbs'];
      var expected = 0.45359;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance      
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [1, 'kg'];
      var expected = 2.20462;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance      
      done();
    });
    
  });

});