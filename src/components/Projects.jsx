// Projects section
// Project gula portfolioData.js theke ashe and card akare show kore.
// Mouse card er upor nile card ektu tilt hoy and cursor er pichone alo ghure.
import { projects } from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'
import './Projects.css'

// Mouse er position onujayi tilt value set kore
const handleMove = (e) => {
  // Touch / pen e tilt dorkar nai, reduced motion e o na
  if (e.pointerType !== 'mouse') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width
  const y = (e.clientY - rect.top) / rect.height

  card.style.setProperty('--tilt-x', `${((0.5 - y) * 6).toFixed(2)}deg`)
  card.style.setProperty('--tilt-y', `${((x - 0.5) * 6).toFixed(2)}deg`)
  card.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`)
  card.style.setProperty('--my', `${(y * 100).toFixed(1)}%`)
}

// Mouse sore gele card abar shoja hoye jay
const handleLeave = (e) => {
  const card = e.currentTarget
  card.style.setProperty('--tilt-x', '0deg')
  card.style.setProperty('--tilt-y', '0deg')
}

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal className="section-head">
          <h2>Projects</h2>
        </Reveal>

        <div className="projects-list">
          {/* Prottek project er jonno ekta kore card create kore */}
          {projects.map((project, index) => (
            <Reveal
              as="article"
              className="project"
              delay={index % 3}
              key={project.title}
              onPointerMove={handleMove}
              onPointerLeave={handleLeave}
            >
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
                  {project.tech.map((tech, i) => (
                    <li key={tech} style={{ '--k': i }}>
                      {tech}
                    </li>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
