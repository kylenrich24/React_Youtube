import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // call callback from parent component
  };

  render() {
    return (
      <div style={{ marginTop: "10px" }} className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="">Video Search</label>
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type="text"
              style={{ width: "980px", marginRight: "5px" }}
            />
            <button
              className="btn btn-outline-danger"
              type="submit"
              onSubmit={this.onFormSubmit}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}
