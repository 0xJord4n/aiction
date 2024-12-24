import { CoreMessage, LanguageModelUsage } from "ai";
import type { LanguageModelV1FinishReason } from "@ai-sdk/provider";

export enum Provider {
  OpenAI = "openai",
  Anthropic = "anthropic",
  GoogleVertex = "googleVertex",
  GoogleGenAI = "googleGenAI",
  Mistral = "mistral",
  XAIGrok = "xAIGrok",
  Groq = "groq",
  Cohere = "cohere",
  TogetherAI = "togetherai",
  Fireworks = "fireworks",
  DeepInfra = "deepinfra",
}

export enum Role {
  System = "system",
  User = "user",
  Assistant = "assistant",
  Data = "data",
}

export type Output = {
  text: string;
  usage: LanguageModelUsage;
  finishReason: LanguageModelV1FinishReason;
};
