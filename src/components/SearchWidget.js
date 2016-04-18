import React from 'react';
import axios from 'axios';
import ResultDisplay from './ResultDisplay';

var SearchWidget = React.createClass({
  getInitialState: function() {
    return {result: []};
  },

  doSearch: function() {
    console.log("doing search!");
    var searchTerm = this.refs.searchBox.value;

    axios.get('/test?search=' + searchTerm)
    .then((response) => {
      console.log("search response:", response);
      this.setState({result: response.data})
    })
    .catch((err) => {
      console.log("search error:", err);
    });
  },

  render: function() {
    return (<div>
      <input ref='searchBox' placeholder='search' />
      <input type="button" onClick={this.doSearch} value="Search"/>
      <ResultDisplay results={this.state.result}/>
    </div>);
  }
})

export default SearchWidget;
