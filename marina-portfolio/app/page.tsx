import { Hero } from "@/components/hero";
import { SkillsShowcase } from "@/components/skills-showcase";
import { FeaturedProjects } from "@/components/featured-projects";
import { BlogPreview } from "@/components/blog-preview";
import { CallToAction } from "@/components/call-to-action";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <SkillsShowcase />
      <FeaturedProjects />
      <BlogPreview />
      <CallToAction />
    </div>
  );
}