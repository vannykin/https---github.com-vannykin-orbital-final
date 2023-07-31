const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// TO SAFEKEEP DB USERNAMES AND PASSWORDS
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());

mongoose
  .connect(process.env.URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log("MongoDB connected"));

const Course = require("./models/Course");

// TO RETURN ALL COURSES IN DATABASE AS AN ARRAY
app.get("/courses/one", async (req, res) => {
  const courses = await Course.find({ term: "1"});
  res.json(courses);
});

app.get("/courses/two", async (req, res) => {
  const courses = await Course.find({ term: "2"});
  res.json("It works!");
});

app.get("/courses/three", async (req, res) => {
  const courses = await Course.find({ term: "3"});
  res.json(courses);
});

app.get("/courses/four", async (req, res) => {
  const courses = await Course.find({ term: "4"});
  res.json(courses);
});

app.get("/", async (req, res) => {
  res.json({ status: "api is working" });
});

app.listen(3001, () => console.log("Server started on port 3001"));