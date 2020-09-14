
console.log("\n***Start of my Code ***");

// function that returns a promise
const orderPizza = function (value) {
  const promise = Promise.resolve("Your Pizza is Ready: $" + value);
  return promise;
};

// use our promise-based function
promise = orderPizza(10);

// Handle the promise
promise.then(res => {
  console.log(res);
});

// by the way, what does the "then" return?
const returnFromThen = promise.then(res => {
  console.log(res);
});

console.log(returnFromThen);

console.log("\n***End of my Code ***\n");