"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoute = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../utils/validateRequest"));
const blogs_validation_1 = require("./blogs.validation");
const blog_controller_1 = require("./blog.controller");
const route = (0, express_1.Router)();
route.post("/", (0, validateRequest_1.default)(blogs_validation_1.blogValidation.createBlogValidationSchema), blog_controller_1.BlogController.createBlog);
route.get("/", blog_controller_1.BlogController.getAllBlogs);
route.patch("/:id", (0, validateRequest_1.default)(blogs_validation_1.blogValidation.updateBlogValidationSchema), blog_controller_1.BlogController.updateBlogs);
route.delete("/:id", blog_controller_1.BlogController.deleteBlogs);
exports.BlogRoute = route;
