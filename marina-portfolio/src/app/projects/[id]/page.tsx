import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // For now, return a placeholder
  // TODO: Implement actual project fetching logic
  if (!params.id) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Project: {params.id}</h1>
      <p className="text-muted-foreground">
        This project page is coming soon. The dynamic route is working correctly.
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  // TODO: Generate static params for known projects
  return [];
}
