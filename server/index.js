const express = require("express");
const cors = require("cors");
const app = express();
const students = [
  {
    name: "John",
    usn: "01",
  },
  {
    name: "abc",
    usn: "02",
  },
];

app.get("/student", cors(), (req, res, next) => {
  if (req.query.usn) {
    const student = students.find((student) => {
      if (student.usn == req.query.usn) {
        console.log(student);
        return student;
      }
    });
    res.send(student);
  } else {
    res.send("student not found");
  }
});

app.listen(3001);
