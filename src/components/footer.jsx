import React from "react";
import {
  TwitterIcon,
  MailIcon,
  WhatsappIcon,
  LinkedInIcon,
  GithubIcon,
} from "./svgs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3 className="footer-section-title">Let's Build</h3>
        <p className="footer-section-desc">
          Reach out on
        </p>
      </div>
      <div className="footer-icons">
        <a href="http://twitter.com/johnofpaul" target="_blank" rel="noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://github.com/jaypee15" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
        <a href="mailto:okoyejohnpaul15@gmail.com?" target="_blank" rel="noreferrer">
          <MailIcon />
        </a>
        <a href="https://wa.me/2349050741851" target="_blank" rel="noreferrer">
          <WhatsappIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/johnpaulokoye"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;