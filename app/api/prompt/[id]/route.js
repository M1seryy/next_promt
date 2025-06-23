import Prompt from "@models/prompt";
import { connectDataBase } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectDataBase();

    const prompt = await Prompt.find(params.id).populate("creator");
    console.log("Prompts:", prompt);

    if (!prompt) return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    console.log("Error is " + error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = request;

  try {
    await connectDataBase();
    const existingPrompt = await Prompt.findById(params.id);
    if (!existingPrompt)
      return new Response("Prompt not found", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;
    await existingPrompt.save();

    return new Response("Prompt updated sucess", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to update", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectDataBase();

    await Prompt.findByIdAndDelete(params.id);
    return new Response("Prompt deleted sucess", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete", { status: 500 });
  }
};
