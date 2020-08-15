const { myPromise } = require('./myPromise');
console.log("\n***Start of User Thread ***");

// Handle the promise chain
let results = {};
myPromise(1).
  then(res => {
    results.res1 = res;
    console.log("then 1: ", res);
    return myPromise(2);
  })
  .then(res => {
    results.res2 = res;
    console.log("then 2: ", results);
    return myPromise(3);
  })
  .then(res => {
    results.res3 = res;
    console.log("then 3: ", results);
    return myPromise(4);
  })
  .catch(err => {
    console.log("catch:", err);
  })
  .finally(() => {
    console.log("finally");
  });


console.log("\n***End of User Thread ***\n");