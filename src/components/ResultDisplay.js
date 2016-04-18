import React from 'react';

var ResultDisplay = React.createClass({
  render: function() {
    console.log("Rendering results display", this.props);

    var output = <h3>No results yet.</h3>
    if (this.props.results && this.props.results.length > 0) {
      output = this.props.results.map(x => <a href={x.url}>{x.name}</a>)
    }

    return (<div>
      <h1>Results go here!</h1>
      {output}
    </div>);
  }
})

export default ResultDisplay;
