import { RecommendationForm } from '@/app/components/recommendation-form';

export default function RecommendationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">AI-Powered Itinerary Planner</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Let our intelligent travel assistant craft a unique journey tailored to your tastes. Your dream trip is just a few words away.
        </p>
      </header>

      <RecommendationForm />
    </div>
  );
}
