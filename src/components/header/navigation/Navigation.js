import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => (
  <ul className="tabs tabs-transparent">
    <li className="tab">
      <NavLink to="/about">ABOUT US</NavLink>
    </li>
    <li className="tab">
      <NavLink to="/skicams">SKICAMS</NavLink>
    </li>
    <li className="tab">
      <NavLink to="/contact">CONTACT</NavLink>
    </li>
  </ul>
);

export default Navigation;