import { Router } from "express";
import { BlogRoute } from "../module/Blogs/blog.route";
import { ProjectRoute } from "../module/Project/project.route";
import { MessageRoute } from "../module/Messages/message.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/blogs",
    route: BlogRoute,
  },
  {
    path: "/projects",
    route: ProjectRoute,
  },
  {
    path: "/message",
    route: MessageRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
