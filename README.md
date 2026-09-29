# Saikat Talukder — Portfolio

A personal portfolio site built with React + Vite. No backend — everything is a static frontend.

## Running it locally

You need [Node.js](https://nodejs.org/) (18+) installed.

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

To build a production version:

```bash
npm run build
npm run preview   # preview the built version locally
```

## Project structure

```
src/
  main.jsx              entry point, mounts <App />
  index.css              global design tokens (colors, fonts, spacing) + base styles
  App.jsx                 assembles the page from section components
  data/
    portfolioData.js      all the content: bio, skills, projects, education, contact links
  components/
    Navbar.jsx / .css      sticky nav bar with mobile hamburger menu
    Hero.jsx / .css        terminal-style intro animation
    About.jsx / .css       bio + quick facts
    Skills.jsx / .css      skills grouped by category
    Projects.jsx / .css    project list
    Education.jsx / .css   degree, coursework, activity
    Contact.jsx / .css     contact links
    Footer.jsx / .css      footer
public/
  images/                 put saikat.png and diagram.jpg here
  resume.pdf              your resume — the Hero "Download resume" button links here
```

## Editing content

Almost everything text-based lives in `src/data/portfolioData.js` — update your bio, skills,
project descriptions, GitHub links, etc. there without touching any component code.

To add a real project link, set the `link` field on a project in that file to the repo URL,
and the "View repository" link will appear automatically.

## Customizing the look

Colors, fonts, and spacing are defined as CSS variables at the top of `src/index.css`
(the `:root` block) — change a value there and it updates everywhere the token is used.
