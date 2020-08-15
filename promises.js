const { Pool } = require("pg");

console.log("\n***Start of my Code ***");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

const query = "SELECT id, name FROM cohorts LIMIT 5";
const promise = pool.query(query);

promise
  .then(res => {
    console.log(res.rows);
  })
  .catch(err => console.log("query error:", err.routine))
  .finally(() => pool.end());
// without this, program does not exit cleanly

console.log("***End of my Code ***\n");
