import React from "react";

function MoveButton({ id, nonArchive }) {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => nonArchive(id)}
    >
      Pindahkan
    </button>
  );
}

export default MoveButton;
