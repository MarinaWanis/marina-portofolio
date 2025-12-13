// This is like the "About Me" page metadata - it tells search engines and browsers
// what this page is about. Think of it as the label on a book cover!
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Marina Maged, RPA specialist and Power BI expert.",
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
          {/* This is a subtitle - smaller text that gives context */}
          <p className="text-xl text-muted-foreground mb-8">
            Get to know my journey in automation and data visualization
          </p>
        </div>

        {/* This is like a section in your story - you can add multiple sections */}
        <div className="space-y-8">
          {/* Section 1: Introduction */}
          <section className="bg-card border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hi! I'm Marina Maged, a passionate RPA (Robotic Process Automation) specialist 
              and Power BI expert. I love turning complex business processes into automated 
              solutions that save time and reduce errors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Think of me as someone who builds digital robots that can do repetitive tasks 
              faster and more accurately than humans - like having a super-efficient assistant 
              that never gets tired!
            </p>
          </section>

          {/* Section 2: My Journey */}
          <section className="bg-card border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My journey in automation started when I realized how much time businesses waste 
              on repetitive tasks. I began learning RPA tools like UiPath and discovered the 
              power of automation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Along the way, I also fell in love with data visualization. Power BI became my 
              tool of choice for turning raw data into beautiful, actionable insights. It's like 
              being a translator - I take numbers and turn them into stories that businesses can 
              understand and act upon.
            </p>
          </section>

          {/* Section 3: What I Do */}
          <section className="bg-card border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">🤖 RPA Automation</h3>
                <p className="text-muted-foreground">
                  I create automated workflows that handle repetitive tasks. Imagine a robot 
                  that can process invoices, update spreadsheets, or send emails automatically 
                  - that's what I build!
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">📊 Power BI Dashboards</h3>
                <p className="text-muted-foreground">
                  I transform complex data into interactive dashboards. It's like creating a 
                  control panel for your business - everything you need to know at a glance!
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">💻 Software Engineering</h3>
                <p className="text-muted-foreground">
                  I build scalable applications using Python and modern web technologies. 
                  Think of it as constructing a building - I make sure it's strong, efficient, 
                  and can grow as your needs change.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Fun Facts or Personal Touch */}
          <section className="bg-card border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Fun Facts</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>I believe automation should make work more human, not less</li>
              <li>I'm always learning new technologies and techniques</li>
              <li>I love solving complex problems with elegant solutions</li>
            </ul>
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
