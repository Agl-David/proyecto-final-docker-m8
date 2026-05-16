const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());

const connection = mysql.createConnection({
  host: "database",
  user: "root",
  password: "root123",
  database: "cvdb",
});

app.get("/cv", (req, res) => {
  connection.query("SELECT * FROM persona", (err, personaResult) => {
    if (err) {
      return res.status(500).json(err);
    }

    connection.query("SELECT * FROM formacion", (err, formacionResult) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        persona: personaResult[0],
        formacion: formacionResult,
      });
    });
  });
});

app.listen(4000, () => {
  console.log("Backend running on port 4000");
});