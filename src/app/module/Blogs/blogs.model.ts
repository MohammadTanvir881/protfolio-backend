import { Schema, model } from "mongoose";
import { IBlogModel } from "./blogs.interface";

const blogsSchema = new Schema<IBlogModel>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    userImage: {
      type: String,
      required: [true, "User Image is required"],
    },
    title: {
      type: String,
      required: [true, "Title is Required"],
    },
    email: {
      type: String,
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },

    content: {
      type: String,
      required: [true, "Content is Required"],
    },
    category: {
      type: String,
      required: [true, "Category is Required"],
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

blogsSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const BlogModel = model<IBlogModel>("Blog", blogsSchema);
