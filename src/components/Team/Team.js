import React, { Component } from "react";
import "./Team.css";

export default class Team extends Component {
  handleShoot = () => {
    console.log("shoot!");
    this.props.handleShoot();
  };

  render() {
    // calculate the shooting % on each re-render
    const shotPercentage = Math.round(
      (this.props.stats.score / this.props.stats.shots) * 100
    );

    let shotPercentageElement;
    if (this.props.stats.shots > 0) {
      shotPercentageElement = (
        <div>
          <p>Shooting %: {shotPercentage}</p>
        </div>
      );
    }

    return (
      <div className="Team">
        <h2>{this.props.name}</h2>
        <img src={this.props.logoSrc} alt={this.props.name} />
        <p>Shots: {this.props.stats.shots}</p>
        <p>Score: {this.props.stats.score}</p>
        {shotPercentageElement}
        <button onClick={this.handleShoot}>Shoot!</button>
      </div>
    );
  }
}
