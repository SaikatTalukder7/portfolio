// About section
// Ekhane amar bio and coding platform profile gula ache.

import { profile, codingTrack } from '../data/portfolioData.js'
import './About.css'

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-inner">
        {/* Amar bio ekhane show kore */}
        <div className="about-text">
          <div className="section-head">
            <h2>About</h2>
          </div>

          <p className="about-bio">{profile.bio}</p>
        </div>

        {/* Amar coding platform profile gula */}
        <div className="coding-track">
          <h3 className="coding-track-title">Coding Track</h3>

          <ul className="coding-track-list">
            {codingTrack.map((item) => (
              <li key={item.platform}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <span className="coding-platform">{item.platform}</span>
                  <span className="coding-handle">{item.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
