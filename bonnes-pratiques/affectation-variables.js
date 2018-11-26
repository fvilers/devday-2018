// Array matching
const list = [1, 2, 3];
const [a, , b] = list;

// Swap!
[b, a] = [a, b];

// Object matching
const obj = {
  firstName: 'Fabian',
  lastName: 'Vilers'
};
const { firstName, lastName } = obj;
firstName;
lastName;

// Object deep matching
const obj = {
  firstName: 'Fabian',
  lastName: 'Vilers',
  address: {
    street: 'Rue de Bon Conseil, 55 / 1'
  }
};
const {
  address: { street }
} = obj;
street;

// Parameter context matching
function add([a, b]) {
  return a + b;
}
add([1, 2]);

function greet({ firstName, lastName }) {
  return `Hello ${firstName} ${lastName}`;
}
greet({
  firstName: 'Fabian',
  lastName: 'Vilers'
});
