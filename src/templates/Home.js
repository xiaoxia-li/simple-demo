import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
      </main>
      <nav>
        <Link to='/about'>About page</Link>
        <br />
        <Link to='/contact'>Contact page</Link>
      </nav>
    </>
  );
};

export default Home;
