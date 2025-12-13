"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">
            Ready to start your next automation project? Let's discuss how I can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Let's Connect</h2>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need RPA automation, Power BI dashboards, or software engineering expertise, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">marina.maged@example.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">Remote / Available Worldwide</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/marina-maged"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-primary" />
                </a>
                <a
                  href="https://github.com/marina-maged"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <Github className="h-6 w-6 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

