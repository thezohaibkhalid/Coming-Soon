'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const technologies = [
  {
    section: "Frontend",
    techs: [
      { name: 'HTML', icon: '<!>' },
      { name: 'CSS', icon: '{;}' },
      { name: 'JavaScript', icon: '(js)' },
      { name: 'React', icon: '</>'},
      { name: 'TypeScript', icon: '<T>' },
    ]
  },
  {
    section: "Backend",
    techs: [
      { name: 'Python', icon: '>>>' },
      { name: 'Flask', icon: '🍶' },
      { name: 'PHP', icon: '<?>' },
      { name: 'Laravel', icon: '🔺' },
      { name: 'Node.js', icon: '{}' },
      { name: 'Express.js', icon: '⚡' },
    ]
  },
  {
    section: "Database",
    techs: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'SQL', icon: '[ ]' },
      { name: 'SQLite', icon: '📁' },
    ]
  },
  {
    section: "Other",
    techs: [
      { name: 'Go', icon: '🐹' },
      { name: 'C++', icon: '++' },
      { name: 'Java', icon: '☕' },
    ]
  }
]

export function TechGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (gridRef.current) {
      gsap.from(gridRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "power2.out"
      })
    }
  }, [])

  return (
    <div ref={gridRef} className="space-y-8">
      {technologies.map((section) => (
        <div key={section.section} className="space-y-4">
          <h3 className="text-xl font-bold text-green-400">{'> '}{section.section}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {section.techs.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 p-4 bg-black/40 border border-green-500/20 rounded-lg
                           hover:bg-green-500/5 hover:border-green-500/40 transition-all duration-300"
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-sm font-mono text-green-500/80">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

