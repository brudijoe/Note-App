import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  const [isZoomedIn, setZoomedIn] = useState(false);
  //console.log(isZoomedIn);

  function handleFocus() {
    setZoomedIn(true);
  }

  return (
    <div>
      <form className="create-note">
        {isZoomedIn === true && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Titel..."
          />
        )}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Notiz erstellen..."
          rows={isZoomedIn ? 3 : 1}
          // geht auch
          // rows={isZoomedIn ? "3" : "1"}
          onFocus={handleFocus}
        />
        <Zoom in={isZoomedIn}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
