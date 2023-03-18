const express = require("express");
const app = express();
const connection = require("./config");
const todo = require("./routes/Todo");
// app.use(cors());
require("dotenv").config();
app.use(express.json());

// users
app.use("/todo", todo);

// running or connecting the mongoose || MongoDB
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (err) {
    console.log("Something went wrong ");
    console.log(err);
  }
  console.log(`port is running on ${process.env.port}`);
});
