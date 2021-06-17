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

  render() {
    return (
      <div>
        <ScoreBoard />
        <Team
          name={this.props.visitingTeam.name}
          logoSrc={this.props.visitingTeam.logoSrc}
        />
        <div>
          <p>Resets: 0</p>
          <button>Reset Game</button>
        </div>
        <Team
          name={this.props.homeTeam.name}
          logoSrc={this.props.homeTeam.logoSrc}
        />
      </div>
    );
  }
}
