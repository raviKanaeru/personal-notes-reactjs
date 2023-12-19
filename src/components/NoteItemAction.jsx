import React from "react";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import MoveButton from "./MoveButton";

function NoteItemAction({ id, archived, onDelete, onArchive, nonArchive }) {
  return (
    <div className="note-item__action">
      <DeleteButton id={id} onDelete={onDelete} />
      {archived === false ? (
        <ArchiveButton id={id} onArchive={onArchive} />
      ) : (
        <MoveButton id={id} nonArchive={nonArchive} />
      )}
    </div>
  );
}

export default NoteItemAction;
