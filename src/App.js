import React from 'react';
import './styles/main.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './templates/Home';
import About from './templates/About';
import Contact from './templates/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
