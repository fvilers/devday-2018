// Without promise
function withoutPromise(ms, callback) {
  setTimeout(() => {
    callback();
  }, ms);
}
withoutPromise(2000, () => console.log('Without promise'));

// With promise
function withPromise(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
withPromise(2000).then(() => console.log('With promise'));

// Error in promise
function withErrorPromise(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject();
    }, ms);
  });
}
withErrorPromise(2000)
  .then(() => console.log('With promise (no error)'))
  .catch(() => console.log('With promise (with error)'));

// Multiple promise
Promise.all([
  withPromise(2000).then(() => console.log('With promise 1')),
  withPromise(200).then(() => console.log('With promise 2')),
  withPromise(1000).then(() => console.log('With promise 3'))
]).then(() => console.log('All promises are resolved'));
