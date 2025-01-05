'use client';

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const technologies = [
  {
    section: 'Frontend',
    techs: [
      { name: 'HTML', icon: '<!>' },
      { name: 'CSS', icon: '{;}' },
      { name: 'JavaScript', icon: '(js)' },
      { name: 'React', icon: '</>' },
      { name: 'TypeScript', icon: '<T>' },
      { name: 'Tkinter', icon: '🖥️' },
      { name: 'Tailwind CSS', icon: '🌪️' },
      { name: 'Bootstrap', icon: '⚡' },
      { name: 'Framer Motion', icon: '🎬' },
    ],
  },
  {
    section: 'Backend',
    techs: [
      { name: 'Python', icon: '>>>' },
      { name: 'Flask', icon: '🍶' },
      { name: 'PHP', icon: '<?>' },
      { name: 'Laravel', icon: '🔺' },
      { name: 'Node.js', icon: '{}' },
      { name: 'Express.js', icon: '⚡' },
      { name: 'Golang', icon: '🐹' },
    ],
  },
  {
    section: 'Database',
    techs: [
      { name: 'PostgreSQL', icon: '🗃️' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'SQL', icon: '[]' },
      { name: 'SQLite', icon: '📁' },
    ],
  },
  {
    section: 'Other',
    techs: [
      { name: 'C++', icon: '++' },
      { name: 'Python', icon: '>>>' },
    ],
  },
];

export function TechGrid() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const containerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleSection = (section: string) => {
    const isExpanding = expandedSection !== section;

    // Animate closing the currently expanded section (if any)
    if (expandedSection && containerRefs.current[expandedSection]) {
      gsap.to(containerRefs.current[expandedSection], {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          if (!isExpanding) setExpandedSection(null);
        },
      });
    }

    // Animate opening the new section
    if (isExpanding) {
      setExpandedSection(section);
      if (containerRefs.current[section]) {
        gsap.fromTo(
          containerRefs.current[section],
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.inOut' }
        );
      }
    }
  };

  return (
    <div className="space-y-8">
      {technologies.map((section) => {
        const isExpanded = expandedSection === section.section;

        return (
          <div key={section.section} className="space-y-4">
            <h3
              className={`text-xl font-bold cursor-pointer text-green-400 transition-colors ${
                isExpanded ? 'text-green-500' : ''
              }`}
              onClick={() => toggleSection(section.section)}
            >
              {isExpanded ? '▼' : '▶'} {section.section}
            </h3>
            <div
              ref={(ref) => (containerRefs.current[section.section] = ref)}
              className={`overflow-hidden`}
              style={{ height: 0, opacity: 0 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-2">
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
          </div>
        );
      })}
    </div>
  );
}
