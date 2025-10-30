'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getAIRecommendations } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2 } from 'lucide-react';
import type { PersonalizedDestinationRecommendationsOutput } from '@/ai/flows/personalized-destination-recommendations';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  preferences: z
    .string()
    .min(20, { message: 'Please describe your travel preferences in a bit more detail.' })
    .max(1000, { message: 'Preferences must be 1000 characters or less.' }),
});

export function RecommendationForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PersonalizedDestinationRecommendationsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      preferences: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResult(null);
    const response = await getAIRecommendations({
      preferences: values.preferences,
      pastInteractions: 'No past interactions recorded for this demo.',
    });
    setLoading(false);

    if (response.success && response.data) {
      setResult(response.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'Oh no! Something went wrong.',
        description: response.error || 'There was a problem with your request.',
      });
    }
  }

  return (
    <>
      <Card className="max-w-2xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline">
                <Wand2 className="h-6 w-6 text-primary" />
                Tell Us Your Travel Dreams
              </CardTitle>
              <CardDescription>
                Describe your perfect getaway, and our AI will suggest some destinations for you. Mention your interests (e.g., hiking, beaches, museums), travel style (e.g., luxury, budget), and anything else that matters to you.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="preferences"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="preferences" className="sr-only">Travel Preferences</FormLabel>
                    <FormControl>
                      <Textarea
                        id="preferences"
                        placeholder="e.g., I'm looking for a relaxing beach vacation with my family. We love good food, snorkeling, and a bit of local culture. Our budget is moderate."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Recommendations'
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {result && (
        <Card className="max-w-2xl mx-auto mt-8 animate-in fade-in duration-500">
          <CardHeader>
            <CardTitle className="font-headline">Your Personalized Recommendations</CardTitle>
            <CardDescription>{result.reasoning}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {result.destinations.map((dest, index) => (
                <li key={index} className="text-lg font-medium">{dest}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </>
  );
}
