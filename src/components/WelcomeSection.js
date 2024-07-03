import React, { useEffect, useState } from 'react';
import '../index.css';
import axios from 'axios';

const WelcomeSection = () => {
  const [backdropPath, setBackdropPath] = useState('');

  const randomImageUrls = [
    'https://image.tmdb.org/t/p/w500/path_to_image1.jpg',
    'https://image.tmdb.org/t/p/w500/path_to_image2.jpg',
    'https://image.tmdb.org/t/p/w500/path_to_image3.jpg',
    'https://image.tmdb.org/t/p/w500/path_to_image4.jpg',
    'https://image.tmdb.org/t/p/w500/path_to_image5.jpg',
  ];

  const randomImage = randomImageUrls[Math.floor(Math.random() * randomImageUrls.length)];

  useEffect(() => {
    const fetchRandomBackdrop = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: '983d0badbcc5de72ddaf0b600e813679',
            language: 'en-US',
            page: 1
          }
        });
        const movies = response.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        setBackdropPath(randomMovie.backdrop_path);
      } catch (error) {
        console.error('Error fetching random movie backdrop:', error);
      }
    };

    fetchRandomBackdrop();
  }, []);

  return (
    <div className="welcome-section" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${backdropPath || randomImage})` }}>
      <div className="welcome-content">
        <h1>Te damos la bienvenida.</h1>
        <p>Millones de películas, series y gente por descubrir. Explora ya.</p>
        <input type="text" placeholder="Buscar una película, serie, persona......" className="search-input" />
        <button className="search-button">Search</button>
      </div>
    </div>
  );
}

export default WelcomeSection;
