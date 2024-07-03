import React from 'react';
import '../index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>THE MOVIE DB</h5>
            <button className="btn btn-primary mb-2">Hola juanitos!</button>
          </div>
          <div className="col-md-2">
            <h5>LO BÁSICO</h5>
            <ul className="list-unstyled">
              <li>Sobre TMDB</li>
              <li>Contacto</li>
              <li>Foros de ayuda</li>
              <li>API</li>
              <li>Estado del sistema</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>PARTICIPA</h5>
            <ul className="list-unstyled">
              <li>Guía de aportaciones</li>
              <li>Añadir nueva película</li>
              <li>Añadir nueva serie</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>COMUNIDAD</h5>
            <ul className="list-unstyled">
              <li>Directrices</li>
              <li>Discusiones</li>
              <li>Tabla de clasificación</li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>LEGAL</h5>
            <ul className="list-unstyled">
              <li>Términos de uso</li>
              <li>Términos de uso de la API</li>
              <li>Política de privacidad</li>
              <li>Política DMCA</li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <small>Build 837e1fc (7587)</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
