import AppError from "../../Error/appError";
import { IBlogModel } from "./blogs.interface";
import { BlogModel } from "./blogs.model";
import { ObjectId } from "mongodb";

const createBlogIntoDb = async (payload: IBlogModel) => {
  const result = await BlogModel.create(payload);
  return result;
};

const getAllBlogs = async () => {
  const result = await BlogModel.find().sort({ createdAt: -1 });
  return result;
};

const updateBlogIntoDb = async (id: string, payload: Partial<IBlogModel>) => {
  const blog = await BlogModel.findById(id);
  if (!blog) {
    throw new AppError(400, "Blog Not Found");
  }
  const result = await BlogModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteBlogsFromDb = async (id: string) => {
  const blog = await BlogModel.findById(id);
  if (!blog) {
    throw new AppError(400, "Blog Not Found");
  }

  const result = await BlogModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
      runValidators: true,
    }
  );

  return result;
};

export const BlogServices = {
  createBlogIntoDb,
  getAllBlogs,
  updateBlogIntoDb,
  deleteBlogsFromDb,
};
