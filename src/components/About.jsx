// About section
// Ekhane amar bio and coding platform profile gula ache.

import { profile, codingTrack } from '../data/portfolioData.js'
import Reveal from './Reveal.jsx'
import './About.css'

function About() {
  // Bio te faka line thakle alada paragraph hishebe animate hobe
  const paragraphs = profile.bio.split('\n\n')

  return (
    <section id="about" className="section about">
      <div className="container about-inner">
        {/* Amar bio ekhane show kore */}
        <div className="about-text">
          <Reveal className="section-head">
            <h2>About</h2>
          </Reveal>

          {paragraphs.map((text, i) => (
            <Reveal as="p" className="about-bio" delay={i + 1} key={i}>
              {text}
            </Reveal>
          ))}
        </div>

        {/* Amar coding platform profile gula */}
        <Reveal className="coding-track" variant="right" delay={2}>
          <h3 className="coding-track-title">Coding Track</h3>

          <ul className="coding-track-list">
            {codingTrack.map((item, i) => (
              <Reveal as="li" variant="right" delay={i + 3} key={item.platform}>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <span className="coding-platform">{item.platform}</span>
                  <span className="coding-handle">{item.handle}</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default About
