import logo from "./logo.svg";
import "./App.css";
import Game from "./components/Game/Game";
import Team from "./components/Team/Team";
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

const raccoons = {
  name: "Russiaville Raccoons",
  logoSrc:
    "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/raccoon.png",
};

const squirrels = {
  name: "Sheridan Squirrels",
  logoSrc:
    "https://raw.githubusercontent.com/p-mayor/davey-react-sports-lab-basic/master/assets/images/squirrel.png",
};

function App() {
  return (
    <div>
      <ScoreBoard />
      <Game squirrels={squirrels} raccoons={raccoons} />
    </div>
  );
}

export default App;
