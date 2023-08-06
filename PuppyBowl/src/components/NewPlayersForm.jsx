export default function NewPlayersForm({ player }) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.id.value;
    setInputs((values) => ({ ...values, [name]: id.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Breed:
        <input
          type="text"
          name="breed"
          value={inputs.breed || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Status:
        <input
          type="text"
          name="status"
          value={inputs.status || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="imageUrl"
          value={inputs.imageUrl || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Created At:
        <input
          type="text"
          name="createdAt"
          value={inputs.createdAt || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Team ID:
        <input
          type="text"
          name="teamId"
          value={inputs.teamId || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
