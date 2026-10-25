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

// x/y nai ekhon: position ring + angle theke calculate hoy.
const techNodes = [
  { id: 'c', label: 'C', Icon: SiC, color: '#A8B9CC', category: 'Systems / Embedded' },

  { id: 'python', label: 'Python', Icon: SiPython, color: '#3776ab', category: 'Language / AI' },
  { id: 'pandas', label: 'Pandas', Icon: SiPandas, color: 'rgba(0, 94, 255, 1)', category: 'Data Science' },
  { id: 'pytorch', label: 'PyTorch', Icon: SiPytorch, color: '#ee4c2c', category: 'Deep Learning / NLP' },
  { id: 'tensorflow', label: 'TensorFlow', Icon: SiTensorflow, color: '#ff6f00', category: 'Deep Learning' },
  { id: 'opencv', label: 'OpenCV', Icon: SiOpencv, color: '#5c3cfb', category: 'Computer Vision / Robotics' },
  { id: 'sklearn', label: 'Scikit-Learn', Icon: SiScikitlearn, color: '#f7931e', category: 'Machine Learning' },

  { id: 'java', label: 'Java', Icon: FaJava, color: '#ea2d2e', category: 'Language' },
  { id: 'cpp', label: 'C++', Icon: SiCplusplus, color: '#00599c', category: 'Algorithms / CP' },
  { id: 'php', label: 'PHP', Icon: SiPhp, color: '#777bb4', category: 'Backend' },

  { id: 'react', label: 'React', Icon: SiReact, color: '#61dafb', category: 'Frontend' },
  { id: 'next', label: 'Next.js', Icon: SiNextdotjs, color: '#1df500ff', category: 'Full-Stack' },
  { id: 'html5', label: 'HTML5', Icon: SiHtml5, color: '#e34f26', category: 'Frontend' },
  { id: 'css3', label: 'CSS3', Icon: FaCss3Alt, color: '#264de4', category: 'Frontend' },
  { id: 'tailwind', label: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06b6d4', category: 'Styling' },
  { id: 'ts', label: 'TypeScript', Icon: SiTypescript, color: '#3178c6', category: 'Language / Frontend' },
  { id: 'js', label: 'JavaScript', Icon: SiJavascript, color: '#f7df1e', category: 'Language / Full-Stack' },
  { id: 'flutter', label: 'Flutter', Icon: SiFlutter, color: '#02569b', category: 'Mobile App' },
  { id: 'android', label: 'Android', Icon: SiAndroid, color: '#3ddc84', category: 'Mobile Dev' },

  { id: 'node', label: 'Node.js', Icon: SiNodedotjs, color: '#339933', category: 'Backend Runtime' },
  { id: 'express', label: 'Express.js', Icon: SiExpress, color: '#3e9e98ff', category: 'Backend API' },
  { id: 'firebase', label: 'Firebase', Icon: SiFirebase, color: '#ffca28', category: 'Cloud / BaaS' },
  { id: 'postgres', label: 'PostgreSQL', Icon: SiPostgresql, color: '#008cffff', category: 'SQL Database' },
  { id: 'mysql', label: 'MySQL', Icon: SiMysql, color: '#0284c7', category: 'Relational DB' },
  { id: 'mongodb', label: 'MongoDB', Icon: SiMongodb, color: '#16a34a', category: 'NoSQL Database' },

  { id: 'docker', label: 'Docker', Icon: SiDocker, color: '#2496ed', category: 'DevOps / Containers' },
  { id: 'linux', label: 'Linux', Icon: SiLinux, color: '#f59e0b', category: 'Operating System' },
  { id: 'git', label: 'Git', Icon: SiGit, color: '#f05032', category: 'Version Control' }
]

// radius = orbit size (0 theke 1), speed = radian/second (bhetore druto, baire dhire)
const rings = [
  { radius: 0.26, speed: 0.3, ids: ['cpp', 'java', 'python', 'linux'] },
  { radius: 0.46, speed: 0.2, ids: ['pandas', 'sklearn', 'opencv', 'tensorflow', 'pytorch', 'docker'] },
  { radius: 0.68, speed: 0.14, ids: ['html5', 'css3', 'tailwind', 'ts', 'js', 'react', 'next', 'flutter'] },
  { radius: 0.9, speed: 0.1, ids: ['android', 'node', 'express', 'php', 'firebase', 'mongodb', 'mysql', 'postgres'] }
]

const connections = [
  // C (Sun): onek language/tool er core C te lekha
  ['c', 'cpp'],
  ['c', 'python'],
  ['c', 'php'],
  ['c', 'linux'],
  ['c', 'git'],
  ['c', 'postgres'],

  // Python + AI / Data
  ['python', 'pandas'],
  ['python', 'sklearn'],
  ['python', 'pytorch'],
  ['python', 'tensorflow'],
  ['python', 'opencv'],
  ['python', 'docker'],
  ['pandas', 'sklearn'],
  ['cpp', 'pytorch'],
  ['cpp', 'tensorflow'],
  ['cpp', 'opencv'],

  // Mobile
  ['java', 'android'],
  ['cpp', 'android'],
  ['cpp', 'flutter'],
  ['flutter', 'android'],
  ['flutter', 'firebase'],
  ['android', 'firebase'],
  ['android', 'linux'],

  // Frontend / Web
  ['html5', 'css3'],
  ['html5', 'js'],
  ['css3', 'tailwind'],
  ['html5', 'tailwind'],
  ['js', 'ts'],
  ['js', 'react'],
  ['ts', 'react'],
  ['react', 'html5'],
  ['react', 'css3'],
  ['react', 'tailwind'],
  ['react', 'next'],
  ['next', 'ts'],
  ['next', 'tailwind'],
  ['next', 'node'],

  // Backend / Database
  ['js', 'node'],
  ['ts', 'node'],
  ['node', 'express'],
  ['node', 'mongodb'],
  ['node', 'postgres'],
  ['node', 'mysql'],
  ['node', 'firebase'],
  ['node', 'docker'],
  ['express', 'mongodb'],
  ['express', 'postgres'],
  ['js', 'firebase'],
  ['php', 'mysql'],
  ['php', 'html5'],
  ['php', 'linux'],

  // DevOps
  ['docker', 'linux'],
  ['git', 'linux']
]

// Prottek node er ring index ar starting angle ek-bar-i calculate kora hoy.
const orbitInfo = {}
rings.forEach((ring, ringIndex) => {
  ring.ids.forEach((id, i) => {
    orbitInfo[id] = {
      ring,
      ringIndex,
      angle0: (i / ring.ids.length) * Math.PI * 2 + ringIndex * 0.9
    }
  })
})

// Phone-e orbit gulo ektu beshi ছড়িয়ে dewa hoy jate logo ghesha-ghesi na kore.
const mobileRadii = [0.33, 0.55, 0.77, 0.98]
const getRingRadius = (ring, index, width) =>
  width < 720 ? mobileRadii[index] : ring.radius

function Skills() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const nodeRefs = useRef({})
  const activeRef = useRef(null)
  const [activeNode, setActiveNode] = useState(null)

  const isTouchDevice = () =>
    window.matchMedia('(hover: none), (pointer: coarse)').matches

  // animation loop ke re-render chhara active node jananor jonno.
  useEffect(() => {
    activeRef.current = activeNode
  }, [activeNode])

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

  // Canvas (tara + orbit + highlight line) ar node position animation.
  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current

    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    let animationFrameId
    let width = 0
    let height = 0
    let time = 0
    let lastTs = 0
    const positions = {}

    const stars = Array.from({ length: 75 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.5 + 0.25,
      speed: Math.random() * 0.00025 + 0.0001
    }))

    const getPadding = () => (width < 720 ? 22 : 44)

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

    const placeNodes = () => {
      const cx = width / 2
      const cy = height / 2
      const rx = cx - getPadding()
      const ry = cy - getPadding()

      techNodes.forEach((node) => {
        let x = cx
        let y = cy

        const info = orbitInfo[node.id]
        if (info) {
          const angle = info.angle0 + time * info.ring.speed
          const radius = getRingRadius(info.ring, info.ringIndex, width)
          x = cx + Math.cos(angle) * rx * radius
          y = cy + Math.sin(angle) * ry * radius
        }

        positions[node.id] = [x, y]

        const el = nodeRefs.current[node.id]
        if (el) {
          el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
        }
      })
    }

    const render = (ts) => {
      const dt = lastTs ? (ts - lastTs) / 1000 : 0
      lastTs = ts

      const active = activeRef.current

      // Hover/tap korle sob ghora thame.
      if (!active && !reduceMotion) time += dt

      placeNodes()
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

      // Orbit ring (dotted)
      const cx = width / 2
      const cy = height / 2
      const pad = getPadding()

      rings.forEach((ring, index) => {
        const radius = getRingRadius(ring, index, width)

        ctx.beginPath()
        ctx.ellipse(
          cx,
          cy,
          (cx - pad) * radius,
          (cy - pad) * radius,
          0,
          0,
          Math.PI * 2
        )
        ctx.strokeStyle = isLight
          ? 'rgba(15, 23, 42, 0.5)'
          : 'rgba(255, 255, 255, 0.22)'
        ctx.lineWidth = isLight ? 1.2 : 1.0
        ctx.setLineDash([3, 6])
        ctx.stroke()
        ctx.setLineDash([])
      })

      // Shudhu active node er connection line dekhabe.
      if (active) {
        connections.forEach(([id1, id2]) => {
          if (active.id !== id1 && active.id !== id2) return

          const p1 = positions[id1]
          const p2 = positions[id2]
          if (!p1 || !p2) return

          ctx.beginPath()
          ctx.moveTo(p1[0], p1[1])
          ctx.lineTo(p2[0], p2[1])
          ctx.strokeStyle = '#00e5ff'
          ctx.lineWidth = 1.8
          ctx.stroke()
        })
      }

      animationFrameId = window.requestAnimationFrame(render)
    }

    resizeCanvas()
    animationFrameId = window.requestAnimationFrame(render)

    const resizeObserver = new ResizeObserver(resizeCanvas)
    resizeObserver.observe(container)

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section id="skills" className="section skills skills-section">
      <div className="container">
        <div className="section-head skills-header-top reveal-on-scroll">
          <h2>Skills &amp; Technologies</h2>
          <p className="skills-section-sub">
            Interactive solar system of core languages, AI frameworks, tools, and platforms
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
            const isSun = node.id === 'c'
            const NodeIcon = node.Icon

            return (
              <button
                type="button"
                key={node.id}
                ref={(el) => {
                  nodeRefs.current[node.id] = el
                }}
                className={`constellation-node ${isSun ? 'sun' : ''} ${isActive ? 'is-active' : ''}`}
                style={{ '--node-color': node.color }}
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