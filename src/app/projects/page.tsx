// Import Metadata type - this helps TypeScript understand what metadata is
// Think of it like importing a template for page information
import { Metadata } from "next";

// This is like the page's business card - tells search engines and browsers
// what this page contains. Super important for SEO (Search Engine Optimization)!
export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my RPA automation projects, Power BI dashboards, and software engineering work.",
};

// This is the main function that creates your Projects page
// Think of it as a factory that produces all the project cards
export default function ProjectsPage() {
  return (
    // Outer container - like a picture frame that holds everything
    <div className="container mx-auto px-4 py-8">
      {/* Inner container - limits width so content doesn't stretch too wide
          "max-w-4xl" = maximum width of 4xl (a Tailwind size)
          "mx-auto" = centers it horizontally */}
      <div className="max-w-4xl mx-auto">
        {/* Header section - like the title page of a portfolio */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground">
            A showcase of my RPA automation, Power BI dashboards, and software engineering work.
          </p>
        </div>

        {/* This is a GRID layout - like a photo gallery
            "grid" = creates a grid layout
            "gap-8" = space between grid items (like gaps between photos)
            "md:grid-cols-2" = on medium screens and up, show 2 columns
            On small screens, it automatically becomes 1 column! */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* ============================================
              PROJECT 1 - This is like a project card
              ============================================
              To add a new project, copy this entire block
              and paste it below. Then change the content!
              ============================================ */}
          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            {/* Project Title and Description Section */}
            <div className="mb-4">
              {/* h3 = heading level 3 (smaller than h1, bigger than regular text)
                  Change this to your project name! */}
              <h3 className="text-xl font-semibold mb-2">RPA Invoice Processing</h3>
              {/* This is the project description - tell people what it does! */}
              <p className="text-muted-foreground">
                Automated invoice processing workflow using UiPath, reducing manual processing time by 80%.
              </p>
            </div>
            
            {/* Tags Section - like labels on a product
                "flex" = arranges items in a row
                "flex-wrap" = wraps to next line if needed
                "gap-2" = small space between tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {/* Each tag is a <span> element
                  Change the text inside to your technology names
                  The colors (bg-blue-100, etc.) are styling - you can change these! */}
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                UiPath
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">
                RPA
              </span>
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-sm">
                Automation
              </span>
            </div>
            
            {/* Impact/Results Section - show what this project achieved! */}
            <div className="text-sm text-muted-foreground">
              <strong>Impact:</strong> 80% reduction in processing time, 99.5% accuracy rate
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Sales Analytics Dashboard</h3>
              <p className="text-muted-foreground">
                Interactive Power BI dashboard providing real-time sales insights and performance metrics.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-sm">
                Power BI
              </span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                DAX
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">
                Data Visualization
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <strong>Impact:</strong> 50% faster decision making, improved sales forecasting
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Customer Service Bot</h3>
              <p className="text-muted-foreground">
                Intelligent chatbot for customer support using natural language processing and RPA integration.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-sm">
                Python
              </span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                NLP
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">
                AI/ML
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <strong>Impact:</strong> 70% reduction in support tickets, 24/7 availability
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Data Pipeline Automation</h3>
              <p className="text-muted-foreground">
                End-to-end data pipeline for ETL processes with automated monitoring and error handling.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded text-sm">
                Python
              </span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                SQL
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">
                ETL
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              <strong>Impact:</strong> 90% reduction in manual data processing, real-time insights
            </div>
          </div>
        </div>

        {/* Call to Action Section - encourages visitors to contact you
            "mt-12" = margin top (space above this section) */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in working together? Let's discuss your project needs.
          </p>
          {/* This is a link that looks like a button
              "href" = where it goes when clicked (/contact page)
              All the className stuff = styling to make it look like a button */}
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

