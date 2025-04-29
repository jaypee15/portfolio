import React from "react";
import {
  RideByImg ,
  StudyroomsImg,
  EvotingImg,
  GeoScopeImg,
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
    title:"Shoes Jet - Ecommerce Application - shoes and all",
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
    image:<RideByImg />,
    type:"ride-by",
    title:"Ride-By – Smarter, Friendlier Carpooling",
    desc:"Think of Ride-By as your everyday travel buddy — connecting people, saving money, and making commutes smoother. Whether you're heading to work, class, or a quick trip across town, Ride-By makes it easy to find or share a ride. It’s convenient, community-driven, and built for the road ahead. 🚗💨",
    tags:["NestJs", "NodeJs", "Redis"],
    demoUrl:"https://traveazi.onrender.com/api/docs",
    codeUrl:"https://github.com/jaypee15/ride-by",
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
    image:<GeoScopeImg/>,
    type:"GeoScope",
        title:"GeoScope – Effortless IP Intelligence",
        desc:"An AI-poweredGeoScope is your smart, no-fuss IP lookup tool. Just plug in an IP address, and instantly get detailed, accurate geolocation data — from city and country to time zone and ISP. Whether you're building smarter apps or analyzing traffic, GeoScope has your back — no guesswork, just precision. 🌍📡 ",
        tags:["Rust","Axum","GeoLite2City"],
        demoUrl:"https://github.com/jaypee15/Geo-Crabby-IP",
        codeUrl:"https://github.com/jaypee15/Geo-Crabby-IP",
  },
  {
    image:<SocialImg/>,
    type:"social",
        title:"Social Media API",
        desc:"The API provides a robust foundation for developing and extending social media applications with ease. Built with FASTAPI, it provides functionalities like CRUD operations for both Posts and Users plus the ability to like and unlike posts. ",
        tags:["FastAPI","Swagger", "Open API" ],
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