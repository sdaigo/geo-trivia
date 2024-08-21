import { StructuredOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";

const model = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 1.0,
});

const parser = StructuredOutputParser.fromZodSchema(
  z.object({
    question: z.string().describe("Tell me a random geography trivia question"),
    choices: z
      .array(z.string())
      .describe("Give 4 possible answers, in a random order, out of which only one is true."),
    correctIndex: z.number().describe("The number of the currect answer, zero indexed"),
  }),
);

const chain = RunnableSequence.from([
  PromptTemplate.fromTemplate(
    "Answer the user question as best as possible.\n{format_instructions}",
  ),
  model,
  parser,
]);

export async function GET() {
  const { question, choices, correctIndex } = await chain.invoke({
    format_instructions: parser.getFormatInstructions(),
  });

  return Response.json({ question, choices, correctIndex });
}
