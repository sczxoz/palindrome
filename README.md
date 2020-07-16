# Phrase object (with palindrome detector)

This is a sample NPM module created by following the [*Learn Enough JavaScript to Be Dangerous*](https://www.learnenough.com/javascript-tutorial) tutorial by Michael Hartl.

The module can be used as follows:

`$ npm install --global scoetzee-palindrome`<br>
`$ vim test.js`<br>
`let Phrase = require("scoetzee-palindrome");`<br>
`let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");`<br>
`console.log(napoleonsLament.palindrome());`<br>
`$ node test.js`<br>
`true`
