console.log("\n***Start of my Code ***");

const orderPizza = function (value) {
  const promise = Promise.resolve("Your Pizza is Ready: " + value);
  return promise;
};

// the standard promise pattern
const promise = orderPizza(5);
promise.then();

// of course, we need to tell "then" whan to do when the proimise is done.
const callback = function (res) {
  console.log(res);
};

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
