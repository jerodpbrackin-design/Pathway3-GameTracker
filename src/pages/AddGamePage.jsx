import { useNavigate } from "react-router-dom";
import { createGame } from "../services/gameService";
import GameForm from "../components/GameForm";

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
    <div style={styles.container}>
      <header style={styles.header}>
        <h2>Add a New Favorite Game</h2>
        <p>Fill out the details below to update your collection.</p>
      </header>
      <GameForm onSubmit={handleAddGame} />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
};

export default AddGamePage;
