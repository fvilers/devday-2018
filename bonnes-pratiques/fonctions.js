// Expression bodies: find odd numbers
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(n => n % 2);

// Statement bodies: print double of numbers
[0, 1, 2, 3, 4].forEach(n => {
  console.log(n * 2);
});

// Lexical this: current context is preserved
(function() {
  this.answer = 42;

  setTimeout(function() {
    console.log('first attempt: ' + this.answer);
  });
  setTimeout(() => {
    console.log('second attempt: ' + this.answer);
  });
})();

// Default parameter values
function add(a, b, c = 3) {
  return a + b + c;
}
add(1, 2) === 6;

// Rest operator
function addMore(a, b, ...c) {
  return a + b + c.length;
}
addMore(1, 2, 'hello', false, 9) === 6;
