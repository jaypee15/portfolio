import React from "react";
import {
  HTMLIcon,
  CSSIcon,
  JSIcon,
  ReactIcon,
  DjangoIcon,
  PythonIcon,
  PostgreSQLIcon,
  LinuxIcon,
  GitIcon,
  FastAPIIcon,
  NodeJsIcon,
  MongoDBIcon,
  NestJsIcon,
  ExpressJsIcon,
  TypeScriptIcon,
  RustIcon,
} from "./svgs";

const stackArray = [
  "HTML",
  "CSS",
  "Javascript",
  "ReactJS",
  "Django",
  "Python",
  "PostgreSQL",
  "Linux",
  "Git",
  "FastAPI",
  "NodeJs",
  "TypeScript",
  "Express Js",
  "Nest Js",
  "MongoDB",
  "Rust",
  

];
const Stack = ({ type }) => {
  return (
    <div className="stack-pill">
      {type === "HTML" ? (
        <HTMLIcon />
      ) : type === "CSS" ? (
        <CSSIcon />
      ) : type === "Javascript" ? (
        <JSIcon />
      ) 
      : type === "ReactJS" ? (
        <ReactIcon />
      ) 
      : type === "Python" ? (
        <PythonIcon />
      ) 
      : type === "PostgreSQL" ? (
        <PostgreSQLIcon />
      ) 
      : type === "Linux" ? (
        <LinuxIcon />
      ) 
      : type === "Git" ? (
        <GitIcon />
      ) 
      : type === "FastAPI" ? (
        <FastAPIIcon />
      )
      : type === "TypeScript" ? (
        <TypeScriptIcon />
      )
      : type === "Express Js" ? (
        <ExpressJsIcon />
      )
      : type === "Nest Js" ? (
        <NestJsIcon />
      )
      : type === "NodeJs" ? (
        <NodeJsIcon />
      )
      : type === "MongoDB" ? (
        <MongoDBIcon />
      )
      : type === "Rust" ? (
          <RustIcon />
      ) : (
        <DjangoIcon />
      )
      }
      <span className="stack-title">{type}</span>
    </div>
  );
};

const Stacks = () => (
  <div className="stacks-container">
    {stackArray.map((stack) => (
      <Stack type={stack} key={stack} />
    ))}
  </div>
);
export default Stacks;