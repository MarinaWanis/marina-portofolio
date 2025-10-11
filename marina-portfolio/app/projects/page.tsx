import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Marina Maged",
  description: "Explore my portfolio of RPA automation projects, Power BI dashboards, and software engineering solutions.",
};

// Sample projects data
const projects = [
  {
    id: 1,
    title: "Financial Data Automation System",
    category: "RPA",
    description: "Automated financial data processing and reporting system that reduced manual work by 80% and improved accuracy by 95%.",
    longDescription: "This comprehensive RPA solution automates the entire financial data processing workflow, from data extraction to report generation. The system processes thousands of transactions daily and generates real-time financial reports for stakeholders.",
    image: "/api/placeholder/600/400",
    technologies: ["UiPath", "Python", "SQL Server", "Power BI"],
    features: [
      "Automated data extraction from multiple sources",
      "Real-time data validation and cleansing",
      "Automated report generation",
      "Exception handling and error logging",
      "Integration with existing ERP systems"
    ],
    results: [
      "80% reduction in manual processing time",
      "95% improvement in data accuracy",
      "24/7 automated operations",
      "50% cost savings in data processing"
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Sales Performance Dashboard",
    category: "Power BI",
    description: "Interactive Power BI dashboard providing real-time insights into sales performance, customer behavior, and market trends.",
    longDescription: "A comprehensive business intelligence solution that transforms raw sales data into actionable insights. The dashboard provides real-time visibility into sales performance, customer segmentation, and market trends.",
    image: "/api/placeholder/600/400",
    technologies: ["Power BI", "DAX", "SQL Server", "Azure Data Factory"],
    features: [
      "Real-time sales performance metrics",
      "Interactive customer segmentation",
      "Predictive sales forecasting",
      "Mobile-responsive design",
      "Automated data refresh"
    ],
    results: [
      "30% improvement in sales visibility",
      "25% increase in data-driven decisions",
      "Reduced reporting time by 70%",
      "Enhanced cross-team collaboration"
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Inventory Management System",
    category: "Software Engineering",
    description: "Full-stack web application for inventory management with real-time tracking, automated reordering, and analytics.",
    longDescription: "A modern web application built with React and Node.js that provides comprehensive inventory management capabilities. The system includes real-time tracking, automated reordering, and detailed analytics.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    features: [
      "Real-time inventory tracking",
      "Automated reorder notifications",
      "Multi-location support",
      "Barcode scanning integration",
      "Comprehensive reporting"
    ],
    results: [
      "40% reduction in stockouts",
      "25% improvement in inventory turnover",
      "Streamlined warehouse operations",
      "Better supplier relationships"
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 4,
    title: "Customer Service Automation Bot",
    category: "RPA",
    description: "Intelligent chatbot that handles customer inquiries, processes orders, and escalates complex issues to human agents.",
    longDescription: "An AI-powered customer service automation solution that handles routine customer inquiries, processes orders, and intelligently escalates complex issues to human agents when needed.",
    image: "/api/placeholder/600/400",
    technologies: ["UiPath", "NLP", "Azure Bot Framework", "SQL Server"],
    features: [
      "Natural language processing",
      "Order processing automation",
      "Intelligent issue escalation",
      "Multi-language support",
      "Integration with CRM systems"
    ],
    results: [
      "60% reduction in response time",
      "45% decrease in customer service costs",
      "24/7 customer support availability",
      "Improved customer satisfaction scores"
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "HR Analytics Dashboard",
    category: "Power BI",
    description: "Comprehensive HR analytics dashboard providing insights into employee performance, retention, and workforce planning.",
    longDescription: "A sophisticated HR analytics solution that provides deep insights into employee performance, retention patterns, and workforce planning. The dashboard helps HR teams make data-driven decisions.",
    image: "/api/placeholder/600/400",
    technologies: ["Power BI", "DAX", "Azure Synapse", "Python"],
    features: [
      "Employee performance analytics",
      "Retention and turnover analysis",
      "Workforce planning insights",
      "Recruitment funnel analysis",
      "Compensation benchmarking"
    ],
    results: [
      "35% improvement in HR decision-making",
      "20% reduction in employee turnover",
      "Better workforce planning accuracy",
      "Enhanced employee engagement insights"
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 6,
    title: "E-commerce Platform",
    category: "Software Engineering",
    description: "Modern e-commerce platform with advanced features including AI-powered recommendations and real-time inventory management.",
    longDescription: "A full-featured e-commerce platform built with modern technologies. The platform includes AI-powered product recommendations, real-time inventory management, and seamless payment processing.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
    features: [
      "AI-powered product recommendations",
      "Real-time inventory management",
      "Secure payment processing",
      "Advanced search and filtering",
      "Mobile-responsive design"
    ],
    results: [
      "50% increase in conversion rates",
      "30% improvement in user engagement",
      "Seamless mobile experience",
      "Robust security implementation"
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

const categories = ["All", "RPA", "Power BI", "Software Engineering"];

export default function ProjectsPage() {
  const featuredProjects = projects.filter(project => project.featured);
  const allProjects = projects;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Link 
            href="/" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            My <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of RPA automation projects, Power BI dashboards, and software engineering solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group">
                <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-primary/50">
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary/60">
                      {project.category === "RPA" ? "🤖" : 
                       project.category === "Power BI" ? "📊" : "💻"}
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Link>
                      {project.liveUrl !== "#" && (
                        <Link
                          href={project.liveUrl}
                          className="inline-flex items-center px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-accent transition-colors"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-8">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project) => (
              <div key={project.id} className="group">
                <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-primary/50 h-full">
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-3xl">
                      {project.category === "RPA" ? "🤖" : 
                       project.category === "Power BI" ? "📊" : "💻"}
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link
                        href={`/projects/${project.id}`}
                        className="inline-flex items-center px-3 py-2 bg-primary text-primary-foreground rounded text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        <Eye className="mr-1 h-3 w-3" />
                        View
                      </Link>
                      {project.liveUrl !== "#" && (
                        <Link
                          href={project.liveUrl}
                          className="inline-flex items-center px-3 py-2 border border-border rounded text-sm font-medium hover:bg-accent transition-colors"
                        >
                          <ExternalLink className="mr-1 h-3 w-3" />
                          Demo
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
