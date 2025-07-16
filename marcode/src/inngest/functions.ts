import { openai, createAgent } from "@inngest/agent-kit";
import { Sandbox } from "@e2b/code-interpreter";

import { inngest } from "./client";
import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {

    const sandboxId = await step.run("get-sandbox-id", async () => {
      const sandbox = await Sandbox.create("marcode-nextjs");
      return sandbox.sandboxId
    });

    // Create a new agent with a system prompt (you can add optional tools, too)
    const codeAgent = createAgent({
      name: "code-agent",
      system: "You are an expert next.js developer. You write readable, maintainable code. You wrtie simple next.js & react snippets.",
      model: openai({ model: "gpt-4o" }),
    });

    // Use the agent to summarize the input value
    const { output } = await codeAgent.run(
      `Write the following snippet: ${event.data.value}`,
    );

    // Run the code in the sandbox
    const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId);
      const host = sandbox.getHost(3000);
      return `http://${host}`;
    })

    return { output, sandboxUrl };
  },
);