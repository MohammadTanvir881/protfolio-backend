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
exports.ProjectController = void 0;
const appError_1 = __importDefault(require("../../Error/appError"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const project_service_1 = require("./project.service");
const createProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("from blog controller", req.user);
    const result = yield project_service_1.ProjectServices.createBlogIntoDb(req.body);
    res.status(200).json({
        success: true,
        message: "Project Created successfully",
        statusCode: 200,
        data: result,
    });
}));
const getAllProject = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_service_1.ProjectServices.getAllProject();
    res.status(200).json({
        success: true,
        message: "Projects Retrieved successfully",
        statusCode: 200,
        data: result,
    });
}));
const updateProjects = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.user)
    const { id } = req.params;
    const result = yield project_service_1.ProjectServices.updateProjectIntoDb(id, req.body);
    // console.log("from Update Blogs" , result)
    if (!result) {
        throw new appError_1.default(500, "Sorry This is not your Project");
    }
    res.status(200).json({
        success: true,
        message: "Project Updated successfully",
        statusCode: 200,
        data: result,
    });
}));
const deleteProjects = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield project_service_1.ProjectServices.deleteProjectsFromDb(id);
    res.status(200).json({
        success: true,
        message: "Project deleted successfully",
        statusCode: 200,
    });
}));
exports.ProjectController = {
    createProject,
    getAllProject,
    updateProjects,
    deleteProjects,
};
