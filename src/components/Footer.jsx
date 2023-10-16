import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <Link
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              to="/harishukla797@gmail.com"
              role="button"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </Link>
            <Link
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              to="https://www.instagram.com/shriyash_shukla/"
              role="button"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              to="/in/shriyash-shukla-49a426220"
              role="button"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
            <Link
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              to="https://github.com/shriayshshukla"
              role="button"
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:{" "}
          <Link className="text-white" to="/">
            Pappi paet
          </Link>
          <span className="mx-2 px-2 border-secondary border-start">Made by: <Link className="text-white" to="https://github.com/shriyashshukla">Shriyash shukla</Link></span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
