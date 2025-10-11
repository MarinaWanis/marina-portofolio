import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { formatDate } from "@/lib/date-utils";

export const metadata: Metadata = {
  title: "Blog | Marina Maged",
  description: "Technical insights, tutorials, and thoughts on RPA, Power BI, and software engineering.",
};

// Sample blog posts - you can add more here
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with RPA: A Complete Guide",
    excerpt: "Learn the fundamentals of Robotic Process Automation and how to implement your first automation project.",
    content: "Robotic Process Automation (RPA) is revolutionizing how businesses handle repetitive tasks...",
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
    content: "Power BI dashboards are powerful tools for data visualization and business intelligence...",
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
    content: "Scalable software architecture is crucial for long-term success and maintainability...",
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
    content: "Data analytics is the process of examining data sets to draw conclusions about the information...",
    date: "2024-01-01",
    readTime: "7 min read",
    category: "Data Analytics",
    tags: ["Data Analytics", "Insights", "Business Intelligence"],
    featured: false
  }
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
            My <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical insights, tutorials, and thoughts on RPA, Power BI, and software engineering.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group">
                  <Link href={`/blog/${post.id}`}>
                    <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group-hover:border-primary/50">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                        <Clock className="h-4 w-4 ml-2" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-bold mb-8">All Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.id}`}>
                  <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group-hover:border-primary/50 h-full">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-primary text-sm font-medium group-hover:underline">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
