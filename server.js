const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes/api-routes"));

app.get("/notes", (req, res) => {
  res.sendFile(__dirname + "/public/notes.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
  console.log(`Express JS listening to http://localhost:${PORT}`);
});
