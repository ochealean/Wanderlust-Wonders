export type Review = {
  id: number;
  author: string;
  avatar?: string;
  rating: number;
  comment: string;
  date: string;
};

export type Destination = {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  imageHint: string;
  gallery: string[];
  galleryHints: string[];
  typicalCost: string;
  accessibilityInfo: string;
  reviews: Review[];
  lat: number;
  lng: number;
};

export type BlogPost = {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  imageHint: string;
};
