import { Router } from "express";
import validateRequest from "../../utils/validateRequest";
import { projectValidation } from "./project.validation";
import { ProjectController } from "./project.controller";

const route = Router();

route.post(
  "/",
  validateRequest(projectValidation.createProjectValidationSchema),
  ProjectController.createProject
);

route.get("/", ProjectController.getAllProject);

route.patch(
  "/:id",
  validateRequest(projectValidation.updateProjectValidationSchema),
  ProjectController.updateProjects
);
route.delete("/:id", ProjectController.deleteProjects);

export const ProjectRoute = route;
