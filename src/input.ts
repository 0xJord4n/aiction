import * as zod from "zod";
import { Provider, Role } from "./types";

export const providerOptionsSchema = zod.object({
  api_key: zod.string().optional(),
  base_url: zod.string().optional(),
  headers: zod.record(zod.string(), zod.string()).optional(),
});

export const messageSchema = zod.object({
  role: zod.nativeEnum(Role),
  content: zod.string(),
});

export const inputSchema = zod.object({
  provider: zod.nativeEnum(Provider),
  provider_options: providerOptionsSchema,
  prompt: zod.string().optional(),
  system: zod.string().optional(),
  messages: zod.array(messageSchema).optional(),
  model: zod.string(),
  temperature: zod.number().optional(),
  max_tokens: zod.number().optional(),
  top_p: zod.number().optional(),
  frequency_penalty: zod.number().optional(),
  presence_penalty: zod.number().optional(),
  stop: zod.array(zod.string()).optional(),
});
