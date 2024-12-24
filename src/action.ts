import type { z } from "zod";
import provider from "./provider";
import type { Output } from "./types";
import { CoreMessage, generateText } from "ai";
import type { inputSchema } from "./input";
import fs from "fs";
export default async (input: z.infer<typeof inputSchema>): Promise<Output> => {
  const llmResponse = await generateText({
    model: provider(input.provider, input.provider_options)(input.model),
    prompt: input.prompt,
    messages: input.messages as CoreMessage[],
    maxTokens: input.max_tokens,
    temperature: input.temperature,
    topP: input.top_p,
    frequencyPenalty: input.frequency_penalty,
    presencePenalty: input.presence_penalty,
    stopSequences: input.stop,
  });

  if (input.save_path) {
    fs.writeFileSync(input.save_path, llmResponse.text, {
      encoding: "utf-8",
    });
  }

  return {
    text: llmResponse.text,
    usage: llmResponse.usage,
    finishReason: llmResponse.finishReason,
  };
};
