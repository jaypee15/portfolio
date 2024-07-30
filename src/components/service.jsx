import React from "react";
import {DatabaseIcon, CodeIcon,SecurityIcon, IntegrationIcon,} from "./svgs";

const ServiceCard = ({ type, title, desc }) => {
  return (
    <div className="service-card">
      <div className="service-card-icon">
        {type === "server-side" ? (
          <DatabaseIcon />
        ) : type === "security" ? (
          <SecurityIcon />
        ) : type === "integration" ? (
          <IntegrationIcon />
        )  : (
          <CodeIcon />
        )}
      </div>
      <h3>{title}</h3>
      {/* <p className="type5">{desc}</p> */}
      <p className="type5" dangerouslySetInnerHTML={{ __html: desc }}></p>
    </div>
  );
};
export const ServiceCards = () => {
  return (
    <>
      <ServiceCard
        type="server-side"
        title="Server-Side Expertise"
        desc="<strong>Logic Implementation:</strong> Skilled in developing server-side logic for authentication, authorization, and business processes.
        <strong>API Creation:</strong> Proficient in building APIs to ensure smooth communication between frontend and backend.
        <strong>Database Management:</strong> Adept in designing and optimizing databases for efficient data storage and retrieval."
      />
      <ServiceCard
        type="security"
        title="Security and Optimization"
        desc="<strong>Security Measures:</strong> Adept at implementing security protocols, protecting applications from common vulnerabilities.
        <strong>Optimization:</strong> Specialized in optimizing server-side code and database queries for enhanced application performance.
        <strong>Logging and Monitoring:</strong> Skilled in setting up logging and monitoring tools for swift issue identification and resolution."
      />
      <ServiceCard
        type="integration"
        title="Integration and deployment"
        desc="<strong>Server Configuration:</strong> Proficient in configuring and managing servers, selecting suitable hosting solutions, and ensuring seamless application deployment.
        <strong>Third-Party Integration:</strong> Skilled at integrating external services, APIs, and libraries to augment application functionality.
        <strong>Scalability Planning:</strong> interested in designing scalable systems, caching, and horizontal scaling."
      />
      
    </>
  );
};

export default ServiceCards;