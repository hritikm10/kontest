import React from "react";
import { Link } from "react-router-dom";

function Knavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Kontest
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
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact US
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Platforms
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    {" "}
                    <Link className="links" to="/codechef">
                      {" "}
                      &#8611; CodeChef{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="links" to="/atcoder">
                      {" "}
                      &#8611; AtCoder{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="links" to="/codeforces">
                      {" "}
                      &#8611; CodeForces{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="links" to="/leetcode">
                      {" "}
                      &#8611; LeetCode{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="links" to="/hackerearth">
                      {" "}
                      &#8611; HackerEarth{" "}
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link className="links" to="/others">
                      {" "}
                      &#8611; Others{" "}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Knavbar;
