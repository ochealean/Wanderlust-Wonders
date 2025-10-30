import { getAllDestinations } from '@/lib/data';
import DestinationCard from '@/components/destination-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

// This is a server component, so search/filter logic would typically
// be handled via URL query params and re-fetching data.
// For this example, the inputs are for UI demonstration purposes.

export default function DestinationsPage() {
  const destinations = getAllDestinations();

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Explore Our Destinations</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          From serene temples to bustling cities and pristine beaches, your next adventure starts here.
        </p>
      </header>

      <div className="mb-12 max-w-lg mx-auto">
        <div className="flex items-center space-x-2">
          <Input 
            type="search" 
            placeholder="Search by name or location..."
            className="flex-grow"
          />
          <Button type="submit" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
}
