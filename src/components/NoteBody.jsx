import React from "react";
import NoteInputContent from "./NoteInputContent";
import NotesList from "./NotesList";

function NoteBody({ notes, onDelete, addNote, onArchive, nonArchive }) {
  return (
    <div className="note-app__body">
      <NoteInputContent addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <NotesList
        notes={notes.filter((note) => note.archived === false)}
        onDelete={onDelete}
        onArchive={onArchive}
      />
      <h2>Arsip</h2>
      <NotesList
        notes={notes.filter((note) => note.archived === true)}
        onDelete={onDelete}
        nonArchive={nonArchive}
      />
    </div>
  );
}

export default NoteBody;
