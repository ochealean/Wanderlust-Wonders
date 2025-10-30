import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, User } from 'lucide-react';
import {format} from 'date-fns';

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <Card className="h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            <Image
              src={post.image}
              alt={`Image for ${post.title}`}
              fill
              className="object-cover rounded-t-lg"
              data-ai-hint={post.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardTitle className="text-xl font-headline mb-2 line-clamp-2">{post.title}</CardTitle>
          <div className="flex items-center text-xs text-muted-foreground mb-4 space-x-4">
            <div className="flex items-center">
              <User className="h-3 w-3 mr-1.5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1.5" />
              <time dateTime={post.date}>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
            </div>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>
        <CardFooter className="p-4">
           <div className="flex items-center text-primary font-semibold">
            <span>Read More</span>
            <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
