import "./GameCard.css";

const GameCard = ({ game, onDelete }) => {
  const { id, title, genre, rating } = game;

  return (
    <div className="game-card">
      <h3>{title}</h3>
      <p>
        <strong>Genre:</strong> {genre}
      </p>
      <p>
        <strong>Rating:</strong> {rating}/5 Stars
      </p>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        Delete Game
      </button>
    </div>
  );
};

export default GameCard;
