"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blog_route_1 = require("../module/Blogs/blog.route");
const project_route_1 = require("../module/Project/project.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/blogs",
        route: blog_route_1.BlogRoute,
    },
    {
        path: "/projects",
        route: project_route_1.ProjectRoute,
    },
    //   {
    //     path: "/admin",
    //   },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
