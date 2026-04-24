import { NextRequest } from "next/server";

type Body = {
  topic?: string;
  docType?: string;
  audience?: string;
  tone?: string;
  length?: string;
  sections?: string;
  notes?: string;
};

const SYSTEM_PROMPT = `You are a senior technical writer. You output ONLY the raw markdown document body — no commentary, no wrapping triple backticks around the entire document, no preface. Use proper markdown: ATX headings (#, ##), fenced code blocks with language hints for code, bullet and numbered lists, tables when they add clarity, and bold/italic for emphasis. Keep structure tight and scannable. Never include the phrase "here is your markdown" or similar.`;

function buildUserPrompt(b: Body): string {
  const parts: string[] = [];
  parts.push(`Topic / title: ${b.topic || "Untitled"}`);
  if (b.docType) parts.push(`Document type: ${b.docType}`);
  if (b.audience) parts.push(`Target audience: ${b.audience}`);
  if (b.tone) parts.push(`Tone: ${b.tone}`);
  if (b.length) parts.push(`Length: ${b.length}`);
  if (b.sections) parts.push(`Required sections: ${b.sections}`);
  if (b.notes) parts.push(`Extra notes / requirements:\n${b.notes}`);
  parts.push("");
  parts.push("Produce the full markdown document now.");
  return parts.join("\n");
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_MD_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "GROQ_MD_API_KEY is not configured on the server." },
      { status: 500 }
    );
  }

  let body: Body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body.topic || !body.topic.trim()) {
    return Response.json({ error: "A topic is required." }, { status: 400 });
  }

  const upstream = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        temperature: 0.4,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: buildUserPrompt(body) },
        ],
      }),
    }
  );

  if (!upstream.ok) {
    const text = await upstream.text();
    return Response.json(
      { error: `Groq upstream error: ${upstream.status} ${text}` },
      { status: 502 }
    );
  }

  const data = await upstream.json();
  const markdown: string =
    data?.choices?.[0]?.message?.content?.trim?.() ?? "";

  if (!markdown) {
    return Response.json({ error: "Empty response from model." }, { status: 502 });
  }

  return Response.json({ markdown });
}
