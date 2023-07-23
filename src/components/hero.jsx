import React, { useEffect, useState } from "react";
import Resume from "../assets/Django Resume.pdf";
import portrait from "../assets/image (1).png";
import {
  TwitterIcon,
  MailIcon,
  WhatsappIcon,
  LinkedInIcon,
  GithubIcon,
} from "./svgs";
const titles = [
  "Fullstack Web \n Developer",
  "Front-End \n Developer",
  "Back-End \n Developer",
];
function formatTitle(text) {
  return text.split(/\n+/).map((title, index) => <p key={index}>{title}</p>);
}
const Hero = () => {
  const [title, setTitle] = useState(titles[0]);
  const [toggleAnim, setToggleAnim] = useState(false);
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

  return (
    <div className="hero-section">
      <div className="hero-sub-1">
        <div className="hero-sub-container">
          <h4 className="hero-sub-1-intro">Hi I’m Okoye Johnpaul,</h4>
          <div className="hero-sub-1-titles">
            <h1 className={`hero-title ${toggleAnim && "pre-animation"}`}>
              {formatTitle(title)}
            </h1>
          </div>
          <p className="hero-sub-1-desc type5">
            I’m a software developer with over 4 years of experience and I love
            building stuff for the web. Over the years I’ve garnered great
            skills with which I deliver a variety of services on Front-end/Back-end Development 
          </p>
        </div>
        <a
          href={Resume}
          className="hero-sub-1-resume"
          download
        >
          Download Resume
        </a>
        <div className="hero-sub-1-icons">
          <a href="http://twitter.com/johnofpaul" target="_blank">
            <TwitterIcon />
          </a>
          <a href="https://github.com/jayee15" target="_blank">
            <GithubIcon />
          </a>
          <a href="mailto:okoyejohnpaul15@gmail.com?" target="_blank">
            <MailIcon />
          </a>
          <a href="https://wa.me/2348171851665" target="_blank">
            <WhatsappIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/johnpaulokoye"
            target="_blank"
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