import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header className='header__wrapper'>header</header>
      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </>
  );
};

export default Header;
