import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/notes")
      .then((res) => setNotes(res.data))
      .catch((err) => console.log(err));
  }, []);
  // console.log("Notes-Array: " + JSON.stringify(notes));

  function addNote(newNote) {
    axios
      .post("/api/note/add", newNote)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    const deletedNote = notes[id];
    axios
      .post("/api/note/delete", deletedNote)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
