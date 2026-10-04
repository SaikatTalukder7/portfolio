// Projects section
// Project gula portfolioData.js theke ashe and card akare show kore.
import { projects } from '../data/portfolioData.js'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <h2>Projects</h2>
        </div>

        <div className="projects-list">
          {/* Prottek project er jonno ekta kore card create kore */}
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Contribution thakle ekhane show kore */}
                {project.contribution && (
                  <ul className="project-contribution">
                    {project.contribution.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {/* Project er tech stack show kore */}
                <ul className="project-tech">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                {/* Project er GitHub repository link */}
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              </div>

              {/* Image thakle project er image show kore */}
              {project.image && (
                <div className="project-media">
                  <img
                    src={project.image}
                    alt={`${project.title} visual`}
                    loading="lazy"
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
