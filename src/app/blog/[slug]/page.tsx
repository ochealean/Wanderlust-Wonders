import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getBlogPostBySlug } from '@/lib/data';
import { Calendar, User } from 'lucide-react';
import { format } from 'date-fns';

type BlogPostPageProps = {
  params: { slug: string };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-3xl md:text-5xl font-headline font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-sm text-muted-foreground space-x-6">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            <span>By {post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
          </div>
        </div>
      </header>
      
      <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image 
          src={post.image} 
          alt={`Banner for ${post.title}`} 
          fill 
          className="object-cover"
          data-ai-hint={post.imageHint}
        />
      </div>

      <div 
        className="prose prose-lg dark:prose-invert max-w-none prose-p:text-foreground/80 prose-headings:font-headline prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
