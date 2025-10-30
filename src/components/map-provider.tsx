"use client";

import { APIProvider } from "@vis.gl/react-google-maps";

export function MapProvider({ children }: { children: React.ReactNode }) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    console.error("Google Maps API key is missing. The map feature will be disabled.");
    return <>{children}</>;
  }

  return <APIProvider apiKey={apiKey}>{children}</APIProvider>;
}
