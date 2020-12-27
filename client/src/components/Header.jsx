import React from "react";
import NoteIcon from '@material-ui/icons/Note';

function Header() {
  return (
    <header>
      <h1>
        <NoteIcon />
        Note
      </h1>
    </header>
  );
}

export default Header;