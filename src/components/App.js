import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onTermSubmit = (term) => {
    //below there is no need to use props to access the 'term' because it is passed up from the child to parent.
    console.log(term)
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
