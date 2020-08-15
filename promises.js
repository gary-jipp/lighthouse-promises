console.log("\n***Start of my Code ***");

// function that returns a promise
const myPromise = function (value) {
  const promise = Promise.resolve("Promise Complete: " + value);
  return promise;
};

// use our promise-based function
promise = myPromise(1);

// Handle the promise
promise
  .then(res => {
    console.log("then:", res);
    return myPromise(2); // Start a new one
  })
  .then(res => {
    console.log("then:", res);
    return myPromise(3); // Start another
  })
  .then(res => {
    console.log("then:", res); // what does this callback return?
    return 5;
  })
  .then(res => {
    console.log("then:", res); // what does this callback return?
  })
  .then(res => {
    console.log("then:", res); // Wait, what's happening here?
  });

console.log("\n***End of my Code ***\n");
