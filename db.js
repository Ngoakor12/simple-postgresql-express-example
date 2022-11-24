const { Pool } = require("pg");

// The secret connection string you copied earlier
const connectionString =
  "postgresql://postgres:dr75i6HaC0sDZDTjtLCt@containers-us-west-37.railway.app:6233/railway";

const pool = new Pool({
  connectionString,
});

module.exports = pool;
