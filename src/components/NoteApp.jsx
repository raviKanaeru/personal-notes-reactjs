import React from "react";
import { getInitialData } from "../utils";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.originNotes = getInitialData();
    this.state = {
      notes: this.originNotes,
      keyword: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onNonArchiveHandler = this.onNonArchiveHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: String(new Date()),
          },
        ],
      };
    });
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onSearchNoteHandler({ search }) {
    this.setState({ keyword: search });
  }

  onArchiveHandler(id) {
    const updatedNotes = [...this.state.notes];
    const index = updatedNotes.findIndex((note) => note.id === id);
    if (index !== -1) {
      updatedNotes[index] = {
        ...updatedNotes[index],
        archived: true,
      };
    }
    this.setState({ notes: updatedNotes });
  }

  onNonArchiveHandler(id) {
    const updatedNotes = [...this.state.notes];
    const index = updatedNotes.findIndex((note) => note.id === id);
    if (index !== -1) {
      updatedNotes[index] = {
        ...updatedNotes[index],
        archived: false,
      };
    }
    this.setState({ notes: updatedNotes });
  }

  render() {
    const filterNotes =
      this.state.keyword !== ""
        ? this.state.notes.filter((note) =>
            note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
          )
        : this.state.notes;
    return (
      <>
        <NoteHeader searchNote={this.onSearchNoteHandler} />
        <NoteBody
          notes={filterNotes}
          onDelete={this.onDeleteNoteHandler}
          addNote={this.onAddNoteHandler}
          onArchive={this.onArchiveHandler}
          nonArchive={this.onNonArchiveHandler}
        />
      </>
    );
  }
}

export default NoteApp;
