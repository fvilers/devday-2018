// Functions are objects
const f1 = function() {};
f1.foo = 'Dev Day';
f1.foo;

// Or are they?
f1.name = 'fabian';
f1.name;

// What's the name? f2 or DevDayFunc?
const f2 = function DevDayFunc() {};
f2.name;

// Meta-meta-meta programming
const f3 = 'constructor';
f3[f3][f3]("console.log('Hello Dev Day!')")();
