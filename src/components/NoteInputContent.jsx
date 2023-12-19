import React from "react";
import NoteInput from "./NoteInput";

function NoteInputContent({ addNote }) {
  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <NoteInput addNote={addNote} />
    </div>
  );
}

export default NoteInputContent;
