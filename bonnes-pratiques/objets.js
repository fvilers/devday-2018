// Property shorthand
const price = 42;
const quantity = 5;

({
  price,
  quantity
});

// Computed property names
const myProp = 'total';
({
  price,
  quantity,
  [myProp]: price * quantity
});

// Method properties
const math = {
  add(a, b) {
    return a + b;
  }
};
math.add(1, 2);
