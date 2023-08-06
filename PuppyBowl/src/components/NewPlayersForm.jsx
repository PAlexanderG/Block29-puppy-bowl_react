import { useState } from "react";
import { createSinglePlayer } from "../API/index";

export default function NewPlayersForm({ fetchAllPlayers }) {
  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
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
          type="string"
          name="name"
          value={inputs.string || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Id:
        <input
          type="number"
          name="name"
          value={inputs.number || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Breed:
        <input
          type="string"
          name="breed"
          value={inputs.string || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Status:
        <input
          type="enum"
          name="status"
          value={inputs.enum || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Image URL:
        <input
          type="string"
          name="imageUrl"
          value={inputs.imageUrl || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Created At:
        <input
          type="string"
          name="createdAt"
          value={inputs.createdAt || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Team ID:
        <input
          type="number"
          name="teamId"
          value={inputs.number || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Team ID:
        <input
          type="number"
          name="cohortId"
          value={inputs.number || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
