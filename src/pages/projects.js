import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom'
import ProjectCard from '../components/project_card'
import '../styles/projects.css'

const Projects = () => {
  return (
    <div className="text-center mt-5 mb-5">
      <h1>Projects</h1>
      <div className="d-flex flex-column align-items-center mt-5">
        <ProjectCard name="Project1" time="August 2024" content="This is a project card!" link="/projects/project1"/>
        <svg className="vertical-swirl-line" width="100" height="120" viewBox="0 0 100 120" preserveAspectRatio="none">
          <path d="M50,0 
                  C70,30 90,40 60,60 
                  C40,80 80,90 50,120"
            className="line line-1"
            fill="transparent"
            stroke="#333533" stroke-width="4" />
        </svg>
        <ProjectCard name="Project1" content="This is a project card!" link="/projects/project1"/>
        <svg class="vertical-swirl-line" width="100" height="120" viewBox="0 0 100 120" preserveAspectRatio="none">
          <path
            d="M60,0 C50,20 80,60 60,80 C40,100 80,110 60,130"
            fill="transparent"
            stroke="black"
            stroke-width="4"
            stroke-linecap="round"
            className="line line-2"
          />
        </svg>
        <ProjectCard name="Project1" content="This is a project card!" link="/projects/project1"/>
        <svg class="vertical-swirl-line" width="100" height="140" viewBox="0 0 100 140" preserveAspectRatio="none">
          <path
            d="M55,0 C45,25 85,40 55,70 C35,90 75,120 55,140"
            fill="transparent"
            stroke="black"
            stroke-width="4"
            stroke-linecap="round"
            className="line line-3"
          />
        </svg>
        <ProjectCard name="Project1" content="This is a project card!" link="/projects/project1"/>
      </div>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".line");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const path = entry.target;
        path.style.strokeDashoffset = "0"; // Trigger the animation
        observer.unobserve(path); // Stop observing once animation is triggered
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the line is visible
  });

  lines.forEach((line) => {
    observer.observe(line); // Start observing each line
  });
});

export default Projects;
