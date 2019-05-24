import React from "react";
import Link from "next/link";

const Layout = ({ title, children }) => {
  const toggleCollapse = () => {
    const div = document.querySelector(".navbar-collapse");
    div.classList.toggle("show");
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">IV</a>
          <button
            onClick={toggleCollapse}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
              <Link href="/">
                <li className="nav-item">
                  <a className="nav-link ml-3 home">Home </a>
                </li>
              </Link>
              <Link href="/about">
                <li className="nav-item">
                  <a className="nav-link ml-3 home">About </a>
                </li>
              </Link>
              <Link href="/contact">
                <li className="nav-item">
                  <a className="nav-link ml-3 home">Contact</a>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
      <h1>{title}</h1>

      {children}

      <footer>&copy; {new Date().getFullYear()}</footer>
    </div>
  );
};

export default Layout;
