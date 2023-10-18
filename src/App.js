import React from "react";

const App = () => {
  const portfolioData = {
    name: "Madhusudan Das",
    skills: ["Cloud Practitioner","Java & C++", "Web Development(Mern)", "Database(mySQL & MongoDB)","Flutter"],
    projects: [
      {
        title: "Farm2You | Agri-Tech Project",
        description: "Farm2Home website delivers farm-fresh, locally sourced produce directly to your doorstep, simplifying your access to quality agricultural products while supporting local farmers.",
      },
      {
        title: "MN-204 | Automated Car System",
        description: "Integrating Raspberry Pi with high-definition cameras, live streaming capabilities, and sensor modules empowers users to engage with and explore their environment in real-time.",
      },
      {
        title: "Madhusudan | Portfolio Website",
        description: "Explore my portfolio website, a dynamic showcase of my work powered by HTML, CSS, and JavaScript with the flexibility of Flexbox.",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
        </div>
        <div className="body">
          <div className="about">
            <h3><u>Description about me:</u></h3>
            <p>Hey! I am Madhusudan and I am pursuing my B.Tech Degree from VIT in IT. I love to code and learn new things related to computer and its beauty</p>
          </div>
          <div className="skills">
            <h3><u>Skills:</u></h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3><u>Some Personal Projects: </u></h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              </ul>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
