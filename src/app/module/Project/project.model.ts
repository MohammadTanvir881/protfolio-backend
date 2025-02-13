import { Schema, model } from "mongoose";
import { IProject } from "./project.interface";

const projectsSchema = new Schema<IProject>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
    },
    userImage: {
      type: String,
      required: [true, "User Image is required"],
    },
    title: {
      type: String,
      required: [true, "Title is Required"],
    },

    image: {
      type: String,
      required: [true, "Image is required"],
    },

    descriptions: {
      type: String,
      required: [true, "Description is Required"],
    },
    liveLink: {
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

projectsSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const ProjectModel = model<IProject>("Project", projectsSchema);
