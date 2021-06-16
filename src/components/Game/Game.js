import React, { Component } from "react";
import Team from "../Team/Team";

export default class Game extends Component {
  render() {
    return (
      <div>
        <Team
          name={this.props.squirrels.name}
          logoSrc={this.props.squirrels.logoSrc}
        />
        <div>
          <p>Resets:</p>
          <button>Reset Game</button>
        </div>
        <Team
          name={this.props.raccoons.name}
          logoSrc={this.props.raccoons.logoSrc}
        />
      </div>
    );
  }
}
