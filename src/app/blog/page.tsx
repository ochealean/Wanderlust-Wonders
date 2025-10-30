import { getAllBlogPosts } from '@/lib/data';
import BlogCard from '@/components/blog-card';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Our Travel Blog</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Stories, tips, and inspiration from the world of travel.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
