const axios = require("axios");
console.log("\n***Start of my Code ***");

const error = function (res) {
  if (!res.data) {
    return res.response.status + ": " + res.response.statusText;
  }
};

const url1 = "https://api.kanye.rest/";
const url2 = "https://www.affirmations.dev/";
const url3 = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

const promise1 = axios.get(url1).catch(e => e); // what's this??
const promise2 = axios.get(url2).catch(e => e);
const promise3 = axios.get(url3).catch(e => e);
const results={};

Promise.all([promise1, promise2, promise3])
  .then(res => {
    results.r1 = error(res[0]) || res[0].data.quote;
    results.r2 = error(res[1]) || res[1].data.affirmation;
    results.r3 = error(res[2]) || res[2].data[0];

    console.log("Kanye:", results.r1);
    console.log("Affirm:", results.r2);
    console.log("Ron:", results.r3);
  })
  .catch(e => console.log("catch:", e)); // maybe some other error?

console.log("***End of my Code ***\n");
