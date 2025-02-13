"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogServices = void 0;
const appError_1 = __importDefault(require("../../Error/appError"));
const blogs_model_1 = require("./blogs.model");
const createBlogIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_model_1.BlogModel.create(payload);
    return result;
});
const getAllBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogs_model_1.BlogModel.find().sort({ createdAt: -1 });
    return result;
});
const updateBlogIntoDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blogs_model_1.BlogModel.findById(id);
    if (!blog) {
        throw new appError_1.default(400, "Blog Not Found");
    }
    const result = yield blogs_model_1.BlogModel.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteBlogsFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blogs_model_1.BlogModel.findById(id);
    if (!blog) {
        throw new appError_1.default(400, "Blog Not Found");
    }
    const result = yield blogs_model_1.BlogModel.findByIdAndUpdate(id, { isDeleted: true }, {
        new: true,
        runValidators: true,
    });
    return result;
});
exports.BlogServices = {
    createBlogIntoDb,
    getAllBlogs,
    updateBlogIntoDb,
    deleteBlogsFromDb,
};
