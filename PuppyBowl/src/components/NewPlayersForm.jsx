// In each file create a component which returns a div with the
// className set to its respective color. Inside of the div, create

// Return a parent div element with a h1 saying "New Players Form".

export default function newPlayerFormContainer({ player }) {
  const [name, setName] = useState("");
  return (
    <div className="player">
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
