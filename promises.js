const { myPromise } = require('./myPromise');
console.log("\n***Start of User Thread ***");

// Handle the promise chain
myPromise(1).
  then(res => {
    console.log("then: ", res);
    return myPromise(2);
  })
  .then(res => {
    console.log("then: ", res);
    return myPromise(3);
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