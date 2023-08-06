import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API/index.js";
import SinglePlayer from "./SinglePlayer.jsx";
import NewPlayerForm from "../NewPlayersForm.jsx";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSeachParam] = useState("");

  // Runs only on the first render
  // useEffect(() => {}, []);
  // Import the useState and useEffect hooks.

  useEffect(() => {
    async function getAllPLayers() {
      const APIResponse = await fetchAllPlayers();
      // If/Else statement + Props
      if (APIResponse.success) {
        setPlayers(APIResponse.data.players);
      } else {
        setError(APIResponse.error.message);
      }
    //   console.log(APIResponse.data.players);
    }
    getAllPLayers();
  }, []);
  return (
    <div>
      {players.map((player) => {
        // console.log(player);
        return <SinglePlayer key={player.id} player={player} />;
      })}
    </div>
  );
}


