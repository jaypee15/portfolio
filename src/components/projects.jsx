import React from "react";
import {
  DjangoChatbotImg ,
  StudyroomsImg,
  EvotingImg,
  ColorizeImg,
  SocialImg,
  ShoesJetImg
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
        <a href={demoUrl} target="_blank" rel='noreferrer'>
          Demo
        </a>
        <a href={codeUrl} target="_blank" rel='noreferrer'>
          &#60;Code&#47;&#62;
        </a>
      </div>
    </div>
  );
};


export const ProjectCards = () => {
  const projects=[
  {
    image:<ShoesJetImg/>,
    type:"shoes Jet",
    title:"Shoes Jet Ecommerce Application",
    desc:"The application provides a seamless online shopping experience for users looking to purchase shoes. The platform includes features like product browsing, searching, filtering, user authentication, shopping cart, favourites and orders.",
    tags:["NodeJs", "JavaScript", "MongoDB"],
    demoUrl:"https://shoes-jet.vercel.app/",
    codeUrl:"https://github.com/jaypee15/nextgen-shoes-ecommerce-backend",
  },
  {
    image:<StudyroomsImg/>,
    type:"study rooms",
    title:"Study Rooms networking app",
    desc:"A virtual study hangout for students. Imagine being able to create or jump into study 'rooms' based on topics you're into – from coding to history. It's all about connecting with persons who share your vibe and studying together in a way that's relaxed and collaborative. Say goodbye to solo cram sessions and hello to a community of learners.",
    tags:["DJango", "Python", "SQLite"],
    demoUrl:"https://study-rooms.onrender.com",
    codeUrl:"https://github.com/jaypee15/study_rooms",
  },
  {
    image:<DjangoChatbotImg />,
    type:"chatbot",
    title:"Django AI Assistant",
    desc:"It's like having a virtual sidekick to help you with tasks, answer questions, and just make life a bit easier. Whether you need quick info or a hand with daily stuff, this bot's got your back. Let's make life simpler and a tad more fun with a touch of AI magic! ✨",
    tags:["Django", "Python", "GPT-3.5-turbo"],
    demoUrl:"https://django-chatapp-wm7h.onrender.com/",
    codeUrl:"https://github.com/jaypee15/django-chatbot",
  },
 
  {
    image:<EvotingImg/>,
    type:"E-voting",
    title:"Electronic Voting Application API",
    desc:"A secure and scalable e-voting application built with Node.js and Express. The application allows users to cast votes electronically, ensuring integrity, transparency, and anonymity in the voting process.",
    tags:["NodeJs", "JavaScript", "MongoDB", ],
    demoUrl:"https://e-voting-amber.vercel.app/",
    codeUrl:"https://github.com/jaypee15/E-voting",
  },
 
  {
    image:<ColorizeImg/>,
    type:"colorize",
        title:"Colorize",
        desc:"An AI-powered image colorization app that transforms black and white images into vibrant, lifelike masterpieces. Using the ddcolor model, it colorizes images in a matter of seconds.",
        tags:["Django","JavaScript","ddcolor Model"],
        demoUrl:"https://colorize-fc38.onrender.com",
        codeUrl:"https://github.com/jaypee15/colorize",
  },
  {
    image:<SocialImg/>,
    type:"social",
        title:"Social Media API",
        desc:"The API provides a robust foundation for developing and extending social media applications with ease. Built with FASTAPI, it provides functionalities like CRUD operations for both Posts and Users plus the ability to like and unlike posts. ",
        tags:["FASTAPI","Swagger-UI", "Open API" ],
        demoUrl:"https://fastapi-social.onrender.com/docs",
        codeUrl:"https://github.com/jaypee15/fastapi-socialmedia",
  },
 
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