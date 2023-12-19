import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      maxTitleValue: 50,
    };
    this.currentValueTitle = 0;

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (
      event.target.value.length <= 50 &&
      this.currentValueTitle <= event.target.value.length
    ) {
      this.setState({ title: event.target.value }, () => {
        const remainingCharacters = this.state.maxTitleValue - 1;
        this.currentValueTitle = event.target.value.length;
        this.setState({ maxTitleValue: remainingCharacters });
      });
    } else if (
      event.target.value.length <= 50 &&
      this.currentValueTitle > event.target.value.length
    ) {
      this.setState({ title: event.target.value }, () => {
        const remainingCharacters = this.state.maxTitleValue + 1;
        this.currentValueTitle = event.target.value.length;
        this.setState({ maxTitleValue: remainingCharacters });
      });
    } else {
      return null;
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ title: "", body: "", maxTitleValue: 50 });
    this.currentValueTitle = 0;
  }

  render() {
    return (
      <form onSubmit={this.onSubmitEventHandler}>
        <p className="note-input__title__char-limit">
          Sisa karakter: {this.state.maxTitleValue}
        </p>
        <input
          type="text"
          placeholder="Ini adalah judul ..."
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          placeholder="Tuliskan catatan mu di sini ..."
          cols="30"
          rows="10"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default NoteInput;
