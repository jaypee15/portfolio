import React from "react";
import {
  HTMLIcon,
  CSSIcon,
  JSIcon,
  ReactIcon,
  DjangoIcon,
} from "./svgs";

const stackArray = [
  "HTML",
  "CSS",
  "Javascript",
  "ReactJS",
  "Django",
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
      
       : (
        <DjangoIcon />
      )}
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