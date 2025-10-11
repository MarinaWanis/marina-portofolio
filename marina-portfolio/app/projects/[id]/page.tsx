import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, CheckCircle } from "lucide-react";
import { notFound } from "next/navigation";

// Sample projects data - same as in the main projects page
const projects = [
  {
    id: 1,
    title: "Financial Data Automation System",
    category: "RPA",
    description: "Automated financial data processing and reporting system that reduced manual work by 80% and improved accuracy by 95%.",
    longDescription: "This comprehensive RPA solution automates the entire financial data processing workflow, from data extraction to report generation. The system processes thousands of transactions daily and generates real-time financial reports for stakeholders.",
    image: "/api/placeholder/800/600",
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
    featured: true,
    timeline: "3 months",
    team: "Solo Project"
  },
  {
    id: 2,
    title: "Sales Performance Dashboard",
    category: "Power BI",
    description: "Interactive Power BI dashboard providing real-time insights into sales performance, customer behavior, and market trends.",
    longDescription: "A comprehensive business intelligence solution that transforms raw sales data into actionable insights. The dashboard provides real-time visibility into sales performance, customer segmentation, and market trends.",
    image: "/api/placeholder/800/600",
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
    featured: true,
    timeline: "2 months",
    team: "Lead Developer"
  },
  {
    id: 3,
    title: "Inventory Management System",
    category: "Software Engineering",
    description: "Full-stack web application for inventory management with real-time tracking, automated reordering, and analytics.",
    longDescription: "A modern web application built with React and Node.js that provides comprehensive inventory management capabilities. The system includes real-time tracking, automated reordering, and detailed analytics.",
    image: "/api/placeholder/800/600",
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
    featured: true,
    timeline: "4 months",
    team: "Full-Stack Developer"
  },
  {
    id: 4,
    title: "Customer Service Automation Bot",
    category: "RPA",
    description: "Intelligent chatbot that handles customer inquiries, processes orders, and escalates complex issues to human agents.",
    longDescription: "An AI-powered customer service automation solution that handles routine customer inquiries, processes orders, and intelligently escalates complex issues to human agents when needed.",
    image: "/api/placeholder/800/600",
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
    featured: false,
    timeline: "2.5 months",
    team: "RPA Developer"
  },
  {
    id: 5,
    title: "HR Analytics Dashboard",
    category: "Power BI",
    description: "Comprehensive HR analytics dashboard providing insights into employee performance, retention, and workforce planning.",
    longDescription: "A sophisticated HR analytics solution that provides deep insights into employee performance, retention patterns, and workforce planning. The dashboard helps HR teams make data-driven decisions.",
    image: "/api/placeholder/800/600",
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
    featured: false,
    timeline: "3 months",
    team: "Data Analyst"
  },
  {
    id: 6,
    title: "E-commerce Platform",
    category: "Software Engineering",
    description: "Modern e-commerce platform with advanced features including AI-powered recommendations and real-time inventory management.",
    longDescription: "A full-featured e-commerce platform built with modern technologies. The platform includes AI-powered product recommendations, real-time inventory management, and seamless payment processing.",
    image: "/api/placeholder/800/600",
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
    featured: false,
    timeline: "6 months",
    team: "Lead Developer"
  }
];

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find(p => p.id === parseInt(params.id));
  
  if (!project) {
    return {
      title: "Project Not Found | Marina Maged",
    };
  }

  return {
    title: `${project.title} | Marina Maged`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === parseInt(params.id));

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {project.category}
            </span>
            <Calendar className="h-4 w-4" />
            <span>{project.timeline}</span>
            <Clock className="h-4 w-4 ml-2" />
            <span>{project.team}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            {project.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            {project.longDescription}
          </p>
          
          {/* Action Buttons */}
          <div className="flex gap-4">
            {project.liveUrl !== "#" && (
              <Link
                href={project.liveUrl}
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Demo
              </Link>
            )}
            {project.githubUrl !== "#" && (
              <Link
                href={project.githubUrl}
                className="inline-flex items-center px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Link>
            )}
          </div>
        </header>

        {/* Project Image */}
        <div className="mb-12">
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
            <div className="text-6xl">
              {project.category === "RPA" ? "🤖" : 
               project.category === "Power BI" ? "📊" : "💻"}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technologies */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">{result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 pt-8 border-t">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in Similar Solutions?</h2>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help you implement similar solutions for your business.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
