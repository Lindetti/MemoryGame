import { Routes, Route } from "react-router-dom";
import './App.scss'
import StartGame from "./Pages/StartPage/StartGame";
import EasyPage from "./Pages/EasyPage/Easy";
import MediumPage from "./Pages/MediumPage/Medium";
import HardPage from "./Pages/HardPage/Hard";
import GameEnd from "./Pages/GameEndPage/GameEnd";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="wrapper">
       <Routes>
       <Route path="/" element={<StartGame />} />
       <Route path="/easy" element={<EasyPage />} />
       <Route path="/medium" element={<MediumPage />} />
       <Route path="/hard" element={<HardPage />} />
       <Route path="/end" element={<GameEnd />} />
       </Routes>
   <Footer/>
    </div>
  )
}

export default App
