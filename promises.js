console.log("\n***Start of my Code ***");

// function that returns a promise. Rejects bad values
const myPromise = function (value) {
  if (value < 0) {
    return Promise.reject("Bad Value!: " + value);
  }
  return Promise.resolve("Promise Complete: " + value);
};

// Handle the promise chain
myPromise(1)
  .then(res => {
    console.log("then:", res);
    return myPromise(2);
  })
  .then(res => {
    console.log("then:", res);
    return myPromise(-3);
  })
  .then(res => {
    console.log("then:", res);
  })
  .catch(err => {
    console.log("catch:", err);
    return err;
  })
  .then(res => {
    console.log("then:", res);  // we got the err value here
  })
  .finally(() => {
    console.log("finally");
  });

console.log("\n***End of my Code ***\n");
