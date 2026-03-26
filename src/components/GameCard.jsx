const GameCard = ({ game, onDelete }) => {
  const { id, title, genre, rating } = game;

  return (
    <div className="game-card" style={styles.card}>
      <h3>{title}</h3>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Rating:</strong> {rating}/5 Stars</p>
      
      <button 
        onClick={() => onDelete(id)} 
        style={styles.deleteBtn}
      >
        Delete Game
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '10px',
    backgroundColor: '#f9f9f9',
    width: '250px'
  },
  deleteBtn: {
    backgroundColor: '#ff4d4d',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default GameCard;