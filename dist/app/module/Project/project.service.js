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
exports.ProjectServices = void 0;
const appError_1 = __importDefault(require("../../Error/appError"));
const project_model_1 = require("./project.model");
const createBlogIntoDb = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.ProjectModel.create(payload);
    return result;
});
const getAllProject = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.ProjectModel.find().sort({ createdAt: -1 });
    return result;
});
const updateProjectIntoDb = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield project_model_1.ProjectModel.findById(id);
    if (!blog) {
        throw new appError_1.default(400, "Blog Not Found");
    }
    const result = yield project_model_1.ProjectModel.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteProjectsFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield project_model_1.ProjectModel.findById(id);
    if (!blog) {
        throw new appError_1.default(400, "Project Not Found");
    }
    const result = yield project_model_1.ProjectModel.findByIdAndUpdate(id, { isDeleted: true }, {
        new: true,
        runValidators: true,
    });
    return result;
});
exports.ProjectServices = {
    createBlogIntoDb,
    getAllProject,
    updateProjectIntoDb,
    deleteProjectsFromDb,
};
