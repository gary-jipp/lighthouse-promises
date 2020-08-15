
console.log("\n***Start of User Thread ***");

// function that returns a promise. Rejects bad values
const myPromise = function (value) {
  if (value < 0) {
    return Promise.reject("Bad Value!: " + value);
  }
  return Promise.resolve("Promise Complete: " + value);
};

// Handle the promise chain
myPromise(1).
  then(res => {
    console.log(res);
    return myPromise(2);
  })
  .then(res => {
    console.log(res);
    return myPromise(-3);
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally");
  });


console.log("\n***End of User Thread ***\n");