require("dotenv").config();
const express  = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// Change server to 9000 for Heroku
const PORT = process.env.PORT || 9000;
 
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Establish DB connection
// Level 2
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_KEY = process.env.DB_KEY;
const mongoAtlas ="mongodb+srv://"+DB_USER+":"+DB_KEY+"@"+DB_HOST+"/noteDB";
const mongoLocal ="mongodb://localhost:27017/noteDB";

mongoose.connect(mongoAtlas || mongoLocal, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  connectTimeoutMS: 10000
});

// Create note schema
const noteSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: [true, "Bitte Namen eingeben"],
        minlength: 3,
        maxlength: 50,
        trim: true,
        unique: true
      },
      content: {
        type: String,
        required: [true, "Bitte Inhalt eingeben"],
        minlength: 5,
        maxlength: 255,
        trim: true
      }
    },
    { collection: "notes" }
  );

// Create single model
const Note = mongoose.model("Note", noteSchema);
 
// Route to get all notes
app.get("/api/notes", (req, res) => {
    Note.find({}, function(err, noteDB) {
        if (err) {
          res.status(400).json({"error": err});
        } else {
          res.json(noteDB);
        }
      });
})

//Route to delete a note
app.post("/api/note/delete", (req, res) => {
    const newNote = new Note(req.body);
    //console.log("Gelöschte Notiz(server.js): " + newNote);
  
      Note.deleteOne({ _id: newNote.id }, function (err) {
        if (err) {
          res.status(400).json({"error": err});
        } else {
          res.status(200).json("Successfully deleted note.");
        }
      });
  });

app.listen(PORT, function() {
    console.log("Server started on port: " + PORT);
});