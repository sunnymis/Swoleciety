import React from 'react';
import Hamburger from '../Hamburger/Hamburger';
import { Link } from 'react-router-dom';

require('./NavBar.scss');

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Hamburger />
      <Link to="/"><h1 id="swoleciety-title">Swoleciety</h1></Link>
    </nav>
  );
};

NavBar.defaultProps = {
};

NavBar.propTypes = {
};

export default NavBar;
