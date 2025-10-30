import type { Destination, BlogPost, Review } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find((img) => img.id === id);

const reviews: Review[] = [
  {
    id: 1,
    author: 'Alex Johnson',
    avatar: getImage('avatar1')?.imageUrl,
    rating: 5,
    comment: 'Absolutely breathtaking! The temples are serene and the gardens are a piece of art. A must-visit.',
    date: '2023-10-15',
  },
  {
    id: 2,
    author: 'Maria Garcia',
    avatar: getImage('avatar2')?.imageUrl,
    rating: 4,
    comment: 'Kyoto is beautiful, but it can get very crowded, especially during cherry blossom season. Plan your visit accordingly!',
    date: '2023-09-22',
  },
  {
    id: 3,
    author: 'Sam Lee',
    avatar: getImage('avatar3')?.imageUrl,
    rating: 5,
    comment: 'The food scene is incredible. From street food to fine dining, every meal was a delight.',
    date: '2023-08-05',
  },
];

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Kyoto, Japan',
    location: 'Kansai region, Japan',
    description: 'Kyoto, the former imperial capital of Japan, is famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It’s also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.',
    image: getImage('kyoto-japan')?.imageUrl || '',
    imageHint: getImage('kyoto-japan')?.imageHint || '',
    gallery: [
      getImage('kyoto-gallery-1')?.imageUrl || '',
      getImage('kyoto-gallery-2')?.imageUrl || '',
      getImage('kyoto-gallery-3')?.imageUrl || '',
    ],
    galleryHints: ['temple Japan', 'bamboo forest', 'geisha district'],
    typicalCost: '$$$',
    accessibilityInfo: 'Major temples and stations are accessible, but many older streets and smaller shops can be challenging for wheelchair users.',
    reviews: reviews,
    lat: 35.0116,
    lng: 135.7681,
  },
  {
    id: 2,
    name: 'Santorini, Greece',
    location: 'Aegean Sea, Greece',
    description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
    image: getImage('santorini-greece')?.imageUrl || '',
    imageHint: getImage('santorini-greece')?.imageHint || '',
    gallery: [],
    galleryHints: [],
    typicalCost: '$$$$',
    accessibilityInfo: 'Due to its cliffside location and many stairs, Santorini is very challenging for visitors with mobility issues.',
    reviews: [],
    lat: 36.3932,
    lng: 25.4615,
  },
  {
    id: 3,
    name: 'Serengeti National Park, Tanzania',
    location: 'Northern Tanzania',
    description: 'Serengeti National Park is a world-renowned wildlife sanctuary in Tanzania. It’s famous for its massive annual migration of over 1.5 million wildebeest and 250,000 zebra and for its numerous Nile crocodile and honey badger. The park is the centerpiece of the Serengeti ecosystem, which also includes the Ngorongoro Conservation Area, and several other game reserves.',
    image: getImage('serengeti-tanzania')?.imageUrl || '',
    imageHint: getImage('serengeti-tanzania')?.imageHint || '',
    gallery: [],
    galleryHints: [],
    typicalCost: '$$$$$',
    accessibilityInfo: 'Safari vehicles can be adapted, and many lodges offer accessible rooms. However, the terrain is naturally uneven.',
    reviews: [],
    lat: -2.3333,
    lng: 34.8333,
  },
  {
    id: 4,
    name: 'Machu Picchu, Peru',
    location: 'Cusco Region, Peru',
    description: 'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it’s renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. Its exact former use remains a mystery.',
    image: getImage('machu-picchu-peru')?.imageUrl || '',
    imageHint: getImage('machu-picchu-peru')?.imageHint || '',
    gallery: [],
    galleryHints: [],
    typicalCost: '$$$',
    accessibilityInfo: 'The main site has many stairs and uneven paths. A special, shorter accessible route is available but offers limited views.',
    reviews: [],
    lat: -13.1631,
    lng: -72.5450,
  },
  {
    id: 5,
    name: 'Paris, France',
    location: 'Île-de-France, France',
    description: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
    image: getImage('paris-france')?.imageUrl || '',
    imageHint: getImage('paris-france')?.imageHint || '',
    gallery: [],
    galleryHints: [],
    typicalCost: '$$$$',
    accessibilityInfo: 'Many museums and attractions are accessible, but the Metro system is notoriously difficult to navigate with a wheelchair.',
    reviews: [],
    lat: 48.8566,
    lng: 2.3522,
  },
  {
    id: 6,
    name: 'Bora Bora, French Polynesia',
    location: 'South Pacific Ocean',
    description: 'Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef, it’s known for its scuba diving. It’s also a popular luxury resort destination where some guest bungalows are perched over the water on stilts. At the island\'s center rises Mt. Otemanu, a 727m dormant volcano.',
    image: getImage('bora-bora')?.imageUrl || '',
    imageHint: getImage('bora-bora')?.imageHint || '',
    gallery: [],
    galleryHints: [],
    typicalCost: '$$$$$',
    accessibilityInfo: 'Resorts are generally accessible, but moving between islands and participating in water activities may require assistance.',
    reviews: [],
    lat: -16.5004,
    lng: -151.7415,
  },
];

const blogPosts: BlogPost[] = [
  {
    slug: 'packing-like-a-pro',
    title: 'Packing Like a Pro: A Guide to Smart Traveling',
    author: 'Elena Petrova',
    date: '2023-11-01',
    excerpt: 'Say goodbye to overpacking and forgotten essentials. Our guide will turn you into a packing expert for any trip.',
    content: '<p>Packing can be a daunting task, but with a few simple strategies, you can make it a breeze. First, always start with a list. Categorize your items: clothing, toiletries, electronics, and documents. For clothing, choose versatile pieces that can be mixed and matched. Rolling your clothes instead of folding them not only saves space but also reduces wrinkles.</p><p>Use packing cubes to keep your suitcase organized. Designate cubes for different types of clothing (e.g., one for tops, one for bottoms, one for underwear). This makes it easy to find what you need without unpacking your entire bag. For toiletries, invest in travel-sized containers to save space and comply with airline liquid restrictions. And finally, always pack a portable charger and any necessary adapters for your destination. Happy travels!</p>',
    image: getImage('blog-packing-tips')?.imageUrl || '',
    imageHint: getImage('blog-packing-tips')?.imageHint || '',
  },
  {
    slug: 'traveling-on-a-budget',
    title: 'Wander More, Spend Less: Top 10 Budget Travel Tips',
    author: 'John Smith',
    date: '2023-10-25',
    excerpt: 'Traveling the world doesn’t have to break the bank. Discover our secrets to exploring more while spending less.',
    content: '<p>Traveling on a budget is all about making smart choices. One of the biggest expenses is accommodation. Consider staying in hostels, guesthouses, or using services like Couchsurfing to save money and meet locals. When it comes to food, eat like a local. Street food is often delicious and much cheaper than tourist-trap restaurants. Visit local markets to buy fresh produce and snacks.</p><p>For transportation, use public transit instead of taxis. In many cities, you can buy a multi-day pass for unlimited travel. Look for free activities, such as walking tours, parks, and museums with free admission days. Traveling during the off-season can also lead to significant savings on flights and accommodation. With a little planning, you can have an amazing adventure without a hefty price tag.</p>',
    image: getImage('blog-budget-travel')?.imageUrl || '',
    imageHint: getImage('blog-budget-travel')?.imageHint || '',
  },
  {
    slug: 'the-joys-of-solo-travel',
    title: 'The Joys and Challenges of Traveling Solo',
    author: 'Aisha Khan',
    date: '2023-10-18',
    excerpt: 'Embarking on a journey by yourself can be one of the most rewarding experiences. Here’s what you need to know.',
    content: '<p>Solo travel is a journey of self-discovery. It pushes you out of your comfort zone and allows you to be the sole author of your adventure. You can set your own pace, change your plans on a whim, and do exactly what you want to do. It’s an incredible opportunity to build confidence and become more independent.</p><p>However, it also comes with its challenges. Safety is a primary concern, so always be aware of your surroundings, especially at night. Inform someone of your itinerary and check in regularly. Loneliness can also creep in. Staying in social accommodations like hostels can help you meet other travelers. Don’t be afraid to strike up conversations with locals and other tourists. Despite the challenges, the freedom and personal growth that come with solo travel are invaluable.</p>',
    image: getImage('blog-solo-travel')?.imageUrl || '',
    imageHint: getImage('blog-solo-travel')?.imageHint || '',
  },
];


export function getAllDestinations(): Destination[] {
  return destinations;
}

export function getDestinationById(id: number): Destination | undefined {
  return destinations.find((dest) => dest.id === id);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.slice(0, 3);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getLatestBlogPosts(): BlogPost[] {
  return blogPosts.slice(0, 3);
}

export function searchReviews(reviews: Review[], query: string): Review[] {
  if (!query) return reviews;
  return reviews.filter(review => review.comment.toLowerCase().includes(query.toLowerCase()));
}

export function sortReviews(reviews: Review[], sortBy: 'recency' | 'rating-high' | 'rating-low'): Review[] {
  switch (sortBy) {
    case 'recency':
      return [...reviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    case 'rating-high':
      return [...reviews].sort((a, b) => b.rating - a.rating);
    case 'rating-low':
      return [...reviews].sort((a, b) => a.rating - b.rating);
    default:
      return reviews;
  }
}
