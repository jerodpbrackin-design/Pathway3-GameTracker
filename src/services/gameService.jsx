const URL = import.meta.env.VITE_SUPABASE_URL;
const KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 1. Fetching the list (Needed for HomePage)
export const fetchGames = async () => {
  const response = await fetch(`${URL}/games?select=*`, {
    method: 'GET',
    headers: {
      'apikey': KEY,
      'Authorization': `Bearer ${KEY}`,
      'Content-Type': 'application/json'
    }
  });
  
  if (!response.ok) throw new Error('Failed to fetch games');
  return await response.json();
};

// 2. Creating a new game (Needed for AddGame)
export const createGame = async (gameData) => {
  const response = await fetch(`${URL}/games`, {
    method: 'POST',
    headers: {
      'apikey': KEY,
      'Authorization': `Bearer ${KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    },
    body: JSON.stringify(gameData)
  });
  
  if (!response.ok) throw new Error('Failed to create game');
  return await response.json();
};