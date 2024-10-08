import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//import pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
//import Page components
import Header from './components/Header'


function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header/>
          {/* Nothing inside of Routes besides a Route */}
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
          </Routes>
        </div>
      </Router>


    </>

  );
}

export default App;
