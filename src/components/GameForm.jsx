import { useState } from 'react';

const GameForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, genre, rating: parseInt(rating) });
  };

  return (
    <form onSubmit={handleSubmit} className="game-form">
      <div>
        <label>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Genre:</label>
        <input 
          type="text" 
          value={genre} 
          onChange={(e) => setGenre(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Rating (1-5):</label>
        <input 
          type="number" 
          min="1" 
          max="5" 
          value={rating} 
          onChange={(e) => setRating(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Save Game</button>
    </form>
  );
};

export default GameForm;