import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };

    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    event.preventDefault();
    const searchTerm = event.target.value;
    this.setState({ search: searchTerm }, () => {
      this.props.searchNote({ search: searchTerm });
    });
  }

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari catatan ..."
          value={this.state.search}
          onChange={this.onSearchChangeEventHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;
