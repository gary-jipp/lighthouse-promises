
console.log("\n***Start of User Thread ***");

// function that returns a promise
const myPromise = function (value) {
  const promise = Promise.resolve("Promise Complete: " + 10);
  return promise;
};

// use our promise-based function
promise = myPromise(10);

// Handle the promise
promise.then(res => {

  console.log(res);

});


console.log("\n***End of User Thread ***\n");