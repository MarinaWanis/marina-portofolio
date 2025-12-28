import { Hero } from "@/components/hero";
import { WhatIDo } from "@/components/what-i-do";
import { CurrentFocus } from "@/components/current-focus";
import { FeaturedProjects } from "@/components/featured-projects";
import { BlogPreview } from "@/components/blog-preview";
import { CallToAction } from "@/components/call-to-action";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhatIDo />
      <CurrentFocus />
      <FeaturedProjects />
      <BlogPreview />
      <CallToAction />
    </div>
  );
}


