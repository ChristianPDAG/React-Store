import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
  return (
    <div>
      <section>
        <div className="row-2">
          <div id="carouselExampleDark" className="carousel carousel-dark slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img src="img/carrusel-1.jpg" className="d-block w-100" alt="10000" />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src="img/carrusel-2.webp" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src="img/carrusel-3.jpeg" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block"></div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="row-3">
          <div className="logo">
            <h1><b>SPORT-STORE</b></h1>
          </div>
        </div>
      </section>

      <section id="our">
        <div className="container">
          <div className="row cont_sec_1">
            <div className="col-md-1"></div>
            <div className="col-md-11">
              <h2>¿Quiénes Somos?</h2>
              <br />
              <h3><b> LA MEJOR TIENDA DEPORTIVA </b></h3>
              <br />
              <h4>
                Los mejores precios y el mejor personal dispuesto a atenderte 24 horas al día, con garantía extendida hasta 12 meses.
              </h4>
              <br />
              <hr />
              <br />
              <h5>Nuestra Historia</h5>
              <br />
              <p>
                Nacidos en Santiago de Chile, un grupo de amigos deportistas convencidos con que el dinero no podía limitar tu crecimiento físico, decididos y comprometidos con la idea de ayudar a más personas creamos esta tienda virtual. Atendido por sus propios dueños egresados de "preparador físico" para dar la mejor asesoría dependiendo tus necesidades deportivas, si algo no lo encuentras en nuestra web <a href="#contact">contáctanos</a> y podemos buscar el artículo que buscas para vendértelo al mejor precio posible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
