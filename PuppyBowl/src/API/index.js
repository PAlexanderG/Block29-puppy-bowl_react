// Write a function to fetch the all the players from the API

const COHORT = "2302-acc-pt-web-pt-a";
const baseUrl = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}`;

export async function fetchAllPlayers() {
  try {
    const response = await fetch(`${baseUrl}/players`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchSinglePlayer() {
  try {
    const response = await fetch(`${baseUrl}/players/${playerId}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function createPlayer() {
  try {
    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerObj),
    };
    const response = await fetch(`${baseUrl}/players`, requestOption);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function deletePlayer() {
  try {
    const requestOption = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerObj),
    };
    const response = await fetch(`${baseUrl}/players`, requestOption);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchTeams() {
  try {
    const response = await fetch(`${baseUrl}/COHORT/teams${playerId}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
