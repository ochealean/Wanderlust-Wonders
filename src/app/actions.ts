'use server';

import {
  personalizedDestinationRecommendations,
  PersonalizedDestinationRecommendationsInput,
} from '@/ai/flows/personalized-destination-recommendations';

export async function getAIRecommendations(
  input: PersonalizedDestinationRecommendationsInput
) {
  try {
    const result = await personalizedDestinationRecommendations(input);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error getting AI recommendations:', error);
    return {
      success: false,
      error: 'Failed to generate recommendations. Please try again later.',
    };
  }
}
