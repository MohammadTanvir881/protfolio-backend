import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { messageValidation } from "./message.validation";
import { MessageController } from "./message.controller";

const route = Router();

route.post(
  "/",
  validateRequest(messageValidation.messageSchema),
  MessageController.createMessage
);

route.get("/", MessageController.getAllMessages);

export const MessageRoute = route;
