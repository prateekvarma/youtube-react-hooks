import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  //Below, the 'term' does not require require props because it is passed up from child to parent.
  onTermSubmit = async (term) => {
    //Below, 'youtube' is an instance of axios, so we can perform a get query on it. Moreover, we have appended 'search' and a few more params here, which add on to the previous ones defined in youtube.js
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect} //this is a prop
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
