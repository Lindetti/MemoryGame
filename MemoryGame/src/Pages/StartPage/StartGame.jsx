import './StartGame.scss'
const StartGame = () => {
    return (
        <div className="startpage-wrapper">
          <h1>Monstrous Memory</h1>
          <div className="start-imageDiv"></div>
          <div className="difficulty-levels">
            <button>Easy</button>
            <button>Medium</button>
            <button>Hard</button>
          </div>
          <div className="playDiv">
            <button>Play</button>
          </div>
        </div>
    )
}

export default StartGame;