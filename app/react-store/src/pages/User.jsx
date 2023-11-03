import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import ShowUsers from './ShowUsers';



const User = () => {
  return (
    <div>
      <section id="login">
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="title" style={{ paddingTop: '70px' }}>
              <h1><b>Administrar Usuarios</b></h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            

            <Routes>
                <Route path='user' element={ <ShowUsers />}></Route> 
            </Routes>

            <div className="col-md-1"></div>
          </div>
        </div>
        <br />
        <br />
      </section>
    </div>
  );
}



export default User;
