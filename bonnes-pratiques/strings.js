// String interpolation
const here = 'Dev Day';
const year = 1009;

`Hello, ${here} ${year * 2}`;

// Custom string interpolation
function helloFixYear(_, here, year) {
  return `Hello, ${here} ${year * 2}`;
}
helloFixYear`Hello, ${here} ${year}`;
