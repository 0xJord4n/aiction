import type { z } from "zod";
import provider from "./provider";
import type { Output } from "./types";
import { CoreMessage, generateText } from "ai";
import type { inputSchema } from "./input";
import fs from "fs";
import path from "path";

export default async (input: z.infer<typeof inputSchema>): Promise<Output> => {
  const llmResponse = await generateText({
    model: provider(input.provider, input.provider_options)(input.model),
    prompt: input.prompt_path
      ? fs.readFileSync(input.prompt_path, { encoding: "utf-8" })
      : input.prompt,
    system: input.system_path
      ? fs.readFileSync(input.system_path, { encoding: "utf-8" })
      : input.system,
    messages: input.messages
      ? (input.messages.map((message) => ({
          role: message.role,
          content: message.content_path
            ? fs.readFileSync(message.content_path, { encoding: "utf-8" })
            : message.content,
        })) as CoreMessage[])
      : undefined,
    maxTokens: input.max_tokens,
    temperature: input.temperature,
    topP: input.top_p,
    frequencyPenalty: input.frequency_penalty,
    presencePenalty: input.presence_penalty,
    stopSequences: input.stop,
  });

  if (input.save_path) {
    const dir = path.dirname(input.save_path);
    fs.mkdirSync(dir, { recursive: true });
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
