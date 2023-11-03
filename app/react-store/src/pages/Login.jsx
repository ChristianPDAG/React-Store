import React from 'react';

const Login = () => {
  return (
    <div>
        <section id="login">
        <div className="container">
        <div className="row">
          <div className="col-md-7"></div>
          <div className="col-md-3 formulario" style={{ marginTop: '10%' }}>
            <br />
            <h1 id="titulo">Inicie Sesión</h1>
            <form>
              <div className="form-outline mb-4">
                <input type="email" id="form2Example1" className="form-control" />
                <label className="form-label" htmlFor="form2Example1">Ingrese su Email o nombre de usuario</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="form2Example2" className="form-control" />
                <label className="form-label" htmlFor="form2Example2">Contraseña</label>
              </div>

              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                    <label className="form-check-label" htmlFor="form2Example31"> Recuérdame </label>
                  </div>
                </div>
                <div className="col">
                  <a href="#!">¿Olvidó su contraseña?</a>
                </div>
              </div>

              <button type="button" className="btn btn-primary btn-block mb-4">Iniciar sesión</button>
            </form>

            <div className="text-center" style={{ backgroundColor: 'rgba(0,0,0,.5)' }}>
              <p>¿No tienes cuenta? <a href="cuenta.html">Regístrate aquí</a></p>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
        </section>
    </div>
  );
};

export default Login;
