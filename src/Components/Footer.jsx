import React from "react";
import { SiFacebook } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { ImTwitter } from "react-icons/im";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary text-center text-white py-4 mt-5">
      <div className="container">
        {/* Socials */}
        <div className="footer_socials d-flex justify-content-center gap-3 mb-4">
          <a href="https://facebook.com" className="social_icon">
            <SiFacebook />
          </a>
          <a href="https://instagram.com" className="social_icon">
            <FiInstagram />
          </a>
          <a href="https://twitter.com" className="social_icon">
            <ImTwitter />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer_copyright">
          <small>&copy; Ishan&apos;s Portfolio</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;