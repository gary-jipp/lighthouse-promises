const axios= require("axios");

console.log("\n***Start of User Thread ***\n");

const url = 'https://api.kanye.rest/';
const promise = axios.get(url);

promise
  .then(result => {
    console.log(result.data.quote);
  })
  .catch(e=>console.log(e.errno));


console.log("\n***End of User Thread ***\n");
