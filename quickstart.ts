import Anthropic from "@anthropic-ai/sdk";
import dotenv from "dotenv";

// Load environment variables from local.env
dotenv.config({ path: "local.env" });

async function main() {
  const anthropic = new Anthropic();

  const msg = await anthropic.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1000,
    messages: [
      {
        role: "user",
        content: "I am building my personal website to showcase my experience, interests, and accomplishments. What pages should I have on my website?",
      },
    ],
  });
  console.log(msg);
}

main().catch(console.error);
