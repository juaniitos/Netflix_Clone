import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css';

const MovieCard = ({ movie }) => {
  return (
    <Card className="card-custom">
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            Puntaje: <span className="movie-score">{movie.vote_average}</span> <br />
            Fecha de estreno: {movie.release_date}
          </Card.Text>
        </div>
        <Link to={`/movie/${movie.id}`} className="btn-custom mt-auto">Ver detalles</Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
