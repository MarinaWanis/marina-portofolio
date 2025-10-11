import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Award, Users, Code, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Marina Maged",
  description: "Learn more about Marina Maged, a passionate RPA & Power BI specialist with expertise in automation and data analytics.",
};

export default function AboutPage() {
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
            About <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about transforming businesses through intelligent automation and data-driven insights.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Main Content */}
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold mb-4">My Story</h2>
                <p className="text-muted-foreground mb-4">
                  I'm Marina Maged, a dedicated RPA & Power BI specialist with a passion for transforming businesses 
                  through intelligent automation and data-driven insights. With years of experience in the field, 
                  I've helped numerous organizations streamline their operations and make better decisions through 
                  technology.
                </p>
                <p className="text-muted-foreground mb-4">
                  My journey began with a fascination for how technology can solve complex business problems. 
                  This led me to specialize in Robotic Process Automation (RPA) and Power BI, where I discovered 
                  the power of combining automation with data analytics to drive real business value.
                </p>
                <p className="text-muted-foreground">
                  Today, I work with clients across various industries, helping them implement automation solutions 
                  and build comprehensive dashboards that turn raw data into actionable insights. My goal is to 
                  make technology accessible and beneficial for businesses of all sizes.
                </p>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Core Expertise</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Code className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">RPA Development</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      UiPath, Automation Anywhere, Blue Prism, and custom automation solutions
                    </p>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BarChart3 className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">Data Analytics</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Power BI, Tableau, SQL, Python, and advanced data visualization
                    </p>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">Business Process</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Process analysis, optimization, and digital transformation consulting
                    </p>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold">Software Engineering</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Full-stack development, API integration, and custom software solutions
                    </p>
                  </div>
                </div>
              </div>

              {/* Approach */}
              <div>
                <h2 className="text-2xl font-bold mb-4">My Approach</h2>
                <p className="text-muted-foreground mb-4">
                  I believe in a collaborative approach to every project. My process involves:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Understanding your business goals and challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Analyzing current processes and identifying automation opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Designing and implementing tailored solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Providing training and ongoing support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Measuring results and optimizing for continuous improvement</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Profile Card */}
              <div className="bg-card border rounded-lg p-6 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-primary/60">MM</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Marina Maged</h3>
                <p className="text-muted-foreground text-sm mb-4">RPA & Power BI Specialist</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects Completed</span>
                    <span className="font-semibold">50+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Years Experience</span>
                    <span className="font-semibold">5+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Happy Clients</span>
                    <span className="font-semibold">30+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Automation Hours Saved</span>
                    <span className="font-semibold">10,000+</span>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold mb-4">Certifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm">UiPath Advanced RPA Developer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm">Microsoft Power BI Data Analyst</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm">Azure Fundamentals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm">Agile Project Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}