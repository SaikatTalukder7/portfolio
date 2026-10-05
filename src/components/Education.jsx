// Education section
// Ekhane amar education gula separate card akare show kora hocche.

import { education } from '../data/portfolioData.js'
import './Education.css'

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">

        <div className="section-head">
          <h2>Education</h2>
        </div>

        <div className="education-list">

          {education.map((item, index) => (

            <article className="education-entry" key={item.degree}>

              {/* Education type onujayi icon */}
              <div className={`education-icon education-icon-${index}`}>

                {index === 0 ? (
                  <span>🎓</span>
                ) : index === 1 ? (
                  <span>🏤</span>
                ) : (
                  <span>🏫</span>
                )}

              </div>

              <div className="education-card">

                {/* Left side: short form and time */}
                <div className="education-left">

                  <h3>
                    {index === 0
                      ? 'B.Sc. in CSE'
                      : index === 1
                        ? 'HSC'
                        : 'SSC'}
                  </h3>

                  <p className="education-time">
                    🗓️ {item.time}
                  </p>

                </div>

                {/* Middle: institution and education details */}
                <div className="education-middle">

                  <p className="education-institution">
                    {item.institution}
                  </p>

                  <p className="education-meta">
                    {item.location}
                  </p>

                  <p className="education-program">
                    {item.degree}
                  </p>

                  <p className="education-meta">

                    {item.status
                      ? `Status: ${item.status}`
                      : `Group: ${item.group}`}

                    {item.result && (
                      <>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Result: {item.result}
                      </>
                    )}

                  </p>

                </div>

                {/* Right side: status badge */}
                <div className="education-right">

                  <span
                    className={`education-status ${
                      item.status ? 'running' : 'completed'
                    }`}
                  >
                    {item.status ? 'Running' : 'Completed'}
                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  )
}

export default Education