"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "RPA & Automation",
    icon: "🤖",
    color: "blue",
    technologies: ["UiPath", "Automation Anywhere", "Blue Prism", "Power Automate"],
    description: "End-to-end automation solutions for business processes"
  },
  {
    category: "Data & Analytics",
    icon: "📊",
    color: "purple",
    technologies: ["Power BI", "Tableau", "SQL", "Python", "R"],
    description: "Transform data into actionable business insights"
  },
  {
    category: "Software Development",
    icon: "💻",
    color: "green",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Python"],
    description: "Modern web applications and software solutions"
  },
  {
    category: "Cloud & Database",
    icon: "☁️",
    color: "orange",
    technologies: ["AWS", "Azure", "PostgreSQL", "MongoDB", "Docker"],
    description: "Scalable cloud infrastructure and database management"
  }
];

export function SkillsShowcase() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning automation, analytics, and software development 
            to deliver end-to-end solutions for modern businesses.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className={`w-16 h-16 bg-${skill.color}-100 dark:bg-${skill.color}-900 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">{skill.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.category}</h3>
              <p className="text-muted-foreground text-sm mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

