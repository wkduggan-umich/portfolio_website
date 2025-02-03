import ProjectCard from '../components/project_card'
import '../styles/projects.css'

const Projects = () => {
  return (
    <div className="text-center mt-5 mb-5">
      <h1>Projects</h1>
      <div className="d-flex flex-column align-items-center mt-5">
        <ProjectCard name="MNIST Digit Recognition" time="Present" content="I'm currently working on a hand written numerical digit recognizer, training on the MNIST database." link="/projects/mnist"/>
        <svg className="vertical-swirl-line" width="100" height="120" viewBox="0 0 100 120" preserveAspectRatio="none">
          <path d="M50,0 
                  C70,30 90,40 60,60 
                  C40,80 80,90 50,120"
            className="line"
            fill="transparent"
            stroke="#333533" stroke-width="4" />
        </svg>
        <ProjectCard name="Personal Website" time="Present" content="I'm currently working on this personal portfolio website!" link="/projects/personal-portfolio"/>
        <svg class="vertical-swirl-line" width="100" height="140" viewBox="0 0 100 140" preserveAspectRatio="none">
          <path
            d="M55,0 C45,25 85,40 55,70 C35,90 75,120 55,140"
            fill="transparent"
            stroke="#333533"
            stroke-width="4"
            stroke-linecap="round"
            className="line"
          />
        </svg>
        <ProjectCard name="HSAT Autograder" time="Fall 2024" content="In collaboration with Chitown Tutors, I ideated, designed, and implemented a HSAT autograding using Google API and Google Cloud." link="/projects/hsat-autograder"/>
        <svg class="vertical-swirl-line" width="100" height="120" viewBox="0 0 100 120" preserveAspectRatio="none">
          <path
            d="M60,0 C50,20 80,60 60,80 C40,100 80,110 60,130"
            fill="transparent"
            stroke="#333533"
            stroke-width="4"
            stroke-linecap="round"
            className="line"
          />
        </svg>
        <ProjectCard name="Michigan Mentors C++ Course" time="Summer 2024" content="As the director of computer science at Michigan Mentors, I created eight C++ problem sets and the starter code for a data analysis final project." link="/projects/michigan-mentors-cpp"/>
        <svg class="vertical-swirl-line" width="100" height="140" viewBox="0 0 100 120" preserveAspectRatio="none">
          <path
            d="M50,0 C30,20 70,40 50,60 
                  C20,80 80,100 50,120"
            fill="transparent"
            stroke="#333533"
            stroke-width="4"
            stroke-linecap="round"
            className="line"
          />
        </svg>
        <ProjectCard name="Windmill" time="Fall 2022" content="In a group with 4 other engineering students, we designed, created, and tested a windmill that powered a light buld!" link="/projects/windmill"/>
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
