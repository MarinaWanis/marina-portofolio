"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Multi-Carrier Last‑Mile Integrations & Label Automation",
    description: "Standardized carrier integration layer supporting multiple last-mile carriers (WeDo, DPX, DPD, Zajel, Jeebly, Bosta, Fulfillment Bridge) with automated label handling, PUDO/locker selection, and webhook subscriptions.",
    image: "🚚",
    technologies: ["Python", "Django", "Django ORM", "PostgreSQL", "DRF", "REST APIs"],
    category: "Backend Integration",
    link: "/projects/multi-carrier-integrations",
    github: "https://github.com/marinamaged/clickdna-carrier-integrations"
  },
  {
    title: "Tracking Events Processing Engine",
    description: "Rule-based and LLM-enriched tracking event processing with database-aware logic (PostgreSQL/SQLite compatibility), batching safeguards, and queue generation for downstream dispatch.",
    image: "⚙️",
    technologies: ["Django", "PostgreSQL", "SQLite", "Raw SQL", "LLM Integration", "Cron Services"],
    category: "Data Processing",
    link: "/projects/tracking-events-engine",
    github: "https://github.com/marinamaged/clickdna-tracking-engine"
  },
  {
    title: "Operational Analytics & Exception Monitoring Dashboards",
    description: "Power BI dashboards providing operational visibility into order health, tracking data quality issues, and exception monitoring with drill-down capabilities for faster incident triage.",
    image: "📊",
    technologies: ["Power BI", "DAX", "SQL", "PostgreSQL", "SQLite"],
    category: "Analytics",
    link: "/projects/operational-analytics",
    github: "https://github.com/marinamaged/clickdna-analytics"
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of automation solutions, data analytics platforms, 
            and software applications that drive business value.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Link
                    href={project.link}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    View Details
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


