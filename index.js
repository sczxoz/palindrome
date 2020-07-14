// Adds `reverse` to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function blank() {
  return this.split(/\s+/).join("") === "";
}

Array.prototype.last = function last() {
  return this.slice(-1);
}
let a = [1, 45, 65, 83, 3, 24];
console.log(a.last()[0]);



// Returns true for a palindrome, false otherwise.
function palindrome(string) {
  let processedContent = string.toLowerCase();
  return processedContent === reverse(processedContent);
}

// Defines a Phrase object.
function Phrase(content) {

  this.content = content;

  // Returns lower-case version of input string.
  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns all upper-case version of input string.
  this.louder = function louder() {
    return this.content.toUpperCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

