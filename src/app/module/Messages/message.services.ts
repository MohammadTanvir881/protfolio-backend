import { IMessage } from "./message.interface";
import { MessageModel } from "./message.model";

const createMessageIntoDb = async (payload: IMessage) => {
  const result = await MessageModel.create(payload);
  return result;
};

const getAllMessage = async () => {
  const result = await MessageModel.find().sort({ createdAt: -1 });
  return result;
};

export const MessageServices = {
  createMessageIntoDb,
  getAllMessage,
};
