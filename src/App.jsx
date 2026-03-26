import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from './pages/HomePage';
import AddGamePage from './pages/AddGamePage';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddGamePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;