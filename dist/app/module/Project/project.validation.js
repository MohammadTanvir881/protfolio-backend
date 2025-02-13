"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectValidation = exports.updateProjectValidationSchema = exports.createProjectValidationSchema = void 0;
const zod_1 = require("zod");
// Zod validation schema for Blog
exports.createProjectValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required",
        }),
        email: zod_1.z.string().optional(),
        userImage: zod_1.z.string({
            required_error: "User Image is required",
        }),
        title: zod_1.z
            .string({
            required_error: "Title is required",
        })
            .min(1, "Title cannot be empty"),
        image: zod_1.z.string({
            required_error: "Image is required",
        }),
        descriptions: zod_1.z
            .string({
            required_error: "descriptions is required",
        })
            .min(1, "descriptions cannot be empty"),
        liveLink: zod_1.z.string({
            required_error: "Live Link Of the project is required",
        }),
    }),
});
exports.updateProjectValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: "Name is required",
        })
            .optional(),
        email: zod_1.z.string().optional(),
        userImage: zod_1.z
            .string({
            required_error: "User Image is required",
        })
            .optional(),
        title: zod_1.z
            .string({
            required_error: "Title is required",
        })
            .min(1, "Title cannot be empty")
            .optional(),
        image: zod_1.z
            .string({
            required_error: "Image is required",
        })
            .optional(),
        descriptions: zod_1.z
            .string({
            required_error: "descriptions is required",
        })
            .min(1, "descriptions cannot be empty")
            .optional(),
        liveLink: zod_1.z
            .string({
            required_error: "Live Link Of the project is required",
        })
            .optional(),
    }),
});
exports.projectValidation = {
    createProjectValidationSchema: exports.createProjectValidationSchema,
    updateProjectValidationSchema: exports.updateProjectValidationSchema,
};
