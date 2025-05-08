import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top border-bottom" data-bs-theme={this.props.mode}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsMonk
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {this.props.categories.map((category) => {
                return (
                  <li className="nav-item" key={category}>
                    <Link
                      className="nav-link"
                      to={category === "general" ? "/" : "/" + category}
                    >
                      {category === "general"
                        ? "Home"
                        : this.capitalize(category)}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="form-check form-switch mx-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
                onClick={this.props.modeHandler}
              />
              <label className={`form-check-label text-${this.props.mode === "dark" ? "light" : "dark"}`} for="switchCheckDefault">
                Dark Mode
              </label>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
