import catchAsync from "../../utils/catchAsync";
import { MessageServices } from "./message.services";

const createMessage = catchAsync(async (req, res) => {

  const result = await MessageServices.createMessageIntoDb(req.body);
  res.status(200).json({
    success: true,
    message: "Message Send successfully",
    statusCode: 200,
    data: result,
  });
});

const getAllMessages = catchAsync(async (req, res) => {
  const result = await MessageServices.getAllMessage();
  res.status(200).json({
    success: true,
    message: "Message Retrieved successfully",
    statusCode: 200,
    data: result,
  });
});

export const MessageController = {
  createMessage,
  getAllMessages,
};
