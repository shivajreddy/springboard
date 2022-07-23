import React from "react";
// import Joke from "Components/Joke";
import Joke from "Joke";
import axios from "axios";
import "styles/JokeList.css";

class JokeList extends React.Component {
  // default props
  static defaultProps = {
    numJokesToGet: 10,
  };

  // constructor
  constructor(props) {
    super(props);
    this.getJokes = this.getJokes.bind(this);
  }

  state = {
    jokes: [],
    loadingStatus: true,
  };

  async getJokes() {
    const { numJokesToGet } = this.props;
    let j = [...this.state.jokes];
    let seenJokes = new Set();
    try {
      while (j.length < numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" },
        });
        let { status, ...jokeObj } = res.data;

        if (!seenJokes.has(jokeObj.id)) {
          seenJokes.add(jokeObj.id);
          j.push({ ...jokeObj, votes: 0 });
        } else {
          console.error("duplicate found!");
        }
      }
      // setJokes(j);
      this.setState({ jokes: j });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    if (this.state.jokes.length < this.props.numJokesToGet) {
      this.setState({ loadingStatus: false });
      return this.getJokes();
    }
  }

  componentDidUpdate() {
    if (this.state.jokes.length < this.props.numJokesToGet) {
      return this.getJokes();
    }
  }

  // methods
  /* empty joke list and then call getJokes */
  generateNewJokes = () => {
    this.setState({ jokes: [], loadingStatus: true });
  };

  /* change vote for this id by delta (+1 or -1) */
  vote = (id, delta) => {
    const { jokes } = this.state;
    const newJokes = jokes.map((j) =>
      j.id === id ? { ...j, votes: j.votes + delta } : j
    );
    this.setState({ jokes: newJokes });
  };

  resetVotes = () => {
    this.setState((st) => ({
      jokes: st.jokes.map((joke) => ({ ...joke, votes: 0 })),
    }));
  };

  // Render Method
  render() {
    if (this.state.jokes.length) {
      let sortedJokes = [...this.state.jokes].sort((a, b) => b.votes - a.votes);
      return (
        <div className="JokeList">
          <button className="JokeList-getmore" onClick={this.generateNewJokes}>
            Get New Jokes
          </button>

          <button onClick={this.resetVotes}>Reset Votes</button>

          {sortedJokes.map((j) => (
            <Joke
              text={j.joke}
              key={j.id}
              id={j.id}
              votes={j.votes}
              vote={this.vote}
            />
          ))}
        </div>
      );
    }
    return <div>{this.state.loadingStatus && <h2>Loading...</h2>}</div>;
  }
}

export default JokeList;
