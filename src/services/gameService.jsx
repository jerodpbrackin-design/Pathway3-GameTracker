const URL = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_KEY;

export const fetchGames = async () => {
  const response = await fetch(`${URL}/rest/v1/games?select=*`, {
    method: "GET",
    headers: {
      apikey: KEY,
      Authorization: `Bearer ${KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Failed to fetch games");
  return await response.json();
};

export const createGame = async (gameData) => {
  const response = await fetch(`${URL}/rest/v1/games`, {
    method: "POST",
    headers: {
      apikey: KEY,
      Authorization: `Bearer ${KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(gameData),
  });

  if (!response.ok) throw new Error("Failed to create game");
  return await response.json();
};

export const deleteGame = async (id) => {
  const response = await fetch(`${URL}/rest/v1/games?id=eq.${id}`, {
    method: "DELETE",
    headers: {
      apikey: KEY,
      Authorization: `Bearer ${KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Failed to delete game");
  return true;
};
