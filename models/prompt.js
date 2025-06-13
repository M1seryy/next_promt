import { model, models, Schema } from "mongoose";

const promptSchema = new Schema({
  createpr: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is requred"],
  },
  tag: {
    type: String,
    required: [true, "Tag is requred"],
  },
});

const Prompt = models.Prompt || model("Prompt", promptSchema);

export default Prompt;
