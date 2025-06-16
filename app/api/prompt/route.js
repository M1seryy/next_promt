import Prompt from "@models/prompt";
import { connectDataBase } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectDataBase();

    const prompts = await Prompt.find().populate("creator");
    console.log("Prompts:", prompts);

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log("Error is " + error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
