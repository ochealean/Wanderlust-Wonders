'use server';

/**
 * @fileOverview A personalized destination recommendation AI agent.
 *
 * - personalizedDestinationRecommendations - A function that generates personalized destination recommendations.
 * - PersonalizedDestinationRecommendationsInput - The input type for the personalizedDestinationRecommendations function.
 * - PersonalizedDestinationRecommendationsOutput - The return type for the personalizedDestinationRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedDestinationRecommendationsInputSchema = z.object({
  preferences: z
    .string()
    .describe(
      'A description of the users preferences, including travel style, budget, interests, and past travel experiences.'
    ),
  pastInteractions: z
    .string()
    .describe(
      'A description of the users past interactions with the travel website, including destinations viewed, reviews left, and searches performed.'
    ),
});
export type PersonalizedDestinationRecommendationsInput = z.infer<
  typeof PersonalizedDestinationRecommendationsInputSchema
>;

const PersonalizedDestinationRecommendationsOutputSchema = z.object({
  destinations: z
    .array(z.string())
    .describe(
      'A list of personalized travel destination recommendations based on the user preferences and past interactions.'
    ),
  reasoning: z
    .string()
    .describe(
      'A short explanation of why these destinations were recommended.'
    ),
});
export type PersonalizedDestinationRecommendationsOutput = z.infer<
  typeof PersonalizedDestinationRecommendationsOutputSchema
>;

export async function personalizedDestinationRecommendations(
  input: PersonalizedDestinationRecommendationsInput
): Promise<PersonalizedDestinationRecommendationsOutput> {
  return personalizedDestinationRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedDestinationRecommendationsPrompt',
  input: {schema: PersonalizedDestinationRecommendationsInputSchema},
  output: {schema: PersonalizedDestinationRecommendationsOutputSchema},
  prompt: `You are a travel expert specializing in personalized destination recommendations.

You will use the users preferences and past interactions to recommend personalized travel destinations.

Preferences: {{{preferences}}}
Past Interactions: {{{pastInteractions}}}

Respond with a list of destinations and a short explanation of why these destinations were recommended.

Destinations:`,
});

const personalizedDestinationRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedDestinationRecommendationsFlow',
    inputSchema: PersonalizedDestinationRecommendationsInputSchema,
    outputSchema: PersonalizedDestinationRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
