import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  //The 'term' does not require require props because it is passed up from child to parent.
  onTermSubmit = (term) => {
    //Below, 'youtube' is an instance of axios, so we can perform a get query on it. Moreover, we have appended 'search' and a few more params here, which add on to the previous ones defined in youtube.js
    youtube.get("/search", {
      params: {
        q: term,
      },
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
