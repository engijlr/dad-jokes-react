import React, { Component } from "react";
import Joke from "./Joke.js";
import axios from "axios";

class JokeList extends Component {
  static defaultProps = {
    numOfJokes: 10,
  };
  constructor(props) {
    super(props);
    this.state = { jokes: [] };
  }
  async componentDidMount() {
    let jokes = [];
    while (jokes.length < this.props.numOfJokes) {
      let res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      jokes.push(res.data.joke);
    }
    this.setState({ jokes: jokes });
  }
  render() {
    return (
      <div className="JokeList">
        <h1>Dad Jokes</h1>
        <div className="JokeList-jokes">
          {this.state.jokes.map((j) => (
            <Joke joke={j} />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
