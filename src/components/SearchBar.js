import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div style={{ marginTop: "10px" }} className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="row  ui form">
          <div className="field ml-4 ml-sm-0  col-sm-10 col-lg-11 ">
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type="text"
            />
          </div>
          <button
            className="ml-4 ml-sm-0 col-sm-2 col-lg-1 btn btn-outline-danger "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
