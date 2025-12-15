// Import Metadata type - this helps TypeScript understand what metadata is
// Think of it like importing a template for page information
import { Metadata } from "next";

// This is like the page's business card - tells search engines and browsers
// what this page contains. Super important for SEO (Search Engine Optimization)!
export const metadata: Metadata = {
  title: "Projects",
  description: "Explore automation, analytics, and backend solutions built for e-commerce and operations teams.",
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
              <h3 className="text-xl font-semibold mb-2">RPA Invoice Processing</h3>
              <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                Problem: Manual invoice processing was time-consuming and error-prone for finance teams.
              </p>
              <p className="text-muted-foreground mb-3">
                Built an automated workflow using UiPath to extract, validate, and process invoices from multiple sources. The solution integrates with ERP systems and handles exception routing.
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Tech Stack:</strong> UiPath, SQL Server, REST APIs
              </p>
              <p className="text-sm text-foreground/80 dark:text-foreground/85">
                <strong>Impact:</strong> 80% reduction in processing time, 99.5% accuracy rate, eliminated 15+ hours of weekly manual work
              </p>
            </div>
            
            {/* Tags Section */}
            <div className="flex flex-wrap gap-2 mt-4">
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
          </div>

          {/* Project 2 */}
          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Sales Analytics Dashboard</h3>
              <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                Problem: Sales teams lacked real-time visibility into performance metrics and trends.
              </p>
              <p className="text-muted-foreground mb-3">
                Developed a comprehensive Power BI dashboard with DAX calculations, connecting to multiple data sources to provide real-time sales insights, forecasting, and performance tracking.
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Tech Stack:</strong> Power BI, DAX, SQL Server, Excel
              </p>
              <p className="text-sm text-foreground/80 dark:text-foreground/85">
                <strong>Impact:</strong> 50% faster decision making, improved sales forecasting accuracy, enabled proactive strategy adjustments
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
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
          </div>

          {/* Project 3 */}
          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">E-commerce Order Processing System</h3>
              <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                Problem: Order processing required manual intervention and lacked real-time status tracking.
              </p>
              <p className="text-muted-foreground mb-3">
                Built a Django-based backend system with REST APIs to automate order processing, inventory updates, and shipping notifications. Integrated with payment gateways and logistics providers.
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Tech Stack:</strong> Python, Django, PostgreSQL, REST APIs
              </p>
              <p className="text-sm text-foreground/80 dark:text-foreground/85">
                <strong>Impact:</strong> 90% reduction in manual order processing, real-time visibility for operations team, scalable to handle 10x order volume
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded text-sm">
                Python
              </span>
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm">
                Django
              </span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">
                PostgreSQL
              </span>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Operations Data Pipeline</h3>
              <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                Problem: Operations team needed automated data aggregation from multiple systems for reporting.
              </p>
              <p className="text-muted-foreground mb-3">
                Designed and implemented an ETL pipeline using Python to extract data from various sources, transform and validate it, then load into a centralized data warehouse. Includes automated monitoring and error handling.
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Tech Stack:</strong> Python, SQL, PostgreSQL, Git
              </p>
              <p className="text-sm text-foreground/80 dark:text-foreground/85">
                <strong>Impact:</strong> 90% reduction in manual data processing, real-time insights for operations dashboards, improved data accuracy
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
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

