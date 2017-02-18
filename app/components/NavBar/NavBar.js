import React from 'react';
import Hamburger from '../Hamburger/Hamburger';

require('./NavBar.scss');

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Hamburger />
      <h1>Swoleciety</h1>
    </nav>
  );
};

NavBar.defaultProps = {
};

NavBar.propTypes = {
};

export default NavBar;
