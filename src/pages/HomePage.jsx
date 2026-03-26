import { useState, useEffect } from 'react';
import { fetchGames } from '../services/gameService';
import GameCard from '../components/GameCard';

const HomePage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGames = async () => {
      try {
        const data = await fetchGames();
        setGames(data);
      } catch (err) {
        setError('Failed to load games. Check your Supabase connection.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getGames();
  }, []); 

  if (loading) return <div className="loader">Loading your library...</div>;
  if (error) return <div className="error-msg">{error}</div>;

  return (
    <main className="container">
      <h1>My Game Library</h1>
      
      {games.length === 0 ? (
        <p>No games registered yet. Start by adding one!</p>
      ) : (
        <div className="game-grid">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </main>
  );
};

export default HomePage;