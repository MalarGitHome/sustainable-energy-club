import { readFileSync, writeFileSync } from "fs";

const POSTS_PATH = new URL("../src/data/posts.json", import.meta.url);
const token = process.env.GITHUB_TOKEN;
if (!token) {
  throw new Error("GITHUB_TOKEN is not set");
}

const today = new Date().toISOString().slice(0, 10);

const res = await fetch(
  "https://models.github.ai/inference/chat/completions",
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Generate a single fun and interesting sustainable energy news headline with a short summary (2-3 sentences). The date is ${today}. Reply with ONLY valid JSON in this exact format, no other text:\n{"title": "...", "date": "${today}", "summary": "..."}`,
        },
      ],
      max_tokens: 300,
    }),
  },
);

if (!res.ok) {
  const body = await res.text();
  throw new Error(`GitHub Models API error ${res.status}: ${body}`);
}

const data = await res.json();
const text = data.choices[0].message.content.trim();
const newPost = JSON.parse(text);

const posts = JSON.parse(readFileSync(POSTS_PATH, "utf-8"));
posts.unshift(newPost);
writeFileSync(POSTS_PATH, JSON.stringify(posts, null, 2) + "\n");

console.log(`Added post: ${newPost.title}`);
