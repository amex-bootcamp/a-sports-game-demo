import React, { Component } from "react";
import Team from "../Team/Team";

export default class Game extends Component {
  render() {
    return (
      <div>
        <Team
          animal={this.props.visitingTeam}
          // name={this.props.visitingTeam.name}
          // logoSrc={this.props.visitingTeam.logoSrc}
        />
        <div>
          <p>Resets:</p>
          <button>Reset Game</button>
        </div>
        <Team
          animal={this.props.homeTeam}
          // name={this.props.homeTeam.name}
          // logoSrc={this.props.homeTeam.logoSrc}
        />
      </div>
    );
  }
}
