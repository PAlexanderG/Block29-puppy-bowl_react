import { useState } from "react";

export default function SinglePlayer({ player }) {
  const [count, setCount] = useState(0);

  // const [state, setState] = useState(initialState);
  // console.log(player.name);
  return (
    <div className="player">
      <h1>Add your favorite puppy!</h1>
      <h1>{player.name}</h1>
      <h1>{player.breed}</h1>
      <h1>{player.status}</h1>
      <h1>{player.imageUrl}</h1>
    </div>
  );
}
