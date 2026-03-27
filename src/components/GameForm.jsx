import { useState } from "react";
import "./GameForm.css";

const GameForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, genre, rating: parseInt(rating) });
  };

  return (
    <div className="game-form">
      <form onSubmit={handleSubmit} className="game-form-inner">
        <div className="input-row">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="input-row">
          <label>Genre:</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>

        <div className="input-row">
          <label>Rating:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="xbox-save-btn">
          Save Game
        </button>
      </form>
    </div>
  );
};

export default GameForm;
