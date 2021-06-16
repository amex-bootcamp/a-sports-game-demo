import React, { Component } from "react";

export default class Team extends Component {
  render() {
    return (
      <div>
        <h2>Squirrel</h2>
        <img
          src="https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/raccoon.png"
          alt=""
        />
        <p>Shots: 0</p>
        <p>Score: 0</p>
        <p>Shooting %: 0%</p>
        <button>Shoot!</button>
      </div>
    );
  }
}
