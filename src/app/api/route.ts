import { StringOutputParser } from "@langchain/core/output_parsers";
import { CommaSeparatedListOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
});

async function makeQuestion() {
  const prompt = PromptTemplate.fromTemplate("Ask me a trivia question about georgraphy");
  // get just as simple string output
  const chain = prompt.pipe(model).pipe(new StringOutputParser());
  return await chain.invoke({});
}

async function makeChoices(question: string) {
  const prompt = PromptTemplate.fromTemplate(
    "Give 4 possible answers for {question}, separated by commas, 3 false and 1 correct, in a random order.",
  );
  const chain = prompt.pipe(model).pipe(new CommaSeparatedListOutputParser());

  return await chain.invoke({ question });
}

export async function GET() {
  const question = await makeQuestion();
  const choices = await makeChoices(question);

  return Response.json({ question, choices });
}
