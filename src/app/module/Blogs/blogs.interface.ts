import { Types } from "mongoose";

export interface IBlogModel {
  name: string;
  userImage: string;
  title: string;
  email: string;
  image: string;
  content: string;
  category: string;
  isDeleted?: boolean;
}
