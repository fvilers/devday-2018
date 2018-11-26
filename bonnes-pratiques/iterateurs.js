const fibonacci = {
  [Symbol.iterator]() {
    let previous = 0;
    let current = 1;

    return {
      next() {
        [previous, current] = [current, previous + current];
        return { done: false, value: current };
      }
    };
  }
};

for (const n of fibonacci) {
  if (n > 1000) break;
  console.log(n);
}
