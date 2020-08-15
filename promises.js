const { Pool } = require("pg");

console.log("\n***Start of my Code ***");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

const query1 = "SELECT id, name FROM cohorts LIMIT 5";
const query2 = "SELECT id, name, cohort_id FROM students LIMIT 5;";

// An object to save my stuff, if needed
const results = {};

pool
  .query(query1)
  .then(res => {
    console.log(res.rows);
    results.r1 = res.rows;
    return pool.query(query2);
  })
  .then(res => {
    console.log(res.rows);
    results.r2 = res.rows;
  })
  .catch(err => console.log("query error:", err.routine))
  .finally(() => {
    pool.end();
    console.log(results);
  });

console.log("***End of my Code ***\n");
