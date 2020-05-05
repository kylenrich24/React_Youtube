import React, { Component } from "react";
import youtube from "../apis/youtube";

import Nav from "./Nav";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="ui container">
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="row">
              <div className="ml-5 ml-lg-0 col-lg-9">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="ml-5 ml-lg-0 col-lg-3">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
