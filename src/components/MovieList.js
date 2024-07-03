import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
          params: {
            include_adult: false,
            include_video: false,
            language: 'en-US',
            page: 1,
            sort_by: 'popularity.desc',
            api_key: '983d0badbcc5de72ddaf0b600e813679'
          },
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODNkMGJhZGJjYzVkZTcyZGRhZjBiNjAwZTgxMzY3OSIsIm5iZiI6MTcyMDAzMzg1MS41NzY5OTMsInN1YiI6IjY2ODVhMDI5ZWFkM2ZiNDcyYjgxOTEwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OX_c-tLlTGhE2bU5Kp1hf9pL5rFnQ2Tre-8A36R84gU',
            accept: 'application/json'
          }
        });
        setMovies(response.data.results);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Container>
      {error && <Alert variant="danger">{error}</Alert>}
      <h2 className="my-4">Tendencias</h2>
      <Row>
        {movies.map(movie => (
          <Col key={movie.id} xs={12} md={4} lg={3} className="d-flex align-items-stretch">
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MovieList;
