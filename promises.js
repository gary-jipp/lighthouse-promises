const axios = require("axios");
console.log("\n***Start of my Code ***");

const url1 = "https://api.kanye.rest/";
const url2 = "https://www.affirmations.dev/";
const url3 = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

const promise1 = axios.get(url1).catch(e => e); // what's this??
const promise2 = axios.get(url2).catch(e => e);
const promise3 = axios.get(url3).catch(e => e);
const results = {};

Promise.all([promise1, promise2, promise3])
  .then(res => {
    // Now we have to handle both situations (fulfill or reject)
    console.log("Kanye:", res[0].data ? res[0].data.quote : res[0]);
    console.log("Affirm:", res[1].data ? res[1].data.affirmation : res[1]);
    console.log("Ron:", res[2].data ? res[2].data[0] : res[2]);
  })
  // No promise will fire this catch.  But maybe something in the then() will
  .catch(e => console.log("catch:", e));

// Note: the new Promise.allSettled() function does something similar 

console.log("***End of my Code ***\n");
