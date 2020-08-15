const { myPromise } = require("./myPromise");
console.log("\n***Start of my Code ***");

// Handle the promise chain
myPromise(1)
  .then(res => {
    console.log("then 1: ", res);
    return myPromise(2);
  })
  .then(res => {
    console.log("then 2: ", res);
    return myPromise(3);
  })
  .then(res => {
    console.log("then 3: ", res);
  })
  .catch(err => console.log("catch:", err))
  .finally(() => console.log("finally"));

console.log("\n***End of my Code ***\n");
