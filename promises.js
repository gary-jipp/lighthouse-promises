
console.log("\n***Start of User Thread ***");

// Create a resolved promise - resolves to a String
const promise = Promise.resolve("Promise Complete");

// The most basic of promise handling
// promise.then(handler);
promise.then(res => {

  console.log(res);

});


console.log("\n***End of User Thread ***\n");