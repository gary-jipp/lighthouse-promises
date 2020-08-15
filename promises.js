
console.log("\n***Start of User Thread ***");

// function that returns a promise
const myPromise = function (value) {
  const promise = Promise.resolve("Promise Complete: " + value);
  return promise;
};

// use our promise-based function
promise = myPromise(1);

// Handle the promise
promise.then(res => {
  console.log(res);
  return myPromise(2);
})
  .then(res => {
    console.log(res);
    return myPromise(3);
  })
  .then(res => {
    console.log(res);
  })
  .then(res => {
    console.log(res);
  });


console.log("\n***End of User Thread ***\n");