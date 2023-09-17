import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className="leftSide">
        <Link to={"/"}>
          <img src={"/Assets/logo.png"} alt="Logo" />
        </Link>
      </div>

      <div className="mobileMenuIcon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      <div className={`mid ${menuOpen ? "open" : ""}`}>
        <ul className="navItems">
          <nav id="homebtn">
            <NavLink to={"/"}>Home</NavLink>
          </nav>
          <a href="#recipe">Recipe</a>
          <nav id="blogbtn">
            <NavLink to={"/Blog"}>Blog</NavLink>
          </nav>
          <nav id="contactbtn">
            <NavLink to={"/Contact"}>Contact</NavLink>
          </nav>
        </ul>
      </div>

      <div className={`rightSide ${menuOpen ? "open" : ""}`}>
        <button onClick={() => openInNewTab("https://www.facebook.com/")}>
          <img src={"/Assets/fb.png"} alt="Facebook" />
        </button>
        <button onClick={() => openInNewTab("https://www.twitter.com/")}>
          <img src={"/Assets/twitter.png"} alt="Twitter" />
        </button>
        <button onClick={() => openInNewTab("https://www.instagram.com/")}>
          <img src={"/Assets/instagram.png"} alt="Instagram" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
