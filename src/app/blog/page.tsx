import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical insights, tutorials, and thoughts on RPA, Power BI, and software engineering.",
};

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with RPA: A Beginner's Guide",
    excerpt: "Learn the fundamentals of Robotic Process Automation and how to implement your first automation project.",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["RPA", "Automation", "Beginner"],
  },
  {
    id: 2,
    title: "Power BI Best Practices for Data Visualization",
    excerpt: "Essential tips and techniques for creating effective and engaging Power BI dashboards.",
    date: "2024-01-10",
    readTime: "7 min read",
    tags: ["Power BI", "Data Visualization", "Best Practices"],
  },
  {
    id: 3,
    title: "Building Scalable Data Pipelines with Python",
    excerpt: "A comprehensive guide to creating robust and maintainable ETL processes for data processing.",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["Python", "ETL", "Data Engineering"],
  },
  {
    id: 4,
    title: "The Future of Business Automation",
    excerpt: "Exploring emerging trends in automation technology and their impact on business processes.",
    date: "2023-12-28",
    readTime: "6 min read",
    tags: ["Automation", "Future Tech", "Business"],
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground">
            Technical insights, tutorials, and thoughts on RPA, Power BI, and software engineering.
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to stay updated with my latest posts?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Subscribe to Updates
          </a>
        </div>
      </div>
    </div>
  );
}

