// Footer section
// Copyright and React use korar note show kore.

import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Saikat Talukder</span>
        <span className="footer-note">Built with React</span>
      </div>
    </footer>
  )
}

export default Footer