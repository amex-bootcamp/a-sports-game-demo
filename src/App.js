import logo from "./logo.svg";
import "./App.css";
import Game from "./components/Game/Game";
import Team from "./components/Team/Team";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

function App() {
  return (
    <div>
      <Game />
      <Team />
      <ScoreBoard />
    </div>
  );
}

export default App;
