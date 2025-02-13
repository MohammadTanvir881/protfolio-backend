import AppError from "../../Error/appError";
import catchAsync from "../../utils/catchAsync";
import { ProjectServices } from "./project.service";

const createProject = catchAsync(async (req, res) => {
  // console.log("from blog controller", req.user);

  const result = await ProjectServices.createBlogIntoDb(req.body);
  res.status(200).json({
    success: true,
    message: "Project Created successfully",
    statusCode: 200,
    data: result,
  });
});

const getAllProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProject();
  res.status(200).json({
    success: true,
    message: "Projects Retrieved successfully",
    statusCode: 200,
    data: result,
  });
});

const updateProjects = catchAsync(async (req, res) => {
  // console.log(req.user)
  const { id } = req.params;
  const result = await ProjectServices.updateProjectIntoDb(id, req.body);
  // console.log("from Update Blogs" , result)
  if (!result) {
    throw new AppError(500, "Sorry This is not your Project");
  }
  res.status(200).json({
    success: true,
    message: "Project Updated successfully",
    statusCode: 200,
    data: result,
  });
});

const deleteProjects = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.deleteProjectsFromDb(id);
  res.status(200).json({
    success: true,
    message: "Project deleted successfully",
    statusCode: 200,
  });
});

export const ProjectController = {
  createProject,
  getAllProject,
  updateProjects,
  deleteProjects,
};
