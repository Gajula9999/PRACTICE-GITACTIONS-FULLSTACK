import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserPlus,
  FaUsers,
  FaSearch,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          📸 INSTAGRAM MANAGER
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                <FaUserPlus className="me-1" /> REGISTER
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewall">
                <FaUsers className="me-1" /> DISPLAY ALL
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/display">
                <FaSearch className="me-1" /> DISPLAY BY ID
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/update">
                <FaEdit className="me-1" /> UPDATE
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/delete">
                <FaTrash className="me-1" /> DELETE
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
