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
      <p className="type5">{desc}</p>
    </div>
  );
};
export const ServiceCards = () => {
  return (
    <>
      <ServiceCard
        type="server-side"
        title="Server-Side Expertise"
        desc="Logic Implementation: Skilled in developing server-side logic for authentication, authorization, and business processes.
        API Creation: Proficient in building APIs to ensure smooth communication between frontend and backend.
        Database Management: Adept in designing and optimizing databases for efficient data storage and retrieval."
      />
      <ServiceCard
        type="security"
        title="Security and Optimization"
        desc="Security Measures: Adept at implementing security protocols, protecting applications from common vulnerabilities.
        Optimization: Specialized in optimizing server-side code and database queries for enhanced application performance.
        Logging and Monitoring: Skilled in setting up logging and monitoring tools for swift issue identification and resolution."
      />
      <ServiceCard
        type="integration"
        title="Integration and deployment"
        desc="Server Configuration: Proficient in configuring and managing servers, selecting suitable hosting solutions, and ensuring seamless application deployment.
        Third-Party Integration: Skilled at integrating external services, APIs, and libraries to augment application functionality.
        Scalability Planning: interested in designing scalable systems, caching, and horizontal scaling."
      />
      
    </>
  );
};

export default ServiceCards;