// Skills section
// Skills gula portfolioData.js theke ashe and category wise show kore.
import { skills } from '../data/portfolioData.js'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {/* Prottek category and tar skill gula show kore */}
          {Object.entries(skills).map(([category, items]) => (
            <div className="skills-group" key={category}>
              <h3 className="skills-group-title">{category}</h3>

              <ul className="skills-tags">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

