const express = require("express");
require("dotenv").config();
const db = require("./db/db");
const { Todo } = require("./modules/User");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api/todos", async (req, res) => {
  try {
    const todoObj = await Todo.find();
    return res.status(200).send({
      message: "todos",
      data: todoObj,
    });
  } catch (error) {
    return res.status(400).send("No file uploaded.");
  }
});

app.listen("3000", () => {
  console.log("SERVER IS WORKING");
});
