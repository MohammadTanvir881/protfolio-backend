import AppError from "../../Error/appError";
import { IProject } from "./project.interface";
import { ProjectModel } from "./project.model";

const createBlogIntoDb = async (payload: IProject) => {
  const result = await ProjectModel.create(payload);
  return result;
};

const getAllProject = async () => {
  const result = await ProjectModel.find().sort({ createdAt: -1 });
  return result;
};

const updateProjectIntoDb = async (id: string, payload: Partial<IProject>) => {
  const blog = await ProjectModel.findById(id);
  if (!blog) {
    throw new AppError(400, "Blog Not Found");
  }
  const result = await ProjectModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteProjectsFromDb = async (id: string) => {
  const blog = await ProjectModel.findById(id);
  if (!blog) {
    throw new AppError(400, "Project Not Found");
  }

  const result = await ProjectModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
      runValidators: true,
    }
  );

  return result;
};

export const ProjectServices = {
  createBlogIntoDb,
  getAllProject,
  updateProjectIntoDb,
  deleteProjectsFromDb,
};
