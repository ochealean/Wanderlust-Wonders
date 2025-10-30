import Image from 'next/image';
import Link from 'next/link';
import type { Destination } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, DollarSign, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';

type DestinationCardProps = {
  destination: Destination;
};

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${destination.id}`} className="group">
      <Card className="h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative h-56 w-full">
            <Image
              src={destination.image}
              alt={`Image of ${destination.name}`}
              fill
              className="object-cover rounded-t-lg"
              data-ai-hint={destination.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardTitle className="text-xl font-headline mb-2">{destination.name}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{destination.location}</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {destination.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 flex justify-between items-center">
          <Badge variant="secondary" className="text-base font-bold">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span className="sr-only">Cost</span>
            {destination.typicalCost.substring(1)}
          </Badge>
          <div className="flex items-center text-primary font-semibold">
            <span>Details</span>
            <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
