import React from "react";
import NoteItem from "./NoteItem";

function NotesList({ notes, onDelete, onArchive, nonArchive }) {
  return (
    <>
      {notes.length > 0 ? (
        <div className="notes-list">
          {notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              nonArchive={nonArchive}
              {...note}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </>
  );
}

export default NotesList;
