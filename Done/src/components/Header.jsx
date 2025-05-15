import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div class="header">
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/episodes">Episodes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
