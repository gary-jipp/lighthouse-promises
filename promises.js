const axios = require("axios");
console.log("\n***Start of my Code ***");

const url1 = "https://api.kanye.rest/";
const url2 = "https://www.affirmations.dev/";
const url3 = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

const promise1 = axios.get(url1);
const promise2 = axios.get(url2);
const promise3 = axios.get(url3);

Promise.all([promise1, promise2, promise3])
  .then(res => {
    console.log("Kanye:", res[0].data.quote);
    console.log("Affirm:", res[1].data.affirmation);
    console.log("Ron:", res[2].data[0]);
  })
  .catch(e => console.log(e.errno));

console.log("***End of my Code ***\n");
