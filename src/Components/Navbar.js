import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="insideleftnav">
          <div className="leftSide">
            <Link to={"/"}>
              <img src={"/Assets/logo.png"} alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="midrightnav">
          <div className="mid">
            <ul className="navItems">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <a href="#recipe">Recipe</a>
              </li>
              <li>
                <NavLink to={"/Blog"}>Blog</NavLink>
              </li>
              <li>
                <NavLink to={"/Contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>

          <div className="rightSide">
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
        <div className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
          {!navbarOpen ? (
            <RxHamburgerMenu fontSize={22} />
          ) : (
            <AiOutlineClose fontSize={22} />
          )}
        </div>
      </div>
      <div className={`hamburgernav ${navbarOpen ? " show-menu" : ""}`}>
        <nav className={`sidebar`}>
          <ul className={`menu-nav`}>
            <li onClick={() => setNavbarOpen(false)}>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li onClick={() => setNavbarOpen(false)}>
              <a href="#recipe">Recipe</a>
            </li>
            <li onClick={() => setNavbarOpen(false)}>
              <NavLink to={"/Blog"}>Blog</NavLink>
            </li>
            <li onClick={() => setNavbarOpen(false)}>
              <NavLink to={"/Contact"}>Contact</NavLink>
            </li>
          </ul>
          <div className="rightSide">
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
        </nav>
      </div>
    </>
  );
}

export default Navbar;
