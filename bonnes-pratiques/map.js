// Map
const map = new Map();
const s = Symbol();
map.set(s, 42);
map.set('name', 'Fabian');
map.get(s);

for (const [key, val] of map.entries()) {
  console.log(`${key.toString()} => ${val}`);
}
