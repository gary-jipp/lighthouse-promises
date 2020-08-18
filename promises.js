console.log("\n***Start of my Code ***");

// Create a resolved promise - resolves to a String
const promise = Promise.resolve("Promise Complete");

// Callback Function to pass to then()
const callback = function (res) {
  console.log(res);
};

// Lets see what my promise has to say
promise.then(callback);

// of course, we seldom use named callback functions
// We use anonymous arrow functions
promise.then(res => {
  console.log(res);
});

console.log("***End of my Code ***\n");
