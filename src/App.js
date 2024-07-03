import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import WelcomeSection from './components/WelcomeSection';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetails';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div >
        <NavBar />
        <div className="main-content">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <WelcomeSection />
                <MovieList />
              </>
            } 
          />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/series" element={<div>Series Component</div>} />
          <Route path="/people" element={<div>People Component</div>} />
          <Route path="/trending" element={<div>Trending Component</div>} />
          <Route path="/top-rated" element={<div>Top Rated Component</div>} />
          <Route path="/upcoming" element={<div>Upcoming Component</div>} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
