
import { useEffect, useRef, useState } from 'react'
import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiPandas,
  SiCplusplus,
  SiC,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFlutter,
  SiDocker,
  SiLinux,
  SiGit,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPhp,
  SiAndroid
} from 'react-icons/si'
import { FaCss3Alt, FaJava } from 'react-icons/fa6'
import './Skills.css'

const techNodes = [
  { id: 'python', label: 'Python', Icon: SiPython, x: 7.6, y: 25.0, color: '#3776ab', category: 'Language / AI' },
  { id: 'pandas', label: 'Pandas', Icon: SiPandas, x: 5.5, y: 41.0, color: 'rgba(0, 94, 255, 1)', category: 'Data Science' },
  { id: 'pytorch', label: 'PyTorch', Icon: SiPytorch, x: 27.5, y: 72.0, color: '#ee4c2c', category: 'Deep Learning / NLP' },
  { id: 'tensorflow', label: 'TensorFlow', Icon: SiTensorflow, x: 20.0, y: 78.0, color: '#ff6f00', category: 'Deep Learning' },
  { id: 'opencv', label: 'OpenCV', Icon: SiOpencv, x: 18.0, y: 22.0, color: '#5c3cfb', category: 'Computer Vision / Robotics' },
  { id: 'sklearn', label: 'Scikit-Learn', Icon: SiScikitlearn, x: 15.0, y: 68.0, color: '#f7931e', category: 'Machine Learning' },

  { id: 'java', label: 'Java', Icon: FaJava, x: 13.2, y: 40.0, color: '#ea2d2e', category: 'Language' },
  { id: 'cpp', label: 'C++', Icon: SiCplusplus, x: 9.4, y: 55.0, color: '#00599c', category: 'Algorithms / CP' },
  { id: 'c', label: 'C', Icon: SiC, x: 26.5, y: 49.5, color: '#A8B9CC', category: 'Systems / Embedded' },
  { id: 'php', label: 'PHP', Icon: SiPhp, x: 69.0, y: 77.0, color: '#777bb4', category: 'Backend' },

  { id: 'react', label: 'React', Icon: SiReact, x: 32.1, y: 16.5, color: '#61dafb', category: 'Frontend' },
  { id: 'next', label: 'Next.js', Icon: SiNextdotjs, x: 41.5, y: 14.0, color: '#1df500ff', category: 'Full-Stack' },
  { id: 'html5', label: 'HTML5', Icon: SiHtml5, x: 50.8, y: 16.5, color: '#e34f26', category: 'Frontend' },
  { id: 'css3', label: 'CSS3', Icon: FaCss3Alt, x: 42.5, y: 29.5, color: '#264de4', category: 'Frontend' },
  { id: 'tailwind', label: 'Tailwind CSS', Icon: SiTailwindcss, x: 50.5, y: 35.0, color: '#06b6d4', category: 'Styling' },
  { id: 'ts', label: 'TypeScript', Icon: SiTypescript, x: 58.2, y: 23.5, color: '#3178c6', category: 'Language / Frontend' },
  { id: 'js', label: 'JavaScript', Icon: SiJavascript, x: 77.8, y: 13.0, color: '#f7df1e', category: 'Language / Full-Stack' },
  { id: 'flutter', label: 'Flutter', Icon: SiFlutter, x: 40.5, y: 58.5, color: '#02569b', category: 'Mobile App' },
  { id: 'android', label: 'Android', Icon: SiAndroid, x: 67.0, y: 63.5, color: '#3ddc84', category: 'Mobile Dev' },

  { id: 'node', label: 'Node.js', Icon: SiNodedotjs, x: 75.5, y: 44.5, color: '#339933', category: 'Backend Runtime' },
  { id: 'express', label: 'Express.js', Icon: SiExpress, x: 84.5, y: 48.0, color: '#3e9e98ff', category: 'Backend API' },
  { id: 'firebase', label: 'Firebase', Icon: SiFirebase, x: 67.6, y: 28.0, color: '#ffca28', category: 'Cloud / BaaS' },
  { id: 'postgres', label: 'PostgreSQL', Icon: SiPostgresql, x: 92.5, y: 21.0, color: '#008cffff', category: 'SQL Database' },
  { id: 'mysql', label: 'MySQL', Icon: SiMysql, x: 86.5, y: 31.0, color: '#0284c7', category: 'Relational DB' },
  { id: 'mongodb', label: 'MongoDB', Icon: SiMongodb, x: 81.0, y: 63.0, color: '#16a34a', category: 'NoSQL Database' },

  { id: 'docker', label: 'Docker', Icon: SiDocker, x: 57.8, y: 48.5, color: '#2496ed', category: 'DevOps / Containers' },
  { id: 'linux', label: 'Linux', Icon: SiLinux, x: 56.0, y: 67.0, color: '#f59e0b', category: 'Operating System' },
  { id: 'git', label: 'Git', Icon: SiGit, x: 47.0, y: 76.5, color: '#f05032', category: 'Version Control' }
]

const connections = [
  ['python', 'pandas'],
  ['python', 'opencv'],
  ['python', 'java'],
  ['python', 'cpp'],
  ['python', 'c'],
  ['python', 'react'],
  ['pandas', 'sklearn'],
  ['sklearn', 'pytorch'],
  ['sklearn', 'tensorflow'],
  ['tensorflow', 'pytorch'],
  ['pytorch', 'c'],
  ['pytorch', 'git'],
  ['opencv', 'c'],
  ['opencv', 'react'],

  ['java', 'cpp'],
  ['java', 'c'],
  ['cpp', 'c'],
  ['c', 'flutter'],
  ['c', 'css3'],

  ['react', 'next'],
  ['react', 'css3'],
  ['react', 'html5'],
  ['react', 'flutter'],
  ['next', 'html5'],
  ['next', 'ts'],
  ['html5', 'css3'],
  ['html5', 'tailwind'],
  ['html5', 'ts'],
  ['css3', 'tailwind'],
  ['css3', 'flutter'],
  ['css3', 'ts'],
  ['tailwind', 'ts'],
  ['tailwind', 'docker'],
  ['ts', 'js'],
  ['ts', 'firebase'],
  ['ts', 'node'],
  ['ts', 'docker'],

  ['flutter', 'android'],
  ['flutter', 'git'],
  ['flutter', 'docker'],
  ['git', 'docker'],
  ['git', 'linux'],
  ['git', 'android'],
  ['linux', 'docker'],
  ['linux', 'android'],
  ['linux', 'php'],
  ['docker', 'android'],
  ['docker', 'node'],
  ['android', 'node'],
  ['android', 'php'],

  ['js', 'node'],
  ['js', 'firebase'],
  ['js', 'postgres'],
  ['firebase', 'node'],
  ['firebase', 'mysql'],
  ['node', 'express'],
  ['node', 'postgres'],
  ['node', 'mysql'],
  ['node', 'mongodb'],
  ['express', 'mongodb'],
  ['express', 'postgres'],
  ['mysql', 'postgres'],
  ['mysql', 'php'],
  ['mongodb', 'php']
]

function Skills() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const [activeNode, setActiveNode] = useState(null)

  const isTouchDevice = () =>
    window.matchMedia('(hover: none), (pointer: coarse)').matches

  // Mobile-e logo chara page-er jekono jaygay tap korle glow off.
  useEffect(() => {
    const handleOutsideTap = (event) => {
      if (!isTouchDevice()) return

      if (!event.target.closest('.constellation-node')) {
        setActiveNode(null)
      }
    }

    document.addEventListener('pointerdown', handleOutsideTap, true)

    return () => {
      document.removeEventListener('pointerdown', handleOutsideTap, true)
    }
  }, [])

  // Theme change hole glow off.
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setActiveNode(null)
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    })

    return () => observer.disconnect()
  }, [])

  const handleNodeMouseEnter = (node) => {
    if (!isTouchDevice()) {
      setActiveNode(node)
    }
  }

  const handleNodeMouseLeave = () => {
    if (!isTouchDevice()) {
      setActiveNode(null)
    }
  }

  const handleNodeClick = (event, node) => {
    event.currentTarget.blur()

    if (isTouchDevice()) {
      setActiveNode(node)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current

    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = 0
    let height = 0

    const stars = Array.from({ length: 75 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.5 + 0.25,
      speed: Math.random() * 0.00025 + 0.0001
    }))

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      width = rect.width
      height = rect.height

      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      const isLight =
        document.documentElement.getAttribute('data-theme') === 'light'

      stars.forEach((star) => {
        star.y -= star.speed

        if (star.y < 0) star.y = 1

        ctx.beginPath()
        ctx.arc(
          star.x * width,
          star.y * height,
          star.size,
          0,
          Math.PI * 2
        )

        ctx.fillStyle = isLight
          ? `rgba(100, 116, 139, ${star.alpha * 0.6})`
          : `rgba(255, 255, 255, ${star.alpha})`

        ctx.fill()
      })

      connections.forEach(([id1, id2]) => {
        const n1 = techNodes.find((node) => node.id === id1)
        const n2 = techNodes.find((node) => node.id === id2)

        if (!n1 || !n2) return

        const x1 = (n1.x / 100) * width
        const y1 = (n1.y / 100) * height
        const x2 = (n2.x / 100) * width
        const y2 = (n2.y / 100) * height

        const isHighlighted =
          activeNode &&
          (activeNode.id === id1 || activeNode.id === id2)

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)

        if (isHighlighted) {
          ctx.strokeStyle = 'rgba(138, 180, 248, 0.8)'
          ctx.lineWidth = 1.8
        } else {
          ctx.strokeStyle = isLight
            ? 'rgba(71, 85, 105, 0.22)'
            : 'rgba(255, 255, 255, 0.09)'
          ctx.lineWidth = 0.9
        }

        ctx.stroke()
      })

      animationFrameId = window.requestAnimationFrame(render)
    }

    resizeCanvas()
    render()

    const resizeObserver = new ResizeObserver(resizeCanvas)
    resizeObserver.observe(container)

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [activeNode])

  return (
    <section id="skills" className="section skills skills-section">
      <div className="container">
        <div className="section-head skills-header-top reveal-on-scroll">
          <h2>Skills &amp; Technologies</h2>
          <p className="skills-section-sub">
            Interactive constellation of core languages, AI frameworks, tools, and platforms
          </p>
        </div>

        <div
          ref={containerRef}
          className="constellation-wrapper reveal-on-scroll"
          onMouseLeave={() => {
            if (!isTouchDevice()) {
              setActiveNode(null)
            }
          }}
        >
          <canvas
            ref={canvasRef}
            className="constellation-canvas"
            aria-hidden="true"
          />

          {techNodes.map((node) => {
            const isActive = activeNode?.id === node.id
            const NodeIcon = node.Icon

            return (
              <button
                type="button"
                key={node.id}
                className={`constellation-node ${isActive ? 'is-active' : ''}`}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  '--node-color': node.color
                }}
                onMouseEnter={() => handleNodeMouseEnter(node)}
                onMouseLeave={handleNodeMouseLeave}
                onTouchStart={() => {
                  if (isTouchDevice()) {
                    setActiveNode(node)
                  }
                }}
                onFocus={() => {
                  if (!isTouchDevice()) {
                    setActiveNode(node)
                  }
                }}
                onBlur={() => {
                  if (!isTouchDevice()) {
                    setActiveNode(null)
                  }
                }}
                onClick={(event) => handleNodeClick(event, node)}
                aria-label={`${node.label}: ${node.category}`}
              >
                <span className="node-circle">
                  <NodeIcon
                    className="node-icon-svg"
                    aria-hidden="true"
                  />
                </span>
              </button>
            )
          })}

          {activeNode && (
            <div
              className="constellation-tooltip"
              role="status"
              key={activeNode.id}
            >
              <span className="tooltip-category">
                {activeNode.category}
              </span>
              <strong className="tooltip-title">
                {activeNode.label}
              </strong>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills
