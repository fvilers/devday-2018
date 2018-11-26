const PI = 3.141593;
PI > 3.0;

let a = 42;

(function() {
  let a = 123;
  return 'function: ' + a;
})();

'outside: ' + a;
