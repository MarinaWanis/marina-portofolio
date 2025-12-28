import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Marina Maged, Data & Automation Engineer with 5+ years of experience in Power BI, RPA, and backend engineering.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
        </div>

        <div className="space-y-8">
          {/* Main Content Section */}
          <section className="bg-card border rounded-lg p-6 md:p-8">
            <div className="space-y-4 text-foreground/80 dark:text-foreground/85 leading-relaxed">
              <p>
                I'm a data-driven engineer with 5+ years of experience working at the intersection of analytics, automation, and backend systems, primarily within logistics, e-commerce, and operations-heavy environments.
              </p>
              <p>
                I started my career in RPA and process automation, where I saw first-hand how much time organizations lose to manual approvals, fragmented reporting, and low-visibility workflows. That foundation shaped how I approach technology: focus on impact, reliability, and clarity — not just tools.
              </p>
              <p>
                Over time, my work expanded into:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Power BI analytics, building 49+ dashboards across Operations, Finance, HR, Customer Service, and Management</li>
                <li>Backend engineering, developing APIs and services for multi-carrier shipping, tracking event processing, invoicing, and operational configuration</li>
                <li>Platform-level automation, combining RPA, APIs, and data pipelines to reduce operational load</li>
              </ul>
              <p>
                I'm comfortable working with messy, real-world data (ERP, WMS, tracking events), stakeholders who need clear answers rather than technical jargon, and systems that must scale and survive production realities.
              </p>
              <p>
                Today, I'm growing into more AI-enabled and product-oriented work while staying grounded in execution and delivery. I'm looking for roles where I can combine analytics, automation, and engineering to build systems that genuinely make operations simpler and more transparent.
              </p>
            </div>
          </section>

          {/* Skills Snapshot Section */}
          <section className="bg-card border rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Skills Snapshot</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Analytics & BI</h3>
                <ul className="space-y-1 text-foreground/80 dark:text-foreground/85">
                  <li>• Power BI, DAX, SQL</li>
                  <li>• KPI design & data modeling</li>
                  <li>• Operational & management reporting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Automation</h3>
                <ul className="space-y-1 text-foreground/80 dark:text-foreground/85">
                  <li>• Automation Anywhere</li>
                  <li>• Power Automate</li>
                  <li>• OCR & document automation</li>
                  <li>• Workflow design</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Backend & Engineering</h3>
                <ul className="space-y-1 text-foreground/80 dark:text-foreground/85">
                  <li>• Python, Django, REST APIs</li>
                  <li>• PostgreSQL, SQLite</li>
                  <li>• API integrations & background processing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Domains</h3>
                <ul className="space-y-1 text-foreground/80 dark:text-foreground/85">
                  <li>• Logistics & last-mile delivery</li>
                  <li>• E-commerce operations</li>
                  <li>• Finance, HR & customer service analytics</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to work together or learn more about my projects?
          </p>
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
