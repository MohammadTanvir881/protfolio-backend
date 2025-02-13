import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { blogValidation } from "./blogs.validation";
import { BlogController } from "./blog.controller";


const route = Router();

route.post(
  "/",
  validateRequest(blogValidation.createBlogValidationSchema) , BlogController.createBlog
);

route.get("/", BlogController.getAllBlogs);

route.patch(
  "/:id",
  validateRequest(blogValidation.updateBlogValidationSchema),
  BlogController.updateBlogs
);
route.delete(
  "/:id",
  BlogController.deleteBlogs
);

export const BlogRoute = route;
