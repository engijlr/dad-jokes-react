import React, { Component } from "react";

class Joke extends Component {
  render() {
    return (
      <div>
        <button>Like</button>
        <button>Dont like</button>
        <p>{this.props.joke}</p>
      </div>
    );
  }
}

export default Joke;
