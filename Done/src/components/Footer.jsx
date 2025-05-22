import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Star Wars Data Explorer</p>
      <div className="footer-links">
        <a href="https://github.com/semperry/swapi" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.swapi.tech/" target="_blank" rel="noreferrer">
          SWAPI
        </a>
      </div>
    </footer>
  );
}

export default Footer;

