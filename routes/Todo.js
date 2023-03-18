const express = require("express");
const todo = express.Router();
todo.use(express.json());
const { TodoModel } = require("../model/todo.model");
require("dotenv").config();

todo.get("/", async (req, res) => {
  let query = req.query;
  let data = await TodoModel.find(query);
  res.status(200).send(data);
});

// single Todo
todo.get("/:userId", async (req, res) => {
  let { userId } = req.params;
  let data = await TodoModel.find({ _id: userId });
  res.status(200).send(data);
});

// adding Todo
todo.post("/add", async (req, res) => {
  const payload = req.body;
  const user = new TodoModel(payload);
  await user.save();
  res.status(200).send({ msg: "New user has been added" });
});

// Deleting Todo
todo.delete("/delete/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    await TodoModel.findByIdAndDelete({ _id: userId });
    res.status(200).send({ msg: "New user has been added" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

// Updating Todo

todo.patch("/update/:userId", async (req, res) => {
  const { userId } = req.params;
  const payload = req.body;
  try {
    await TodoModel.findByIdAndUpdate({ _id: userId }, payload);
    res.status(200).send({ msg: "The user has been updated" });
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

module.exports = todo;
