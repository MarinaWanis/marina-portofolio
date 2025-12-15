// This is like the "About Me" page metadata - it tells search engines and browsers
// what this page is about. Think of it as the label on a book cover!
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Marina Maged, Automation & Data Engineer with 6+ years of experience in RPA, Power BI, and software engineering.",
};

// This is the main function that creates your About page
// Think of it as a factory that produces the HTML content
export default function AboutPage() {
  return (
    // The outer div is like a container box that holds everything
    // "container mx-auto" = centers the content and sets max width
    // "px-4" = padding on left/right (like margins in a document)
    // "py-8" = padding on top/bottom
    <div className="container mx-auto px-4 py-8">
      {/* This div limits the width so text doesn't stretch too wide
          Think of it like a book page - easier to read when not too wide! */}
      <div className="max-w-4xl mx-auto">
        
        {/* This section is like the header of your About page */}
        <div className="text-center mb-12">
          {/* h1 = main heading (like a chapter title)
              "text-4xl" = extra large text
              "font-bold" = makes it bold
              "mb-4" = margin bottom (space below) */}
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
        </div>

        {/* This is like a section in your story - you can add multiple sections */}
        <div className="space-y-8">
          {/* Main Content Section */}
          <section className="bg-card border rounded-lg p-6">
            <p className="text-foreground/80 dark:text-foreground/85 leading-relaxed mb-6">
              I'm an Automation & Data Engineer with hands-on experience building RPA workflows, Power BI dashboards, and backend services that support operational and e-commerce teams.
            </p>
            
            <ul className="space-y-4 text-foreground/80 dark:text-foreground/85 leading-relaxed">
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>Designing and maintaining automation workflows to eliminate repetitive manual processes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>Building Power BI dashboards for finance, operations, and customer service teams</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-primary">•</span>
                <span>Developing backend logic and APIs using Python, Django, and relational databases</span>
              </li>
            </ul>
            
            <p className="text-foreground/80 dark:text-foreground/85 leading-relaxed mt-6">
              I enjoy working at the intersection of engineering and analytics, where systems, data, and business processes meet.
            </p>
          </section>
        </div>

        {/* Call to Action - like a "next steps" section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to work together or learn more about my projects?
          </p>
          {/* This creates a button that links to the contact page
              "inline-flex" = makes it behave like a button
              "px-6 py-3" = padding inside the button
              "bg-primary" = background color (changes based on theme)
              "rounded-lg" = rounded corners
              "hover:bg-primary/90" = slightly darker when you hover */}
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
