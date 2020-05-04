import React, { Component } from "react";

import Nav from "./Nav";
import SearchBar from "./SearchBar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="ui container">
          <SearchBar />
        </div>
      </div>
    );
  }
}
