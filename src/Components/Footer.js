import React from "react";
import { Link } from "react-router-dom";
const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={"/Assets/logo.webp"} alt="Foodie Logo" />
            </div>
            <div className="footer-menu">
              <ul>
                <Link to={"/"}>Home</Link>

                <Link to={"/#recipe"}>Recipe</Link>
                <Link to={"/Blog"}>Blog</Link>
                <Link to={"/Contact"}>Contact</Link>
                {/* <Link to={"/AboutUs"}>About Us</Link> */}
              </ul>
            </div>
          </div>
          <div className="footerundertext">
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
          </div>
          <div id="line"></div>
          <div className="footer-container">
            <div className="footer-text">
              <p>
                © 2020 Flowbase. Powered by <span>Webflow</span>
              </p>
              <div className="footer-social">
                <a href="https://www.facebook.com" target="_blank">
                  <img src={"/Assets/fb.png"} alt="fb"/>
                </a>
                <a href="https://www.twitter.com/kakudharmu" target="_blank">
                  <img src={"/Assets/twitter.png"} alt="twitter"/>
                </a>
                <a
                  href="https://www.instagram.com/_kaku_sharma"
                  target="_blank"
                >
                  <img src={"/Assets/instagram.png"} alt="insta"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
