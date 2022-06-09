import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //Below, is an 'event callback' function, so we're defining it as an arrow function , to perform an callback binding.
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  //Below, this name should match the prop in the parent component. So, we're sending data from child to parent.
  onFormSubmit = (event) => {
    event.preventDefault();
    
    //below, we're using props to access the 'onFormSubmit' function from the parent. So data os flowing from parent to child. And then finally using 'this.state.term' as parameters to pass data from child to parent.
    this.props.onFormSubmit(this.state.term)
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
