"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRoute = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../utils/validateRequest"));
const project_validation_1 = require("./project.validation");
const project_controller_1 = require("./project.controller");
const route = (0, express_1.Router)();
route.post("/", (0, validateRequest_1.default)(project_validation_1.projectValidation.createProjectValidationSchema), project_controller_1.ProjectController.createProject);
route.get("/", project_controller_1.ProjectController.getAllProject);
route.patch("/:id", (0, validateRequest_1.default)(project_validation_1.projectValidation.updateProjectValidationSchema), project_controller_1.ProjectController.updateProjects);
route.delete("/:id", project_controller_1.ProjectController.deleteProjects);
exports.ProjectRoute = route;
