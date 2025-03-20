import { useState, useEffect } from "react";
import { Heading } from "/src/ui/Heading.jsx";
import { ProjectCard } from "../ui/ProjectCard";
import { Grid } from "../ui/Grid";
import { Button } from "../ui/Button";
import { Tag } from "../ui/Tag";
import iconArrow from "/src/assets/iconArrow.svg";
import "./Projects.css";

export const Projects = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
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

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Grid background="secondary">
      <div className="projects-container">
        <Heading heading="Featured Projects" />

        <div className="project-wrapper">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                imageSource={`/assets/${project.image.replace("/", "")}`} 
                cardTag={project.tags}
                cardTitle={project.name}
                cardDescription={project.description}
                sectionType="project"
                netlify={project.netlify}
                github={project.github}
                isReversed={isDesktop && index % 2 === 1}
              >
                <div className="tag-container">
                  {project.tags.map((tag, i) => (
                    <Tag key={i} sectionType="project" text={tag} />
                  ))}
                </div>
              </ProjectCard>
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
      </div>
    </Grid>
  );
};
