// Set
const set = new Set();
set.add('hello');
set.add('goodbye');
set.add('hello');
set.has('hello');

for (const key of set.values()) {
  console.log(key);
}
