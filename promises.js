
console.log("\n***Start of User Thread ***");

// function that returns a promise. Rejects bad values
const myPromise = function (value) {
  if (value < 0) {
    return Promise.reject("Bad Value!: " + value);
  }
  return Promise.resolve(value);
};

// Handle the promise chain
myPromise(1).
  then(res => {
    console.log("then: ", res);
    return myPromise(2);
  })
  .then(res => {
    console.log("then: ", res);
    return myPromise(-3);
  })
  .then(res => {
    console.log("then: ", res);;
  })
  .catch(err => {
    console.log("catch:", err);
  })
  .finally(() => {
    console.log("finally");
  });


console.log("\n***End of User Thread ***\n");