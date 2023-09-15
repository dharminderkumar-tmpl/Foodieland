import React from "react";
import { NavLink, Link } from "react-router-dom";
const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to={"/"}>
          <img src={"/Assets/logo.png"} />
        </Link>
      </div>
      <div className="mid">
        <ul className="navItems">
          <nav id="homebtn">
            {" "}
            <NavLink to={"/"}>Home</NavLink>
          </nav>
          <a href="#recipe">Recipe</a>
          <nav id="blogbtn">
            <NavLink to={"/Blog"}>Blog</NavLink>
          </nav>
          <nav id="contactbtn">
            <NavLink to={"/Contact"}>Contact</NavLink>
          </nav>
          {/* <nav id='aboutusbtn'><NavLink to={'/AboutUs'}>About Us</NavLink></nav> */}
        </ul>
      </div>

      <div className="rightSide">
        <button onClick={() => openInNewTab("https://www.facebook.com/")}>
          <img src={"/Assets/fb.png"} />
        </button>
        <button onClick={() => openInNewTab("https://www.twitter.com/")}>
          <img src={"/Assets/twitter.png"} />
        </button>
        <button onClick={() => openInNewTab("https://www.instagram.com/")}>
          <img src={"/Assets/instagram.png"} />
        </button>

        {/* <img src={twitter}/>
        <img src={instagram}/> */}
      </div>
    </div>
  );
}

export default Navbar;
