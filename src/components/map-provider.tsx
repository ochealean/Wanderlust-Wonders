"use client";

import { APIProvider } from "@vis.gl/react-google-maps";

export function MapProvider({ children }: { children: React.ReactNode }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    // We'll just render the children without the map provider if the key is missing.
    // The component using the map will need to handle the case where the map is not available.
    return <>{children}</>;
  }

  return <APIProvider apiKey={apiKey}>{children}</APIProvider>;
}
