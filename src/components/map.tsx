'use client';

import { Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

type InteractiveMapProps = {
  lat: number;
  lng: number;
  name: string;
};

export default function InteractiveMap({ lat, lng, name }: InteractiveMapProps) {
  const position = { lat, lng };

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
