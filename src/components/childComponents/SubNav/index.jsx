import React from 'react'
import { Link } from 'react-router-dom';
import './style.scss'

const SubNav = () => {
  return (
    <nav>
    <ul className="sub_navbar">
      <li className="sub_navbar-item">
        <Link to="/account" className="sub_navbar-link">Send</Link>
      </li>
      <li className="sub_navbar-item">
        <Link to="/request" className="sub_navbar-link">Request</Link>
      </li>
      <li className="sub_navbar-item">
        <Link to="/contacts" className="sub_navbar-link">Contacts</Link>
      </li>
      <li className="sub_navbar-item">
        <Link to="/more" className="sub_navbar-link">More</Link>
      </li>
    </ul>
  </nav>
  );
}

export default SubNav