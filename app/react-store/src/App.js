import React from 'react';
import './App.css';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import  Layout  from "./pages/Layout";
import  Login  from "./pages/Login";
import  Store  from "./pages/Store";
import  User  from "./pages/User";
import Home from './pages/Home';
import ShowUsers from './pages/ShowUsers';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="store" element={<Store />} />
            <Route path="user" element={<ShowUsers />} />
            <Route path="*" element={<Home />} />
          </Route>

        </Routes>
    </Router>
  );
}

export default App;
