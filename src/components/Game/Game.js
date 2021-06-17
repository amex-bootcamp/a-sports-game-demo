import React, { Component } from "react";
import Team from "../Team/Team";
import ScoreBoard from "../ScoreBoard/ScoreBoard";

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resetCount: 0,
      home: {
        shots: 0,
        score: 0,
      },
      visiting: {
        shots: 0,
        score: 0,
      },
    };
  }

  handleVisitingTeamShoot = () => {
    this.setState((currentState) => {
      return {
        visiting: {
          shots: currentState.visiting.shots + 1,
          score:
            Math.random() > 0.5
              ? currentState.visiting.score + 1
              : currentState.visiting.score,
        },
      };
    });
  };

  handleHomeTeamShoot = () => {
    this.setState((currentState) => {
      return {
        home: {
          shots: currentState.home.shots + 1,
          score:
            Math.random() > 0.5
              ? currentState.home.score + 1
              : currentState.home.score,
        },
      };
    });
  };

  handleReset = () => {
    this.setState((currentState) => {
      return {
        resetCount: currentState.resetCount + 1,
        home: {
          shots: 0,
          score: 0,
        },
        visiting: {
          shots: 0,
          score: 0,
        },
      };
    });
  };

  render() {
    return (
      <div>
        <ScoreBoard visiting={this.state.visiting} home={this.state.home} />
        <Team
          name={this.props.visitingTeam.name}
          logoSrc={this.props.visitingTeam.logoSrc}
          stats={this.state.visiting}
          handleShoot={this.handleVisitingTeamShoot}
        />
        <div>
          <p>Resets: {this.state.resetCount}</p>
          <button onClick={this.handleReset}>Reset Game</button>
        </div>
        <Team
          name={this.props.homeTeam.name}
          logoSrc={this.props.homeTeam.logoSrc}
          stats={this.state.home}
          handleShoot={this.handleHomeTeamShoot}
        />
      </div>
    );
  }
}
