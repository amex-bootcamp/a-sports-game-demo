import React, { Component } from "react";
import "./Team.css";

export default class Team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shots: 0,
      score: 0,
    };
  }

  handleShoot = () => {
    // make the shot 50% of the time only
    // access the current score and current shots
    this.setState((currentState) => {
      return {
        // also need to increment the shots by 1
        shots: currentState.shots + 1,
        // if the shot is successful, increment the score by 1
        score:
          Math.random() > 0.5 ? currentState.score + 1 : currentState.score,
      };
    });
  };

  render() {
    return (
      <div className="Team">
        <h2>{this.props.name}</h2>
        <img src={this.props.logoSrc} alt={this.props.name} />
        <p>Shots: {this.state.shots}</p>
        <p>Score: {this.state.score}</p>
        <p>Shooting %: 0%</p>
        <button onClick={this.handleShoot}>Shoot!</button>
      </div>
    );
  }
}
