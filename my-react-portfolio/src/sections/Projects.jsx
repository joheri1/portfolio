import { useState, useEffect } from "react";
import { Typography } from "/src/ui/Typography/Typography.jsx";
import { ProjectCard } from "../ui/ProjectCard";
import { Grid } from "../ui/Grid";
import { Button } from "../ui/Button";
import iconArrowWhite from "/src/assets/iconArrowWhite.svg";
import "./Projects.css";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3); // Start with showing 3 projects

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

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Add three more projects when button is clicked
  };

  return (
    <Grid background="secondary">
      <section id="projects" className="projects-section">
        <Typography variant="h2" className="projects-heading">Featured Projects</Typography>

        <div className="project-wrapper">
          {projects.length > 0 ? (
            projects
              .slice(0, visibleCount)
              .map((project, index) => (
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
                  className="fade-in"
                />
              ))
          ) : (
            <p className="loading-text">Loading projects...</p>
          )}
        </div>

        {visibleCount < projects.length && (
          <div className="view-more-container">
            <Button
              text="View More Projects"
              isViewMore={true}
              sectionType="project"
              icon={iconArrowWhite}
              onClick={handleViewMore} // Function to load more projects
            />
          </div>
        )}
      </section>
    </Grid>
  );
};

