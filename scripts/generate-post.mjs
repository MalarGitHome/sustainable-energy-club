import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync } from "fs";

const POSTS_PATH = new URL("../src/data/posts.json", import.meta.url);

const client = new Anthropic();

const today = new Date().toISOString().slice(0, 10);

const response = await client.messages.create({
  model: "claude-haiku-4-5",
  max_tokens: 300,
  messages: [
    {
      role: "user",
      content: `Generate a single fun and interesting sustainable energy news headline with a short summary (2-3 sentences). The date is ${today}. Reply with ONLY valid JSON in this exact format, no other text:\n{"title": "...", "date": "${today}", "summary": "..."}`,
    },
  ],
});

const text = response.content[0].text.trim();
const newPost = JSON.parse(text);

const posts = JSON.parse(readFileSync(POSTS_PATH, "utf-8"));
posts.unshift(newPost);
writeFileSync(POSTS_PATH, JSON.stringify(posts, null, 2) + "\n");

console.log(`Added post: ${newPost.title}`);
