import { BrowserRouter, useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer.jsx";
import NewPlayerFor from "./components/NewPlayersForm";
import NAvBAr from "./components/NavBar";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div id="container">
        <h1>PUPPY BOWL</h1>

        {/* Create a Navbar with appropriate links to your different Routes */}
        <div id="navbar">
          <Link to="/AllPlayers.jsx">All Players</Link>
          <Link to="/SinglePlayer.jsx">Single Player</Link>
          <Link to="/NewPLayerFormContainer.jsx">Player Form</Link>
        </div>
        {/* replace it with the Routes component */}
        <div id="main-section"></div>
        <div>
          <Routes>
            <Route path="/" element={<AllPlayers />} />
            <Route
              path="/allplayers/:singleplayersform"
              element={<newPlayerFormContainer />}
            />
            <Route path="/allplayers/:playerId" element={<singlePlayer />} />
          </Routes>
          {/* <Link to="/green">Green</Link> */}
        </div>
      </div>
    </>
  );
}

export default App;
