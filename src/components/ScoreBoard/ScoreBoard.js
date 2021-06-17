import React, { Component } from "react";

export default class ScoreBoard extends Component {
  render() {
    return (
      <section>
        <div>
          <h3>VISITORS</h3>
          <h3>{this.props.visiting.score}</h3>
        </div>

        <h3>SCOREBOARD</h3>

        <div>
          <h3>HOME</h3>
          <h3>{this.props.home.score}</h3>
        </div>
      </section>
    );
  }
}
