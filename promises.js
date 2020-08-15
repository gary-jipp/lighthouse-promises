
console.log("\n***Start of my Code ***");

// function that returns a promise
const myPromise = function (value) {
  const promise = Promise.resolve("Promise Complete: " + value);
  return promise;
};

// use our promise-based function
promise = myPromise(10);

// Handle the promise
promise.then(res => {

  console.log(res);

});


console.log("\n***End of my Code ***\n");