import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };
  return (
    <div className="App">
      <nav>
        <h3>HOME</h3>
        <ul>
            <Link to="/about" style={navStyle}><li>ABOUT</li></Link>
            <Link to="/top" style={navStyle}><li>TOP 10</li></Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
