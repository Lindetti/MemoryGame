import './StartGame.scss'
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const StartGame = () => {
const [level, setLevel] = useState("");
const [selectedLevel, setSelectedLevel] = useState({
  easy: "",
  medium: "",
  hard: ""
});



const handleLevel = (event) => {
  setLevel(event.target.value);
  setSelectedLevel(event.target.name)
}

    return (
        <div className="startpage-wrapper">
          <h1>Monstrous Memory</h1>
          <div className="start-imageDiv"></div>
          <div className="difficulty-levels">
            <button className={`levels ${selectedLevel === "easy" ? "btnBGcolor" : ""}`} name="easy" value="easy" onClick={handleLevel}>Easy</button>
            <button className={`levels ${selectedLevel === "medium" ? "btnBGcolor" : ""}`} name="medium" value="medium" onClick={handleLevel}>Medium</button>
            <button className={`levels ${selectedLevel === "hard" ? "btnBGcolor" : ""}`} name="hard" value="hard" onClick={handleLevel}>Hard</button>
          </div>
          <div className="playDiv">
          {level && <Link className="startBtn" to={`/${level}`}>Start Game</Link>}
          </div>
        </div>
    )
}

export default StartGame;