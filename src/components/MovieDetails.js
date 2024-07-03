import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Alert, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import '../index.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [randomBackdrop, setRandomBackdrop] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            language: 'en-US',
            api_key: '983d0badbcc5de72ddaf0b600e813679'
          }
        });
        setMovie(movieResponse.data);

        const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
          params: {
            language: 'en-US',
            api_key: '983d0badbcc5de72ddaf0b600e813679'
          }
        });
        setCredits(creditsResponse.data);

        const reviewsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews`, {
          params: {
            language: 'en-US',
            api_key: '983d0badbcc5de72ddaf0b600e813679'
          }
        });
        setReviews(reviewsResponse.data.results);

        const imagesResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images`, {
          params: {
            api_key: '983d0badbcc5de72ddaf0b600e813679'
          }
        });
        const backdrops = imagesResponse.data.backdrops;
        const randomImage = backdrops[Math.floor(Math.random() * backdrops.length)];
        setRandomBackdrop(randomImage.file_path);
      } catch (error) {
        setError('Error fetching data');
        console.error('Error fetching data:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie || !credits) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav className="justify-content-center mb-4 movie-nav">
        <NavDropdown title="Vista general" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Principal</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Títulos alternativos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Reparto y equipo</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Fechas de estreno</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5">Traducciones</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.6">Cambios</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.7">Informar</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.8">Editar</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Multimedia" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.9">Imágenes de fondo</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.10">Logos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.11">Carteles</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.12">Vídeos</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Fandom" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.13">Discusiones</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.14">Reseñas</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Compartir" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.15">Compartir enlace</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.16">Facebook</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.17">Tweet</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <div className="movie-detail" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${randomBackdrop})` }}>
        <div className="overlay"></div>
        <Container className="text-white py-5">
          {error && <Alert variant="danger">{error}</Alert>}
          <Row>
            <Col md={4}>
              <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} fluid />
            </Col>
            <Col md={8}>
              <h1>{movie.title} <span>({new Date(movie.release_date).getFullYear()})</span></h1>
              <p>{movie.release_date} | {movie.runtime} mins | {movie.genres.map(genre => genre.name).join(', ')}</p>
              <div className="d-flex align-items-center mb-3">
                <div className="movie-score bg-success text-white p-2 rounded-circle me-2">{movie.vote_average * 10}%</div>
                <p className="mb-0">Puntuación de usuarios</p>
              </div>
              <p className="tagline"><em>{movie.tagline}</em></p>
              <h5>Vista general</h5>
              <p>{movie.overview}</p>
              <h5>Equipo</h5>
              <Row>
                {credits.crew.slice(0, 6).map(member => (
                  <Col key={member.credit_id} md={4} className="mb-2">
                    <p className="mb-0"><strong>{member.name}</strong></p>
                    <p className="text-muted">{member.job}</p>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <h5 className="mt-4">Reparto principal</h5>
          <Row>
            {credits.cast.slice(0, 6).map(actor => (
              <Col key={actor.cast_id} md={2} className="mb-4 text-center">
                <Image src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} roundedCircle className="mb-2" />
                <p className="mb-0"><strong>{actor.name}</strong></p>
                <p className="text-muted">{actor.character}</p>
              </Col>
            ))}
          </Row>
          <Row className="mt-4">
            <Col md={8}>
              <h5>Social</h5>
              <div className="reviews">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="true">Reseñas {reviews.length}</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="discussions-tab" data-bs-toggle="tab" data-bs-target="#discussions" type="button" role="tab" aria-controls="discussions" aria-selected="false">Discusiones 10</button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                    {reviews.slice(0, 1).map(review => (
                      <div key={review.id} className="review">
                        <p><strong>Una reseña de {review.author}</strong></p>
                        <p><em>Escrito por {review.author} el {new Date(review.created_at).toLocaleDateString()}</em></p>
                        <p>{review.content}</p>
                      </div>
                    ))}
                  </div>
                  <div className="tab-pane fade" id="discussions" role="tabpanel" aria-labelledby="discussions-tab">
                    <p>No hay discusiones disponibles.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <h5>Información</h5>
              <ul className="list-unstyled">
                <li><strong>Estado</strong>: {movie.status}</li>
                <li><strong>Idioma original</strong>: {movie.original_language}</li>
                <li><strong>Presupuesto</strong>: ${movie.budget.toLocaleString()}</li>
                <li><strong>Ingresos</strong>: ${movie.revenue.toLocaleString()}</li>
              </ul>
              <h5>Palabras clave</h5>
              <div className="keywords">
                {movie.keywords && movie.keywords.keywords.map(keyword => (
                  <span key={keyword.id} className="badge bg-secondary me-1 mb-1">{keyword.name}</span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MovieDetail;
