import { useNavigate } from "react-router-dom";
import { createGame } from "../services/gameService";
import GameForm from "../components/GameForm";
import "./AddGamePage.css";

const AddGamePage = () => {
  const navigate = useNavigate();

  const handleAddGame = async (gameData) => {
    try {
      await createGame(gameData);
      navigate("/");
    } catch (error) {
      console.error("Error saving game:", error);
      alert("Oops! Could not save the game. Check your connection.");
    }
  };

  return (
    <div className="add-game-container">
      <header className="add-game-header">
        <h2>Add a New Favorite Game</h2>
        <p>Fill out the details below to update your collection.</p>
      </header>
      <GameForm onSubmit={handleAddGame} />
    </div>
  );
};

export default AddGamePage;
