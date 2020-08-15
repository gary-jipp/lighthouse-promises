const axios = require("axios");

const error = function (res) {
  if (!res.data) {
    return res.response.status + ": " + res.response.statusText;
  }
};

console.log("\n***Start of User Thread ***\n");
const url1 = "https://api.kanye.rest/";
const url2 = "https://www.affirmations.dev/";
const url3 = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

const promise1 = axios.get(url1).catch(e => e); // what's this??
const promise2 = axios.get(url2).catch(e => e);
const promise3 = axios.get(url3).catch(e => e);

Promise.all([promise1, promise2, promise3])
  .then(res => {
    console.log("Kanye:", error(res[0]) || res[0].data.quote);
    console.log("Affirm:", error(res[1]) || res[1].data.affirmation);
    console.log("Ron:", error(res[2]) || res[2].data[0]);
  }); // no catch needed ?

console.log("\n***End of User Thread ***\n");
