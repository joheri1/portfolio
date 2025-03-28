import { useState, useEffect } from "react";
import { Typography } from "/src/ui/Typography/Typography.jsx";
import { ProjectCard } from "../ui/ProjectCard";
import { Grid } from "../ui/Grid";
import { Button } from "../ui/Button";
import iconArrow from "/src/assets/iconArrow.svg";
import "./Projects.css";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <Grid background="secondary">
      <section id="project-name" className="projects-container">
        <Typography variant="h2" className="projects-heading">Featured Projects</Typography>
        <div className="project-wrapper">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard
              key={project.name}
              image={project.image}
              imageLink={project.link} 
              tags={project.tags}
              title={project.name}
              description={project.description}
              button1Link={project.netlify}
              button2Link={project.github}
              isReversed={index % 2 !== 0}
            />
            ))
          ) : (
            <p className="loading-text">Loading projects...</p>
          )}
        </div>

        <div className="view-more-container">
          <Button
            text="View More Projects"
            isViewMore={true}
            sectionType="project"
            icon={iconArrow}
            href="https://github.com/joheri1?tab=repositories"
            target="_blank"
          />
        </div>
      </section>
    </Grid>
  );
};
