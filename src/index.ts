import { getInput, setFailed, setOutput } from "@actions/core";
import runAction from "./action";
import { inputSchema } from "./input";

const parsedInput = inputSchema.safeParse(JSON.parse(getInput("config")));
if (!parsedInput.success) {
  setFailed(parsedInput.error.message);
  process.exit(1);
}

runAction(parsedInput.data)
  .then((result) => {
    setOutput("text", result.text);
    setOutput("usage", result.usage);
    setOutput("finishReason", result.finishReason);
  })
  .catch((error) => {
    console.error(error);
    setFailed(error);
    process.exit(1);
  });
