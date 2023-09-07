import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div><footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <img src={'Assets/logo.png'} alt="Foodie Logo"/>
        </div>
        <div class="footer-menu">
          <ul>
          <Link to={"/"}>Home</Link>
            <Link to={'/Recipe'}>Recipe</Link>
            <Link to={'/Blog'}>Blog</Link>
            <Link to={'/Contact'}>Contact</Link>
            <Link to={'/AboutUs'}>About Us</Link>
          </ul>
        </div>
        <div class="footer-social">
          <ul>
            <li><a href="www.facebook.com"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="www.twitter.com"><i class="fab fa-twitter"></i></a></li>
            <li><a href="www.instagram.com"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="footer-contact">
        <h3>Contact Us</h3>
        <p>Email: info@foodieland.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer