import React from "react";
import {
  DjangoChatbotImg ,
  ExbImg,
  StudyroomsImg,
 
    LuxovantImg,
    TweeterImg,
    SimplePlaylistImg,
    PortfolioImg,
    WindBnBImg,
    HuddleImg,
    EdieImg,
    InteriorImg,
    GalleryImg,
    CheckoutImg,
  } from "./images";

const ProjectCard = ({
  image,
  type,
  title,
  desc,
  tags = ["HTML", "CSS"],
  demoUrl,
  codeUrl,
}) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
      {image}
      </div>
      <div className="project-card-intro">
        <h4>{title}</h4>
        <p className="type5">{desc}</p>
      </div>
      <div className="project-card-tags">
        {tags.map((tag) => (
          <span className="project-card-tag type6" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="project-card-links type6">
        <a href={demoUrl} target="_blank">
          Demo
        </a>
        <a href={codeUrl} target="_blank">
          &#60;Code&#47;&#62;
        </a>
      </div>
    </div>
  );
};


export const ProjectCards = () => {
  const projects=[
  {
    image:<StudyroomsImg/>,
    type:"study rooms",
    title:"Study Rooms social media app",
    desc:"social Media app for studets looking for study partners",
    tags:["DJango", "Python", "SQLite3"],
    demoUrl:"https://study-rooms.onrender.com",
    codeUrl:"https://github.com/jaypee15/study_rooms",
  },
  
  {
    image:<DjangoChatbotImg />,
    type:"chatbot",
    title:"Django AI assistant",
    desc:"Chatbot and AI assistant built on the Openai API",
    tags:["Django", "Python", "GPT-3.5-turbo"],
    demoUrl:"https://django-chatapp-wm7h.onrender.com/",
    codeUrl:"https://github.com/jaypee15/django-chatbot",
  },
 
  {
    image:<LuxovantImg/>,
    type:"Luxovant",
    title:"News/content aggregator",
    desc:"Luxovant is a platform that keeps you in the loop without the hassle of scouring the web for the latest news. it uses RSS feeds and a bit of scraping to get relevant content for entrepreneurs.",
    tags:["Django", "React", "FeedParser", ],
    demoUrl:"https://github.com/jaypee15/lux-rss",
    codeUrl:"https://github.com/jaypee15/lux-rss",
  },
 
  {
    image:<WindBnBImg/>,
    type:"windbnb",
        title:"WindBnB",
        desc:"An AirBnB inspired website demo.",
        tags:["React"],
        demoUrl:"https://csb-jgr6d1.netlify.app/",
        codeUrl:"https://github.com/jaypee15/lux-rss",
  },
  {
    image:<HuddleImg/>,
    type:"huddle",
        title:"Huddle Landing Page demo",
        desc:"Huddle Landing page clone",
        tags:["HTML", "CSS"],
        demoUrl:"https://github.com/jaypee15/lux-rss",
        codeUrl:"https://github.com/jaypee15/lux-rss",
  },
 
  {
    image:<CheckoutImg/>,
    type:"checkout",
        title:"Checkout Page",
        desc:"Checkout page for a fictional E-Commerce site",
        tags:["HTML", "CSS"],
        demoUrl:"https://github.com/jaypee15/lux-rss",
        codeUrl:"https://github.com/jaypee15/lux-rss",
  }
]
  return (
    <>
    {projects.map((project,index)=>(
      <ProjectCard
      key={index}
      image={project.image}
      type={project.type}
      title={project.title}
      desc={project.desc}
      tags={project.tags}
      demoUrl={project.demoUrl}
      codeUrl={project.codeUrl}
    />
    ))}
     
    </>
  );
};

export default ProjectCards;