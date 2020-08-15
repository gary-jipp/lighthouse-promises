const { myPromise } = require("./myPromise");
console.log("\n***Start of my Code ***");

// Save promise results here
const results = {};

myPromise(1)
  .then(res => {
    results.r1 = res;
    console.log("then 1: ", results);
    return myPromise(2);
  })
  .then(res => {
    results.r2 = res;
    console.log("then 2: ", results);
    return myPromise(3);
  })
  .then(res => {
    results.r3 = res;
    console.log("then 3: ", results);
    return myPromise(4);
  })
  .then(res => {
    results.r4 = res;
    console.log("then 4: ", results);
  })
  .catch(err => console.log("catch:", err))
  .finally(() => console.log("finally"));

console.log("\n***End of my Code ***\n");
