import { Provider } from "./types";
import { createAnthropic } from "@ai-sdk/anthropic";
import { createMistral } from "@ai-sdk/mistral";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createXai } from "@ai-sdk/xai";
import { createGroq } from "@ai-sdk/groq";
import { createCohere } from "@ai-sdk/cohere";
import { createTogetherAI } from "@ai-sdk/togetherai";
import { createFireworks } from "@ai-sdk/fireworks";
import { createDeepInfra } from "@ai-sdk/deepinfra";
import { createOpenAI } from "@ai-sdk/openai";
import type { providerOptionsSchema } from "./input";
import type { z } from "zod";

export default (
  provider: Provider,
  settings: z.infer<typeof providerOptionsSchema>,
) => {
  const { api_key: apiKey, base_url: baseURL, headers } = settings;

  switch (provider) {
    case Provider.OpenAI:
      return createOpenAI({ apiKey, baseURL, headers });
    case Provider.Anthropic:
      return createAnthropic({ apiKey, baseURL, headers });
    case Provider.Mistral:
      return createMistral({ apiKey, baseURL, headers });
    case Provider.GoogleGenAI:
      return createGoogleGenerativeAI({ apiKey, baseURL, headers });
    case Provider.XAIGrok:
      return createXai({ apiKey, baseURL, headers });
    case Provider.Groq:
      return createGroq({ apiKey, baseURL, headers });
    case Provider.Cohere:
      return createCohere({ apiKey, baseURL, headers });
    case Provider.TogetherAI:
      return createTogetherAI({ apiKey, baseURL, headers });
    case Provider.Fireworks:
      return createFireworks({ apiKey, baseURL, headers });
    case Provider.DeepInfra:
      return createDeepInfra({ apiKey, baseURL, headers });
    default:
      throw new Error(`Unsupported provider: ${provider}`);
  }
};
