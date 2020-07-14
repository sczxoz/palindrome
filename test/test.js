let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {
  // Phrase#palindrome
  describe("#palindrome", function() {

    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", function() {
      let mixedCasePalindrome = new Phrase("RecoNocer");
      assert(mixedCasePalindrome.palindrome());
    });

    it("should return true for a palindrome with punctuation");

  });
});