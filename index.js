const express = require("express");
const pool = require("./db");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/posts", async (req, res) => {
  const posts = await pool.query("SELECT * FROM posts;");
  res.send({ posts });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
