import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Store = () => {
  return (
    <div>
      <section id="fondo">
        <div className="container">
          <div className="row">
            <div className="col-md-2 v-line">
              <br />
              <br />
              <hr />
              <hr />
              <table>
                <tr>
                  <th>
                    <h3 className="display-5">Secciones</h3>
                  </th>
                </tr>
                <tr className="display-6">
                  <td><a href="#ciclismo" style={{ textDecoration: 'none', color: 'white' }}> Ciclismo</a></td>
                </tr>
                <tr className="display-6">
                  <td><a href="#futbol" style={{ textDecoration: 'none', color: 'white' }}> Fútbol</a></td>
                </tr>
                <tr className="display-6">
                  <td><a href="#trekking" style={{ textDecoration: 'none', color: 'white' }}> Trekking</a></td>
                </tr>
              </table>
              <hr />
              <hr />
            </div>
            <div className="col-md-8">
              <br />
              <br />
              <h1 className="display-1 text-center">Tienda</h1>
              <br />
              <br />
              <h2 className="display-4 secciones" id="ciclismo">Ciclismo</h2>
              <br />
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <img src="img/bici1.webp" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">TRIBAN</h5>
                      <p className="card-text">Bicicleta de ruta aro 700 / 8 velocidades azul marino rc120</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">$590.000</li>
                      </ul>
                      <a href="#" className="btn btn-primary me-2">Añadir</a>
                      <a href="#" className="btn btn-primary">Quitar</a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src="img/bici2.webp" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">ROCKRIDER</h5>
                      <p className="card-text">Casco ciclismo mtb expl500</p>
                      <br />
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">$45.000</li>
                      </ul>
                      <a href="#" className="btn btn-primary me-2">Añadir</a>
                      <a href="#" className="btn btn-primary">Quitar</a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src="img/bici3.webp" className="card-img-top" alt="..." height="200" />
                    <br />
                    <br />
                    <br />
                    <div className="card-body">
                      <h5 className="card-title">SPECIALIZED</h5>
                      <p className="card-text">Bicicleta Rockhopper Aro 26</p>
                      <br />
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">$550.000</li>
                      </ul>
                      <a href="#" className="btn btn-primary me-2">Añadir</a>
                      <a href="#" className="btn btn-primary">Quitar</a>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <hr />
              <br />
              <h2 className="display-4 secciones" id="futbol">Fútbol</h2>
              <br />
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <img src="img/futbol1.webp" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">KIZTA</h5>
                      <p className="card-text">Balón de fútbol amarillo</p>
                      <br />
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">$10.000</li>
                      </ul>
                      <a href="#" className="btn btn-primary me-2">Añadir</a>
                      <a href="#" className="btn btn-primary">Quitar</a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src="img/futbol2.webp" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">KIZTA</h5>
                      <p className="card-text">Zapatillas de fútbol</p>
                      <br />
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">$50.000</li>
                      </ul>
                      <a href="#" className="btn btn-primary me-2">Añadir</a>
                      <a href="#" className="btn btn-primary">Quitar</a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src="img/futbol3.webp" className="card-img-top" alt="..." height="200" />
                    <br />
                    <br />
                    <br />
                    <div className="card-body">
                      <h5 className="card-title">KIZTA</h5>
                      <p className="card-text">Arco de fútbol</p>
                      <br />
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">$200.000</li>
                      </ul>
                      <a href="#" className="btn btn-primary me-2">Añadir</a>
                      <a href="#" className="btn btn-primary">Quitar</a>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <hr />
              <h2 className="display-4 secciones" id="trekking">Trekking</h2>
              <br />
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                  <div className="card h-100">
                    <img src="img/trekking1.webp" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">FORKLAS</h5>
                      <p className="card-text">Bastón de Trekking</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">$10.000</li>
                      </ul>
                      <a href="#" className="btn btn-primary me-2">Añadir</a>
                      <a href="#" className="btn btn-primary">Quitar</a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src="img/trekking2.webp" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">KECHUA</h5>
                      <p className="card-text">Bototos de montaña verde agua</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">$65.000</li>
                      </ul>
                      <a href="#" className="btn btn-primary me-2">Añadir</a>
                      <a href="#" className="btn btn-primary">Quitar</a>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100">
                    <img src="img/trekking3.webp" className="card-img-top" alt="..."  />
                    <div className="card-body">

                      <h5 className="card-title">FORKLAS</h5>
                      <p className="card-text">Chaqueta Mujer</p>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">$125.000</li>
                      </ul>
                      <a href="#" className="btn btn-primary me-2">Añadir</a>
                      <a href="#" className="btn btn-primary">Quitar</a>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
