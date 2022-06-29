import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import Register from './pages/Register';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/user' element={<User />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/page404' element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
