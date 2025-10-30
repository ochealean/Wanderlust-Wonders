import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getDestinationById, searchReviews, sortReviews } from '@/lib/data';
import { Accessibility, Calendar, DollarSign, MapPin, Search, Star, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from 'date-fns';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import InteractiveMap from '@/components/map';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

type DestinationDetailPageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'text-accent fill-accent' : 'text-muted-foreground/50'
          }`}
        />
      ))}
    </div>
  );
}

export default function DestinationDetailPage({ params, searchParams }: DestinationDetailPageProps) {
  const destination = getDestinationById(Number(params.id));
  
  if (!destination) {
    notFound();
  }

  const searchQuery = typeof searchParams.search === 'string' ? searchParams.search : '';
  const sortBy = typeof searchParams.sort === 'string' ? searchParams.sort as 'recency' | 'rating-high' | 'rating-low' : 'recency';
  
  const filteredReviews = searchReviews(destination.reviews, searchQuery);
  const sortedReviews = sortReviews(filteredReviews, sortBy);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <Carousel className="w-full mb-8 rounded-lg overflow-hidden shadow-lg">
            <CarouselContent>
              <CarouselItem>
                <div className="relative h-96">
                  <Image src={destination.image} alt={destination.name} fill className="object-cover" data-ai-hint={destination.imageHint}/>
                </div>
              </CarouselItem>
              {destination.gallery.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-96">
                    <Image src={img} alt={`${destination.name} gallery image ${index + 1}`} fill className="object-cover" data-ai-hint={destination.galleryHints[index]}/>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
          
          <div className="h-80 w-full">
            <InteractiveMap lat={destination.lat} lng={destination.lng} name={destination.name}/>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-2">{destination.name}</h1>
          <div className="flex items-center text-lg text-muted-foreground mb-6">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{destination.location}</span>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <p className="text-foreground/90 mb-6">{destination.description}</p>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <DollarSign className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Typical Cost</h3>
                    <p className="text-muted-foreground">Budget level: {destination.typicalCost}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Accessibility className="h-5 w-5 mr-3 mt-0.5 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Accessibility</h3>
                    <p className="text-muted-foreground">{destination.accessibilityInfo}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-12" />

      <div>
        <h2 className="text-3xl font-headline font-bold mb-8">Reviews & Ratings</h2>

        <Card className="mb-8">
            <CardContent className="p-4 sm:p-6">
                <form className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
                    <div className="md:col-span-2">
                        <Label htmlFor="search">Search reviews</Label>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input id="search" name="search" placeholder="e.g., 'food' or 'crowded'" className="pl-10" defaultValue={searchQuery} />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="sort">Sort by</Label>
                        <Select name="sort" defaultValue={sortBy}>
                            <SelectTrigger id="sort">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="recency">Most Recent</SelectItem>
                                <SelectItem value="rating-high">Rating: High to Low</SelectItem>
                                <SelectItem value="rating-low">Rating: Low to High</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button type="submit" className="w-full">Apply Filters</Button>
                </form>
            </CardContent>
        </Card>
        
        <div className="space-y-6">
          {sortedReviews.length > 0 ? sortedReviews.map((review) => (
            <Card key={review.id} className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={review.avatar} alt={review.author} data-ai-hint="person portrait"/>
                  <AvatarFallback><User /></AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-semibold">{review.author}</h4>
                    <StarRating rating={review.rating} />
                  </div>
                   <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3 mr-1.5" />
                      <time dateTime={review.date}>{format(new Date(review.date), 'MMMM d, yyyy')}</time>
                    </div>
                  <p className="text-sm text-foreground/80">{review.comment}</p>
                </div>
              </div>
            </Card>
          )) : (
            <p className="text-center text-muted-foreground py-8">No reviews match your search. Be the first to leave one!</p>
          )}
        </div>

        <Separator className="my-12" />

        <div>
            <h3 className="text-2xl font-headline font-bold mb-6">Leave a Review</h3>
            <Card>
                <CardContent className="p-6">
                    <form className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="name">Your Name</Label>
                                <Input id="name" placeholder="John Doe" />
                            </div>
                            <div>
                                <Label htmlFor="rating">Rating</Label>
                                <Select>
                                    <SelectTrigger id="rating">
                                        <SelectValue placeholder="Select a rating" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="5">5 Stars - Excellent</SelectItem>
                                        <SelectItem value="4">4 Stars - Very Good</SelectItem>
                                        <SelectItem value="3">3 Stars - Average</SelectItem>
                                        <SelectItem value="2">2 Stars - Poor</SelectItem>
                                        <SelectItem value="1">1 Star - Terrible</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="comment">Your Review</Label>
                            <Textarea id="comment" placeholder="Share your experience..." />
                        </div>
                        <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">Submit Review</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
