import React from "react";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = url => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ title, children }) => {
  const toggleCollapse = () => {
    const div = document.querySelector(".navbar-collapse");
    div.classList.toggle("show");
  };

  return (
    <div>
      <Head>
        <title>Next-portfolio</title>
        <link rel="stylesheet" href="/static/css/nprogress.css" />
      </Head>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link href="/">
            <a className="navbar-brand">IV</a>
          </Link>
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
      <div className="content">
        <h1>{title}</h1>

        {children}

        <footer>&copy; {new Date().getFullYear()}</footer>
      </div>

      <style jsx>{`
        a {
          cursor: pointer;
        }
        h1 {
          text-align: center;
        }
        .content {
          display: flex;
          flex-direction: column;
          height: 90vh;
        }
        footer {
          margin-top: auto;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Layout;
