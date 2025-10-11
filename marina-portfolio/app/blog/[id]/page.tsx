import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/date-utils";

// Sample blog posts data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with RPA: A Complete Guide",
    excerpt: "Learn the fundamentals of Robotic Process Automation and how to implement your first automation project.",
    content: `
# Getting Started with RPA: A Complete Guide

Robotic Process Automation (RPA) is revolutionizing how businesses handle repetitive tasks. In this comprehensive guide, we'll explore the fundamentals of RPA and how to implement your first automation project.

## What is RPA?

RPA is a technology that uses software robots (bots) to automate repetitive, rule-based tasks that were previously performed by humans. These bots can interact with applications and systems just like humans do, but with greater speed, accuracy, and consistency.

## Key Benefits of RPA

- **Cost Reduction**: Automate tasks to reduce operational costs
- **Improved Accuracy**: Eliminate human errors in repetitive tasks
- **Increased Productivity**: Free up employees for higher-value work
- **24/7 Operations**: Bots can work around the clock
- **Quick Implementation**: Faster deployment compared to traditional IT solutions

## Getting Started with RPA

### 1. Identify Automation Opportunities

Start by identifying processes that are:
- Repetitive and rule-based
- High volume
- Prone to human error
- Time-consuming

### 2. Choose the Right RPA Tool

Popular RPA platforms include:
- UiPath
- Automation Anywhere
- Blue Prism
- Microsoft Power Automate

### 3. Design Your Automation

Create a detailed process map and identify:
- Input data sources
- Business rules and logic
- Output destinations
- Exception handling

### 4. Develop and Test

Build your automation in a development environment and thoroughly test all scenarios before deploying to production.

## Best Practices

- Start small with simple processes
- Involve business users in the design process
- Implement proper error handling
- Monitor and maintain your automations
- Document everything thoroughly

## Conclusion

RPA can transform your business operations when implemented correctly. Start with simple processes, learn from each implementation, and gradually expand your automation capabilities.

Ready to start your RPA journey? Contact me to discuss your automation needs!
    `,
    date: "2024-01-15",
    readTime: "8 min read",
    category: "RPA",
    tags: ["RPA", "Automation", "Business Process"],
    featured: true
  },
  {
    id: 2,
    title: "Power BI Dashboard Design Best Practices",
    excerpt: "Create stunning and effective Power BI dashboards that drive business decisions.",
    content: `
# Power BI Dashboard Design Best Practices

Power BI dashboards are powerful tools for data visualization and business intelligence. Here are the essential best practices for creating effective dashboards.

## Design Principles

### 1. Keep It Simple
- Focus on key metrics
- Avoid clutter
- Use white space effectively
- Limit the number of visuals per page

### 2. Use Consistent Colors
- Establish a color palette
- Use colors meaningfully (red for alerts, green for positive)
- Ensure accessibility for colorblind users

### 3. Choose the Right Visualizations
- Bar charts for comparisons
- Line charts for trends
- Pie charts for proportions (use sparingly)
- Tables for detailed data

## Layout Best Practices

### 1. Follow the F-Pattern
- Place most important information in the top-left
- Use horizontal and vertical lines to guide the eye
- Group related information together

### 2. Use Proper Sizing
- Make important visuals larger
- Ensure text is readable
- Maintain consistent spacing

### 3. Mobile Responsiveness
- Design for different screen sizes
- Test on various devices
- Use responsive layouts

## Data Best Practices

### 1. Data Quality
- Ensure data accuracy
- Handle missing values appropriately
- Use proper data types

### 2. Performance Optimization
- Limit data refresh frequency
- Use appropriate data models
- Optimize DAX calculations

## User Experience

### 1. Navigation
- Use clear page titles
- Provide breadcrumbs
- Include search functionality

### 2. Interactivity
- Add filters and slicers
- Enable drill-through capabilities
- Provide tooltips and context

## Conclusion

Effective Power BI dashboards combine good design principles with solid data practices. Focus on your users' needs and keep the design clean and purposeful.

Need help designing your Power BI dashboards? Let's discuss your requirements!
    `,
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Power BI",
    tags: ["Power BI", "Data Visualization", "Dashboard"],
    featured: true
  },
  {
    id: 3,
    title: "Building Scalable Software Solutions",
    excerpt: "Architecture patterns and best practices for creating maintainable software systems.",
    content: `
# Building Scalable Software Solutions

Creating scalable software solutions requires careful planning and adherence to proven architectural patterns. Here's how to build systems that can grow with your business.

## Scalability Fundamentals

### 1. Horizontal vs Vertical Scaling
- **Horizontal Scaling**: Add more servers/machines
- **Vertical Scaling**: Add more power to existing machines
- Choose based on your specific needs

### 2. Load Balancing
- Distribute traffic across multiple servers
- Implement health checks
- Use appropriate load balancing algorithms

## Architecture Patterns

### 1. Microservices Architecture
- Break applications into small, independent services
- Each service has a single responsibility
- Services communicate via APIs

### 2. Event-Driven Architecture
- Use events to trigger actions
- Decouple components
- Improve system responsiveness

### 3. Caching Strategies
- Implement multiple cache layers
- Use appropriate cache invalidation
- Consider distributed caching

## Database Design

### 1. Database Sharding
- Split data across multiple databases
- Choose appropriate sharding keys
- Handle cross-shard queries

### 2. Read Replicas
- Separate read and write operations
- Improve read performance
- Handle eventual consistency

## Performance Optimization

### 1. Code Optimization
- Profile your application
- Optimize database queries
- Use appropriate data structures

### 2. Infrastructure Optimization
- Use CDNs for static content
- Implement proper monitoring
- Set up alerting systems

## Conclusion

Building scalable software solutions is an ongoing process. Start with solid foundations, monitor performance, and iterate based on real-world usage patterns.

Interested in discussing your software architecture needs? Let's talk!
    `,
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Software Engineering",
    tags: ["Architecture", "Scalability", "Best Practices"],
    featured: false
  },
  {
    id: 4,
    title: "Data Analytics: From Raw Data to Insights",
    excerpt: "Transform your raw data into actionable business insights using modern analytics tools.",
    content: `
# Data Analytics: From Raw Data to Insights

Data analytics is the process of examining data sets to draw conclusions about the information they contain. Here's how to transform raw data into actionable business insights.

## The Data Analytics Process

### 1. Data Collection
- Identify data sources
- Ensure data quality
- Implement data governance
- Handle data privacy requirements

### 2. Data Cleaning
- Remove duplicates
- Handle missing values
- Standardize formats
- Validate data accuracy

### 3. Data Analysis
- Exploratory data analysis
- Statistical analysis
- Predictive modeling
- Machine learning applications

### 4. Data Visualization
- Choose appropriate charts
- Create interactive dashboards
- Tell compelling data stories
- Make insights accessible

## Tools and Technologies

### 1. Data Processing
- Python (Pandas, NumPy)
- R for statistical analysis
- SQL for database queries
- Apache Spark for big data

### 2. Visualization
- Power BI
- Tableau
- Python (Matplotlib, Seaborn)
- JavaScript (D3.js)

### 3. Machine Learning
- Scikit-learn
- TensorFlow
- PyTorch
- Azure ML

## Best Practices

### 1. Start with Business Questions
- Define clear objectives
- Identify key metrics
- Align with business goals

### 2. Ensure Data Quality
- Validate data sources
- Implement data governance
- Monitor data quality continuously

### 3. Communicate Results Effectively
- Use clear visualizations
- Provide context and interpretation
- Make recommendations actionable

## Common Challenges

### 1. Data Silos
- Integrate data from multiple sources
- Implement data warehouses
- Use data lakes for unstructured data

### 2. Data Quality Issues
- Implement data validation
- Create data quality metrics
- Establish data governance processes

### 3. Skill Gaps
- Invest in training
- Hire data specialists
- Use no-code/low-code tools

## Conclusion

Effective data analytics requires a combination of technical skills, business understanding, and the right tools. Focus on solving real business problems and communicating insights clearly.

Need help with your data analytics projects? Let's discuss how I can help!
    `,
    date: "2024-01-01",
    readTime: "7 min read",
    category: "Data Analytics",
    tags: ["Data Analytics", "Insights", "Business Intelligence"],
    featured: false
  }
];

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.id === parseInt(params.id));
  
  if (!post) {
    return {
      title: "Post Not Found | Marina Maged",
    };
  }

  return {
    title: `${post.title} | Marina Maged`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {post.category}
            </span>
            <Calendar className="h-4 w-4" />
            <span>{formatDate(post.date)}</span>
            <Clock className="h-4 w-4 ml-2" />
            <span>{post.readTime}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div className="bg-card border rounded-lg p-8">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-pre:bg-muted prose-blockquote:border-primary"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }}
            />
          </div>
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Found this article helpful? Let's connect!
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
