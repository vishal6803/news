import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark  w-100">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to="#">
          News App
        </Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          {/* <li className="nav-item">
              <Link className="nav-link" to="#">
                Link
              </Link>
            </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/"></Link>
          </li>
        </ul>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                category
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/business">
                    business
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/entertainment">
                    entertainment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/health">
                    health
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/science">
                    science
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/technology">
                    technology
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sports">
                    sports
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* <form className="form-inline my-2 my-lg-0 ">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> */}
      </div>
    </nav>
  );
}
