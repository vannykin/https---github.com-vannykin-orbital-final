const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// TO SAFEKEEP DB USERNAMES AND PASSWORDS
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors(
  {
    origin: ["https://orbital-muddlekillers.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
  }
));

mongoose
  .connect(process.env.URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log("MongoDB connected"));

const Course = require("./models/Course");

// TO RETURN ALL COURSES IN DATABASE AS AN ARRAY
app.get("/courses/all", async (req, res) => {
  // const courses = await Course.find({ code: 'CS2030S' });
  const courses = [ { code: 'CS2030S', _id: ObjectId(96154488), name: "testing1", term: "1" }];
  res.json(courses);
});

app.get("/", async (req, res) => {
  res.json({ status: "api is working" });
});

app.listen(3001, () => console.log("Server started on port 3001"));