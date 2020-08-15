const { Pool } = require("pg");

console.log("\n***End of User Thread ***\n");

const pool = new Pool({
  user: "vagrant",
  password: "123",
  host: "localhost",
  database: "bootcampx",
});

const query1 = "SELECT id, name FROM cohorts LIMIT 5";
const query2 = "SELECT id, name, cohort_id FROM students LIMIT 5;";

pool.query(query1)
  .then(res => {
    console.log(res.rows);
    return pool.query(query2)
  })
  .then(res => {
    console.log(res.rows);
  })
  .catch(err => console.log("query error:", err.routine))
  .finally(() => {
    console.log("finally.  Cleanup");
    pool.end();
  });

console.log("\n***End of User Thread ***\n");
