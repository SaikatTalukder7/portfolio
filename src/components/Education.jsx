// Education section
// Ekhane amar education, coursework and academic activity ache.

import { education } from '../data/portfolioData.js'
import './Education.css'

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head">
          <h2>Education</h2>
        </div>

        <div className="education-entry">
          {/* Amar degree, university, year and CGPA */}
          <div className="education-main">
            <h3>{education.degree}</h3>
            <p className="education-university">{education.university}</p>
            <p className="education-status">{education.status}</p>
          </div>

          <div className="education-details">
            {/* Amar relevant coursework */}
            <div>
              <h4>Relevant coursework</h4>
              <ul className="education-tags">
                {education.coursework.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education