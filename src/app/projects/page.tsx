import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore backend engineering, Power BI analytics, and automation projects across logistics, e-commerce, and operations.",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground">
            Backend engineering, analytics dashboards, and automation solutions delivered across logistics, e-commerce, and operations.
          </p>
        </div>

        {/* Backend & Platform Engineering Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b">Backend & Platform Engineering</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Project 1: Multi-Carrier Last‑Mile Integrations & Label Automation */}
            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-3">Multi-Carrier Last‑Mile Integrations & Label Automation (WeDo, DPX, DPD, Zajel, Jeebly, Bosta, Fulfillment Bridge)</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Problem:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      The platform needed to onboard multiple last‑mile carriers while keeping order creation, label handling, and shipment data consistent across very different carrier APIs and constraints (PUDO/locker vs home delivery, payload limits, country/city mappings, webhooks).
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Solution:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      Built a standardized carrier integration layer using dispatcher/mixin patterns to:
                    </p>
                    <ul className="text-muted-foreground text-sm list-disc list-inside space-y-1 ml-2">
                      <li>Create shipments with carrier-specific payload mapping (addresses, package dimensions, COD rules, HS codes, duty handling, etc.)</li>
                      <li>Support specialized flows like PUDO/locker selection (nearest pickup point resolution), service-type driven behavior, and country-specific endpoint configs</li>
                      <li>Automate label retrieval (URL/download and base64 storage) and implement operational logging for outbound requests/responses and failures</li>
                      <li>Add carrier-specific resilience features such as fallback label retrieval and webhook subscription (e.g., parcel status callbacks)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Tech Stack:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Python, Django, Django ORM, Requests/HTTP APIs, DRF API logging, PostgreSQL/SQLite, Base64/PDF handling
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Impact:</strong>
                    </p>
                    <p className="text-foreground/80 dark:text-foreground/85 text-sm">
                      Reduced manual carrier onboarding effort, enabled faster rollout of new last‑mile partners, improved shipment creation reliability, and standardized label + tracking outputs across carriers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: Tracking Events Processing Engine */}
            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-3">Tracking Events Processing Engine (Rule‑Based + Optional LLM Enrichment)</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Problem:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Tracking events arrive at high volume and need to be normalized and surfaced reliably. Some event interpretation (e.g., pickup detection) benefits from smarter classification beyond strict rules.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Solution:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      Implemented and improved cron-driven processing for tracking events:
                    </p>
                    <ul className="text-muted-foreground text-sm list-disc list-inside space-y-1 ml-2">
                      <li>Added configuration-driven processing mode to switch between rule-based mapping and LLM-assisted enrichment</li>
                      <li>Implemented batching safeguards for LLM processing (batch sizing, max events per order, token budgeting, order-grouped context) to keep requests stable and cost-controlled</li>
                      <li>Added queue generation for downstream event dispatch (webhook/callback submission pipeline)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Tech Stack:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Django, Raw SQL, PostgreSQL + Config-driven workflows, LLM integration (prompting + batching), Background cron services
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Impact:</strong>
                    </p>
                    <p className="text-foreground/80 dark:text-foreground/85 text-sm">
                      Improved tracking pipeline robustness across environments, reduced failures due to DB-specific SQL differences, and enabled higher-quality event interpretation when LLM mode is enabled.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: Pre‑Alert Upload & MAWB/HAWB Data Integrity Pipeline */}
            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-3">Pre‑Alert Upload & MAWB/HAWB Data Integrity Pipeline (with UTC Handling + Temp Table Sync)</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Problem:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Pre-alert ingestion must validate and persist shipment data accurately (MAWB + HAWB/RSA tracking), prevent duplicates (MAWB and optional batch numbers), store documents, and keep leading "summary"/tracking tables consistent for downstream reporting and tracking workflows.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Solution:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      Enhanced the pre-alert upload API and related data synchronization:
                    </p>
                    <ul className="text-muted-foreground text-sm list-disc list-inside space-y-1 ml-2">
                      <li>Added stronger validations (MAWB format, date ordering, client-scoped batch number uniqueness, allocation checks, and data-file integrity)</li>
                      <li>Implemented document storage flow (MAWB PDF upload to blob storage) and persisted file references</li>
                      <li>Updated pre-alert derived fields (e.g., actual arrival date + UTC conversion) and ensured changes cascade into tracking summary ("temp second") using ranked SQL logic (window functions to select the latest relevant mapping per order)</li>
                      <li>Built safeguards for cross-DB behavior (protecting PostgreSQL-only aggregation and providing fallbacks for SQLite where needed)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Tech Stack:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Django REST Framework, Django ORM, PostgreSQL window functions, Azure Blob Storage integration, Data validation + exception handling
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Impact:</strong>
                    </p>
                    <p className="text-foreground/80 dark:text-foreground/85 text-sm">
                      Increased data correctness for pre-alert operations, reduced duplicate/invalid uploads, improved downstream tracking/report accuracy, and minimized manual reconciliation for MAWB/HAWB mapping issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 5: AJWW Event File Conversion */}
            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-3">AJWW Event File Conversion to Standard Tracking Template (CSV/XLSX → RSA Events Excel)</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Problem:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Operations received carrier-specific AJWW daily status files (CSV/Excel) at MAWB-level, but the platform required HAWB-level standardized tracking event rows in a strict template format—manual conversion was error-prone (encoding issues, inconsistent headers, duplicate MAWBs, and MAWB format mismatches like hyphens).
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Solution:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      Built an automated conversion utility that:
                    </p>
                    <ul className="text-muted-foreground text-sm list-disc list-inside space-y-1 ml-2">
                      <li>Parses CSV/XLSX with encoding fallbacks and auto-detects the true header row even with banner/merged rows</li>
                      <li>Normalizes MAWB identifiers for reliable matching and merges duplicate MAWB rows by selecting the latest timestamps per event column</li>
                      <li>Maps configured carrier columns to standardized event codes/names, expands MAWB-level events into HAWB-level rows by resolving MAWB→HAWB relationships, and emits a formatted Excel output matching the platform template (header styling + mandatory row)</li>
                      <li>Produces a conversion summary with warnings/errors for operator visibility (missing columns, missing MAWB mappings, parse failures)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Tech Stack:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Python, Pandas, OpenPyXL, Django integration points, Structured logging
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Impact:</strong>
                    </p>
                    <p className="text-foreground/80 dark:text-foreground/85 text-sm">
                      Eliminated repetitive manual Excel work, improved consistency/quality of uploaded tracking events, and reduced turnaround time for making carrier event data available in the system.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 6: Shipping Invoice PDF Generation */}
            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-3">Shipping Invoice PDF Generation & Bulk Download API</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Problem:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Clients needed consistent, downloadable shipping invoices (single and bulk) that pull order/package/commodity details and optionally include fulfillment invoice metadata—while enforcing client access rules and keeping PDF generation safe and reliable.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Solution:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      Implemented invoice download APIs that:
                    </p>
                    <ul className="text-muted-foreground text-sm list-disc list-inside space-y-1 ml-2">
                      <li>Render invoice templates using Django templating with full order + package breakdown, commodity details, and client branding (logo)</li>
                      <li>Enrich invoices by pulling invoice metadata from fulfillment records (invoice code/id/date)</li>
                      <li>Support single-invoice and bulk download flows with guardrails (validation + max limits), plus base64 output option for integration use-cases</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Tech Stack:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Django, DRF, Django Templates, wkhtmltopdf/pdf generation wrapper, Base64, ORM queries
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Impact:</strong>
                    </p>
                    <p className="text-foreground/80 dark:text-foreground/85 text-sm">
                      Enabled self-serve invoice retrieval for clients and ops teams, reduced ad-hoc manual invoice preparation, and standardized invoice content across single and bulk workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 7: Service Type & Pickup Slot Management */}
            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-3">Service Type & Pickup Slot Management APIs (Operational Configuration)</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Problem:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Logistics operations required admin-controlled configuration for RSA service types, carrier service mappings, and pickup scheduling (time slots, cutoff rules, and client/carrier constraints) to prevent invalid combinations and reduce operational errors.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Solution:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      Built/extended configuration APIs to:
                    </p>
                    <ul className="text-muted-foreground text-sm list-disc list-inside space-y-1 ml-2">
                      <li>Define RSA service types with generated service codes based on enabled legs (first mile/linehaul/customs/last mile) and enforce rules around modes/types</li>
                      <li>Map carrier service codes to RSA service types with duplicate/consistency validation, and prevent deactivation when actively used by allocation/linehaul rules</li>
                      <li>Create pickup slot booking workflows with timezone-aware cutoff calculation (local → UTC), date-window validation, and slot range enforcement</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Tech Stack:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Django REST Framework, Django ORM, Validation-heavy API design, Timezone handling (pytz/UTC conversion), PostgreSQL queries
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Impact:</strong>
                    </p>
                    <p className="text-foreground/80 dark:text-foreground/85 text-sm">
                      Reduced misconfiguration risk, improved operational control over logistics options, and enabled predictable pickup scheduling with clear cutoff logic.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Analytics & Power BI Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b">Analytics & Power BI</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Project 1: Operational Analytics & Exception Monitoring Dashboards */}
            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-3">Operational Analytics & Exception Monitoring Dashboards (Power BI)</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Problem:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Ops teams needed reliable visibility into order health (open/stale/lost/exception cases) and early detection of tracking data issues (missing events, blank UTC datetimes, reporting gaps) to reduce investigation time and prevent SLA breaches.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Solution:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm mb-2">
                      Designed and built Power BI dashboards using the platform's tracking summary layer (ConsignmentTrackingTempSecond) and related tracking/event tables to:
                    </p>
                    <ul className="text-muted-foreground text-sm list-disc list-inside space-y-1 ml-2">
                      <li>Provide operational visibility across key KPIs (open orders aging, stale tracking windows, orders missing from reports, and exception categories)</li>
                      <li>Create an Event Discrepancy monitoring view to flag anomalies like blank UTC event timestamps, missing/late events, and mismatches across tracking sources</li>
                      <li>Enable drill-down to order/tracking-level detail for triage and faster root-cause analysis (carrier vs pipeline vs data issues)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Tech Stack:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Power BI, DAX, SQL, PostgreSQL (production) / SQLite (local), ClickDNA tracking schema
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Impact:</strong>
                    </p>
                    <p className="text-foreground/80 dark:text-foreground/85 text-sm">
                      Improved operational monitoring, accelerated incident triage, and reduced blind spots in tracking-event data quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: Power BI Dashboard Portfolio */}
            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-3">Power BI Dashboard Portfolio (49+ Dashboards)</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Domains Covered:</strong>
                    </p>
                    <ul className="text-muted-foreground text-sm list-disc list-inside space-y-1 ml-2">
                      <li>Operations (inventory, inbound/outbound, near-expiry, forecast vs actual)</li>
                      <li>Finance (cash flow, AR, petty cash, profitability)</li>
                      <li>HR (recruitment, training, employee NPS, diversity)</li>
                      <li>Customer Service (complaints, NPS)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Data Sources:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      ERP, WMS, SQL databases, Excel, SharePoint
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation & RPA Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b">Automation & RPA</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Project 1: Automated Approval Systems */}
            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-3">Automated Approval Systems (HR & Finance)</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Description:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Built end-to-end automated approval workflows for recruitment, petty cash, and overtime requests.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Impact:</strong>
                    </p>
                    <ul className="text-foreground/80 dark:text-foreground/85 text-sm list-disc list-inside space-y-1 ml-2">
                      <li>Reduced approval cycle times</li>
                      <li>Improved compliance and visibility</li>
                      <li>Eliminated paper-based tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: OCR-Based POD Extraction */}
            <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-3">OCR-Based POD Extraction</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Description:</strong>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Developed an OCR bot to extract delivery data from scanned PODs and rename files automatically.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/70 dark:text-foreground/80 mb-2">
                      <strong>Impact:</strong>
                    </p>
                    <ul className="text-foreground/80 dark:text-foreground/85 text-sm list-disc list-inside space-y-1 ml-2">
                      <li>Saved 20–40 hours per week</li>
                      <li>Reduced manual data entry errors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in working together? Let's discuss your project needs.
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

