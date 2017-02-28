// Haalt het programma op dat nodig is om de test uit te voeren.
var expect    = require("chai").expect;
// Geeft aan waar het bestand zich bevind dat getest moet worden.
var converter = require("../app/centimeterAndInch");

describe("Centimeter and Inch Converter", function() {
  describe("Centimeter to Inch conversion", function() {
    it("converts some random integers", function() {
      // Hier worden variabelen gekopeld aan de returns van de functies
      var testCaseCentimeter1   = converter.centimeterToInch(1);
      var testCaseCentimeter2 = converter.centimeterToInch(5);
      var testCaseCentimeter3  = converter.centimeterToInch(33);

      // Hier worden de antwoorden vergeleken.
      expect(testCaseCentimeter1).to.equal(0.393700787);
      expect(testCaseCentimeter2).to.equal(1.968503935);
      expect(testCaseCentimeter3).to.equal(12.992125971);
    });
  });

  describe("Inch to Centimeter conversion", function() {
    it("converts some random integers", function() {
      // Hier worden variabelen gekopeld aan de returns van de functies
      var testCaseInch1   = converter.inchToCentimeter(1);
      var testCaseInch2 = converter.inchToCentimeter(5);
      var testCaseInch3  = converter.inchToCentimeter(33);

      // Hier worden de antwoorden vergeleken.
      expect(testCaseInch1).to.equal(2.54);
      expect(testCaseInch2).to.equal(12.7);
      expect(testCaseInch3).to.equal(83.82000000000001);
    });
  });
});