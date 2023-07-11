const express = require("express");
const app = express();
const db = require("./models");
const { User } = db;

app.get("/select", (req, res) => {
  User.findAll().then((users) => {
    res.send(users)
  })
});

app.get("/insert", async (req, res) => {
  User.create({
    firstName: "Bernardo",
    Age: 20,
  }).catch((err) => {
    if (err) {
      console.log(err);
    }
  });
});

app.delete("/delete", (req, res) => {
  res.send("delete");
});

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
