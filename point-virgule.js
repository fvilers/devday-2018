// Variables declarations
let a = 1
    b = 1;

(function() {
  let a = 2
      b = 2;
})();

console.log(a)
console.log(b)

// Returning object
function laugh()
{
  return
  {
	haha: "ha!"
  };
}
console.log(laugh());