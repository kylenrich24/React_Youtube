import React from "react";

const Nav = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "red" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Youtube_icon.svg/1200px-Youtube_icon.svg.png"
              width="45"
              height="45"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li>
                <a className="nav-link active h5" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <ul className="navbar-nav navbar-right">
              <li>
                <a className="nav-link" href="#">
                  Sign In
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
