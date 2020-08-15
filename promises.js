console.log("\n***Start of my Code ***");

// Create a resolved promise - resolves to a String
const promise = Promise.resolve("Promise Complete");

// The most basic of promise handling
promise.then(res => {
  console.log(res);
});

console.log("\n***End of my Code ***\n");
