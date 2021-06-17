import React from "react";

export default function ScoreBoard(props) {
  return (
    <section>
      <div>
        <h3>VISITORS</h3>
        <h3>{props.visiting.score}</h3>
      </div>

      <h3>SCOREBOARD</h3>

      <div>
        <h3>HOME</h3>
        <h3>{props.home.score}</h3>
      </div>
    </section>
  );
}
