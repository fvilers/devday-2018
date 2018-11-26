const fibonacci = {
  *[Symbol.iterator]() {
    let previous = 0;
    let current = 1;

    for (;;) {
      [previous, current] = [current, previous + current];
      yield current;
    }
  }
};

for (const n of fibonacci) {
  if (n > 1000) break;
  console.log(n);
}
