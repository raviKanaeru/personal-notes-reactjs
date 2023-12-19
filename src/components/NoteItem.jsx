import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({
  id,
  title,
  createdAt,
  archived,
  body,
  onArchive,
  nonArchive,
  onDelete,
}) {
  return (
    <div className="note-item">
      <NoteItemContent
        id={id}
        createdAt={createdAt}
        title={title}
        body={body}
      />
      <NoteItemAction
        id={id}
        onArchive={onArchive}
        nonArchive={nonArchive}
        archived={archived}
        onDelete={onDelete}
      />
    </div>
  );
}

export default NoteItem;
