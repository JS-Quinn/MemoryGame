import React, { Component } from 'react';
import characters from "./characters.json";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard";

class App extends Component {
  state = {
    topScore: 0,
    currentScore: 0,
    message: "Click one to begin!",
    characters: characters,
    clicked: []
  }

  randomize = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  catchIt = type => {
    const catchcharacters = this.state.clicked.indexOf(type);
    const playerCurrentScore = this.state.currentScore;
    console.log(playerCurrentScore);
    if (playerCurrentScore === 11) {
      this.setState({
        topScore: 12,
        currentScore: 0,
        characters: characters,
        message: "Congrats! You clicked them all!",
        clicked: []
      })
    }
    else if (catchcharacters !== -1) {
      this.setState({
        topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
        currentScore: 0,
        characters: characters,
        message: "You already picked that one. From the beginning!",
        clicked: []
      });
    }
    else {
      const caughtcharacters = type;
      console.log(caughtcharacters);
        this.setState({
          currentScore: this.state.currentScore + 1,
          characters: characters,
          message: "You guessed correctly!",
          clicked: this.state.clicked.concat(type)
        });
      }
    this.randomize(characters);
    console.log(this.state.currentScore);
  }

  render() {
    return (
      <Wrapper>
        <NavBar
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Title />
        {
          this.state.characters.map(characters => (
            <CharacterCard
              type={characters.type}
              image={characters.image}
              catchIt={this.catchIt}
              score={this.currentScore}
            />
          ))
        }
      </Wrapper>
    );
  }

}

export default App;


