import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
        type: String,
        required: true,
      },
    photo: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
