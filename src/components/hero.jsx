import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Resume from "../assets/NodeJSResume.pdf";
import portrait from "../assets/image (1).png";
import {
  TwitterIcon,
  MailIcon,
  WhatsappIcon,
  LinkedInIcon,
  GithubIcon,
} from "./svgs";

const titles = [
  "NodeJs \n Developer",
  "JavaScript \n Developer",
  "Fullstack Web \n Developer",
  "Back-End \n Developer",
  "Django \n Developer",
  "Python \n Developer",
];

function formatTitle(text) {
  return text.split(/\n+/).map((title, index) => <p key={index}>{title}</p>);
}

const Hero = () => {
  const [title, setTitle] = useState(titles[0]);
  const [toggleAnim, setToggleAnim] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const insertAnim = setTimeout(() => {
      setToggleAnim(false);
    }, 100);
    const id = setTimeout(() => {
      let currentIndex = titles.indexOf(title);
      if (currentIndex === titles.length - 1) {
        currentIndex = 0;
        setTitle(titles[0]);
      } else {
        setTitle(titles[currentIndex + 1]);
      }
    }, 3000);
    const removeAnim = setTimeout(() => {
      setToggleAnim(true);
    }, 2600);
    return () => {
      clearInterval(id);
      clearInterval(insertAnim);
      clearInterval(removeAnim);
    };
  }, [title]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div className="hero-section">
      <div className="hero-sub-1">
        <div className="hero-sub-container">
          <h4 className="hero-sub-1-intro">Hi, I’m Okoye Johnpaul,</h4>
          <div className="hero-sub-1-titles">
            <h1 className={`hero-title ${toggleAnim && "pre-animation"}`}>
              {formatTitle(title)}
            </h1>
          </div>
          <p className="hero-sub-1-desc type5">
            I'm a software developer passionate about shaping digital experiences. 
            Adept in crafting robust server-side logic and seamless API interactions, 
            I bring efficiency to authentication, authorization, data management, and server configuration. 
            My commitment to security ensures applications withstand potential threats. 
            I'm driven to build scalable solutions for a dynamic digital landscape. 
          </p>
        </div>

        <div className="hero-sub-1-buttons">
        <button className="hero-sub-1-resume" onClick={openModal}>
          View Resume
        </button>
        <a
          href={Resume}
          className="hero-sub-1-resume"
          download
        >
          Download Resume
        </a>
        </div>
        
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="hero-sub-1-modal">
          <button onClick={closeModal}>Close</button>
          <iframe src={Resume} width="100%" height="600px" title="Resume"></iframe>
        </Modal>
        <div className="hero-sub-1-icons">
          <a href="http://twitter.com/johnofpaul" target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://github.com/jayee15" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
          <a href="mailto:okoyejohnpaul15@gmail.com?" target="_blank" rel="noreferrer">
            <MailIcon />
          </a>
          <a href="https://wa.me/2348171851665" target="_blank" rel="noreferrer">
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
      </div>
      <div className="hero-sub-2">
        <img src={portrait} alt="avatar_jaypee" />
      </div>
    </div>
  );
};

export default Hero;
