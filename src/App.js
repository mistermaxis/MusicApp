import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Albums from './pages/albums';
import Genres from './pages/genres';
import Songs from './pages/songs';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Genres />} />
          <Route path="/genre/:genre_id" element={<Albums />} />
          <Route path="/album/:album_id" element={<Songs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
