import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react"; // Importa useEffect

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  useEffect(() => {
    const navbarLinks = document.querySelectorAll(".nav-link");

    const closeNavbar = () => {
      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarCollapse = document.querySelector(".navbar-collapse");

      navbarToggler.classList.add("collapsed");
      navbarCollapse.classList.remove("show");
    };

    navbarLinks.forEach((link) => {
      link.addEventListener("click", closeNavbar);
    });

    return () => {
      navbarLinks.forEach((link) => {
        link.removeEventListener("click", closeNavbar);
      });
    };
  }, []);

  return (
    <div>
      <nav className="cont_navbar navbar navbar-expand-lg bg-body-tertiary fixed-top" id="navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">S/S</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/store">Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user">Usuarios</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer id="contact">
        <div className="cont_footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2>Sport-store</h2>
                <hr />
                <br />
                <p>De deportistas para deportistas</p>
                <br />
                <br />
              </div>
              <div className="col-md-4">
                <h2>Contacto</h2>
                <hr />
                <br />
                <a href="mailto:sport-store@contacto.cl"><i className="icon-gmail"> sport-store@contacto.cl</i></a>
                <br />
                <a href="tel:+56988997766"><i className="icon-whatsapp">(+56) 9 8899 7766</i></a>
                <br />
                <a href="tel:+56227788944"><i className="icon-phone">(02) 2 7788 9944</i></a>
                <br />
                <br />
              </div>
              <div className="col-md-4">
                <h2>Ubicación</h2>
                <hr />
                <br />
                <p><i className="icon-location">Avenida Campo del Deporte 466</i></p>
                <img src="./img/ubicacion.png" width="300" height="200" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
