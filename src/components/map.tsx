'use client';

import { useMemo } from 'react';
import { Map, AdvancedMarker, Pin, useApiIsLoaded } from '@vis.gl/react-google-maps';

type InteractiveMapProps = {
  lat: number;
  lng: number;
  name: string;
};

export default function InteractiveMap({ lat, lng, name }: InteractiveMapProps) {
  const position = useMemo(() => ({ lat, lng }), [lat, lng]);
  const isLoaded = useApiIsLoaded();

  if (!isLoaded) {
    return <div className="h-full w-full rounded-lg bg-muted flex items-center justify-center"><p className="text-muted-foreground">Map is unavailable. Please provide a Google Maps API key.</p></div>;
  }

  return (
    <div className="h-full w-full rounded-lg overflow-hidden">
      <Map
        zoom={13}
        center={position}
        mapId="WANDERLUST_WONDERS_MAP"
        disableDefaultUI={true}
        gestureHandling="cooperative"
      >
        <AdvancedMarker position={position} title={name}>
          <Pin 
            background={'hsl(var(--primary))'} 
            borderColor={'hsl(var(--primary-foreground))'} 
            glyphColor={'hsl(var(--primary-foreground))'} 
          />
        </AdvancedMarker>
      </Map>
    </div>
  );
}
