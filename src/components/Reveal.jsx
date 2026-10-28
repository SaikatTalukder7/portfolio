// Reveal component
// Screen e element ta dekha gele (scroll korle) ekbar animate kore dekhay.
// variant: 'up' | 'left' | 'right' | 'scale' | 'none'
// delay: stagger er jonno (1 = 90ms). Style ta animations.css e ache.

import { useEffect, useRef, useState } from 'react'

function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Purono browser e observer na thakle direct dekhiye dey
    if (!('IntersectionObserver' in window)) {
      setShown(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect() // ekbar hole ar dorkar nai
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${shown ? 'is-in' : ''} ${className}`.trim()}
      style={{ '--i': delay, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export default Reveal
