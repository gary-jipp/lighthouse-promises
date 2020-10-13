console.log("\n***Start of my Code ***");

// function that returns a promise
const myPromise = function (value) {
  const promise = Promise.resolve("Promise Complete: " + value);
  return promise;
};

// Callback Function to pass to then()
const callback = function (res) {
  console.log(res);
};

// Lets see what my promise has to say
const promise = myPromise(0);
promise.then(callback);

/**
 * Of course, we seldom use named callback functions
 * We use anonymous arrow function
 * Lets ask the same promise for its results again.
 */
promise.then(res => {
  console.log(res);
});

console.log("***End of my Code ***\n");
