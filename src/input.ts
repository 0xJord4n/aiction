import * as zod from "zod";
import { Provider, Role } from "./types";

export const providerOptionsSchema = zod.object({
  api_key: zod.string().optional(),
  base_url: zod.string().optional(),
  headers: zod.record(zod.string(), zod.string()).optional(),
});

export const messageSchema = zod
  .object({
    role: zod.nativeEnum(Role),
    content: zod.string().optional(),
    content_path: zod.string().optional(),
  })
  .refine((data) => data.content || data.content_path, {
    message: "Either content or content_path must be provided",
    path: ["content", "content_path"],
  });

export const inputSchema = zod.object({
  provider: zod.nativeEnum(Provider),
  provider_options: providerOptionsSchema,
  save_path: zod.string().optional(),
  prompt: zod.string().optional(),
  prompt_path: zod.string().optional(),
  system: zod.string().optional(),
  system_path: zod.string().optional(),
  messages: zod.array(messageSchema).optional(),
  model: zod.string(),
  temperature: zod.number().optional(),
  max_tokens: zod.number().optional(),
  top_p: zod.number().optional(),
  frequency_penalty: zod.number().optional(),
  presence_penalty: zod.number().optional(),
  stop: zod.array(zod.string()).optional(),
});
