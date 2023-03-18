const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    is_married: Boolean,
    city: String,
    language: String,
    phone: String,
    avatar: String,
    gender: String,
    gmail: String,
    password: String,
  },
  {
    versionKey: false,
  }
);

const TodoModel = mongoose.model("user", todoSchema);

module.exports = { TodoModel };
