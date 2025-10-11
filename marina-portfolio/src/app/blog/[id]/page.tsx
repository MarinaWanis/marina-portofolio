import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // For now, return a placeholder
  // TODO: Implement actual blog post fetching logic
  if (!params.id) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Post: {params.id}</h1>
      <p className="text-muted-foreground">
        This blog post is coming soon. The dynamic route is working correctly.
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  // TODO: Generate static params for known blog posts
  return [];
}
