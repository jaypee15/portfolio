import React from "react";
import {
  DjangoChatbotImg ,
  StudyroomsImg,
  LuxovantImg,
  AnaTImg,
  BarcFSTImg,
  ProductImg,
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
    image:<StudyroomsImg/>,
    type:"study rooms",
    title:"Study Rooms social media app",
    desc:"A virtual study hangout for students. Imagine being able to create or jump into study 'rooms' based on topics you're into – from coding to history. It's all about connecting with persons who share your vibe and studying together in a way that's relaxed and collaborative. Say goodbye to solo cram sessions and hello to a community of learners.",
    tags:["DJango", "Python", "SQLite"],
    demoUrl:"https://study-rooms.onrender.com",
    codeUrl:"https://github.com/jaypee15/study_rooms",
  },
  
  {
    image:<DjangoChatbotImg />,
    type:"chatbot",
    title:"Django AI assistant",
    desc:"It's like having a virtual sidekick to help you with tasks, answer questions, and just make life a bit easier. Whether you need quick info or a hand with daily stuff, this bot's got your back. Let's make life simpler and a tad more fun with a touch of AI magic! ✨",
    tags:["Django", "Python", "GPT-3.5-turbo"],
    demoUrl:"https://django-chatapp-wm7h.onrender.com/",
    codeUrl:"https://github.com/jaypee15/django-chatbot",
  },
 
  {
    image:<LuxovantImg/>,
    type:"Luxovant",
    title:"Content aggregator",
    desc:"The Entrepreneurial Insight Hub! 🚀 Say goodbye to the endless web scroll for the hottest news – this platform does the heavy lifting for entrepreneurs. Using clever RSS feeds and a dash of scraping magic, it serves up the juiciest content directly to you. Stay in the loop effortlessly with curated news, market trends, and industry gold. No more hassle, just the good stuff to fuel your hustle. Stay savvy and crush it! 💼✨",
    tags:["Django", "React", "FeedParser", ],
    demoUrl:"https://github.com/jaypee15/lux-rss",
    codeUrl:"https://github.com/jaypee15/lux-rss",
  },
 
  {
    image:<AnaTImg/>,
    type:"AnaT",
        title:"Ana Thompson website",
        desc:"a personal website for a kick-ass stock broker! 🚀 Dive into real-time market vibes, get insider tips, and peek into the broker's winning portfolio. It's where finance meets flair!",
        tags:["HTML", "CSS", "JavaScript"],
        demoUrl:"https://jaypee15.github.io/Anna-T/",
        codeUrl:"https://github.com/jaypee15/Anna-T",
  },
  {
    image:<BarcFSTImg/>,
    type:"BarcFST",
        title:"Barclays FST",
        desc:"Dive into the world of stocks, forex, and crypto. Swap stocks, dance with foreign exchange, and ride the crypto wave, all in one chill place. It's like having a personal trader in your pocket, but cooler. Get real-time market vibes, make moves, and watch your portfolio grow.",
        tags:["HTML", "CSS", "JavaScript"],
        demoUrl:"https://jaypee15.github.io/barcfst-clone/",
        codeUrl:"https://github.com/jaypee15/barcfst-clone",
  },
 
  {
    image:<ProductImg/>,
    type:"product",
        title:"Product Page",
        desc:"Step into the future of footwear with my sleek and stylish Nike AirFlow Landing Page. Explore the ultimate blend of modern design and comfort, showcasing a fictional Nike masterpiece.",
        tags:["HTML", "CSS"],
        demoUrl:"https://jaypee15.github.io/Product-page/",
        codeUrl:"https://github.com/jaypee15/Product-page",
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