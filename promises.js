const axios = require("axios");

const isError = function (res) {
  if (!res.data) {
    return res.response.status + ": " + res.response.statusText;
  }
};

console.log("\n***Start of User Thread ***\n");
const url1 = "https://api.kanye.rest/";
const url2 = "https://www.affirmations.dev/";
const url3 = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

const promise1 = axios.get(url1).catch(e => e);
const promise2 = axios.get(url2).catch(e => e);
const promise3 = axios.get(url3).catch(e => e);

Promise.all([promise1, promise2, promise3])
  .then(res => {
    console.log("Kanye:", isError(res[0]) || res[0].data.quote);
    console.log("Affirm:", isError(res[1]) || res[1].data.affirmation);
    console.log("Ron:", isError(res[2]) || res[2].data[0]);
  })
  .catch(e => console.log(e.errno));

console.log("\n***End of User Thread ***\n");
