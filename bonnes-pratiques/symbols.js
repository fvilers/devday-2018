// Symbol
Symbol('foo');
Symbol('foo') === Symbol('foo');

// Global symbol
Symbol.for('app.foo') === Symbol.for('app.foo');
