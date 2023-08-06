// In each file create a component which returns a div with the
// className set to its respective color. Inside of the div, create

// Return a parent div element with a h1 saying "New Players Form".

const addNewPlayer = async (playerObj) => {
  try {
    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerObj),
    };
    const response = await fetch(APIURL, requestOption);
    const newPlayer = await response.json();
    return newPlayer;
  } catch (err) {
    console.error(
      "Oops, there was something wrong with adding that player!",
      err
    );
  }
};

const removePlayer = async (playerId) => {
  try {
    const requestOption = {
      method: "DELETE",
    };
    const response = await fetch(`${APIURL}/${playerId}`, requestOption);
    const players = await response.json();
    return players;
  } catch (err) {
    console.error(
      `Oops, we have issues removing player #${playerId} from the roster!`,
      err
    );
  }
};

export default function NewPlayersForm({ player }) {
  const [name, setName] = useState("");
  return (
    <div className="newplayer">
      <h1>Add your puppy here!</h1>
      <form>
        <label>
          Enter your name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
