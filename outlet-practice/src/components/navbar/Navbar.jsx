import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <header>
        <nav className="navigation">
          {/* ========== LOGO ============= */}
          <ul>
            <li style={{ fontWeight: "bolder", fontSize: "1.25em" }}>
              <i>ANIME</i>
            </li>
          </ul>
          {/* ============ SEARCH =============== */}
          <input type="search" placeholder="Search Anime" />
          {/* ============ NAVIGATION LINKS ================= */}
          <ul>
            <li>Watching</li>
            <Link to='/wishlist'>
            <li>Wishlist</li>
            </Link>
            <Link to='/favourite'>
            <li>Favourite</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
