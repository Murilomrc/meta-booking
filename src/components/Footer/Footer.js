import React from "react";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Footer.css";
import logoWhiteImage from "../../assets/images/logo-white.png";

const contacts = [
  { icon: faLocationDot, info: "678 Pisa Ave, Chicago, IL 60611" },
  { icon: faPhone, info: "(312) 593-2744" },
  { icon: faEnvelope, info: "customer@littlelemon.com" },
];

const socials = [
  { icon: faFacebook, name: "facebook" },
  { icon: faTwitter, name: "twitter" },
  { icon: faInstagram, name: "instagram" },
  { icon: faYoutube, name: "youtube" },
];

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div>
        <img
          className="footer-wrapper-logo"
          src={logoWhiteImage}
          alt="Little Lemon"
        />
        <nav className="footer-wrapper-nav">
          <h4>Sitemap</h4>
          <ul></ul>
        </nav>
        <div className="footer-wrapper-contact">
          <h4>Contact us</h4>
          <address>
            {contacts.map((contact, index) => (
              <p key={index}>
                <FontAwesomeIcon icon={contact.icon} /> {contact.info}
              </p>
            ))}
          </address>
        </div>
        <div className="footer-wrapper-social">
          <h4>Connect with us</h4>
          {socials.map((social, index) => (
            <a
              key={index}
              href={`https://www.${social.name}.com`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
