import { Schema, model } from "mongoose";
import { IMessage } from "./message.interface";

const messageSchema = new Schema<IMessage>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
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

messageSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const MessageModel = model<IMessage>("Message", messageSchema);
