import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Globe,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getFeaturedDestinations, getLatestBlogPosts } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import DestinationCard from '@/components/destination-card';
import BlogCard from '@/components/blog-card';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const featuredDestinations = getFeaturedDestinations();
  const latestBlogPosts = getLatestBlogPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full h-[60vh] md:h-[80vh] text-white">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-lg">
              Your Next Adventure Awaits
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl mb-8 drop-shadow-md">
              Discover breathtaking destinations, create unforgettable memories,
              and let our AI guide you to the perfect trip.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/destinations">
                Explore Destinations <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="featured-destinations" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
              Featured Destinations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="ai-recommendations"
          className="py-16 md:py-24 bg-secondary"
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <Sparkles className="h-12 w-12 text-accent mx-auto md:mx-0 mb-4" />
                <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
                  Personalized Travel Itineraries
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Tired of generic travel guides? Our AI-powered tool analyzes your unique preferences to craft a journey just for you. Get recommendations that match your style, budget, and interests.
                </p>
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/recommendations">
                    Get Your Itinerary <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="flex justify-center">
                <Card className="max-w-md w-full shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                       <div className="bg-primary/20 p-3 rounded-full">
                        <Globe className="h-8 w-8 text-primary" />
                       </div>
                       <div>
                        <h3 className="font-bold text-lg">Our AI is Ready to Help</h3>
                        <p className="text-sm text-muted-foreground">Tell us what you love</p>
                       </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-accent">&#10003;</span>
                        <p>Adventure & Exploration</p>
                      </div>
                       <div className="flex items-center space-x-2">
                        <span className="text-accent">&#10003;</span>
                        <p>Relaxing Beach Vacations</p>
                      </div>
                       <div className="flex items-center space-x-2">
                        <span className="text-accent">&#10003;</span>
                        <p>Cultural City Tours</p>
                      </div>
                       <div className="flex items-center space-x-2">
                        <span className="text-accent">&#10003;</span>
                        <p>And so much more...</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="latest-posts" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-12">
              From Our Travel Blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestBlogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
             <div className="text-center mt-12">
                <Button asChild variant="outline">
                  <Link href="/blog">
                    Read More Articles
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
