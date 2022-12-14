const router = require("express").Router();
// const { json } = require("express");
const fs = require("fs");

router.get("/api/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync(__dirname + "/../db/db.json"));

  res.json(notes);
});

//Gets the user inputs & pushes them to json file
router.post("/api/notes", (req, res) => {
  const notes = JSON.parse(fs.readFileSync(__dirname + "/../db/db.json"));

  notes.push({
    id: notes.length + 1,
    ...req.body,
  });
  fs.writeFileSync(__dirname + "/../db/db.json", JSON.stringify(notes));

  res.json(notes);
});

//Deletes the notes based on it ID
router.delete("/api/notes/:id", (req, res) => {
  const notes = JSON.parse(fs.readFileSync(__dirname + "/../db/db.json"));

  //   console.log(req.params.id);

  const newNote = notes.filter((note) => {
    if (note.id == req.params.id) {
      return false;
    }
    return true;
  });
  fs.writeFileSync(__dirname + "/../db/db.json", JSON.stringify(newNote));
  res.json(newNote);
});

module.exports = router;
