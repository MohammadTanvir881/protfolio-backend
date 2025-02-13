"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogValidation = exports.updateBlogValidationSchema = exports.createBlogValidationSchema = void 0;
const zod_1 = require("zod");
// Zod validation schema for Blog
exports.createBlogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required",
        }),
        userImage: zod_1.z.string({
            required_error: "User Image is required",
        }),
        title: zod_1.z
            .string({
            required_error: "Title is required",
        })
            .min(1, "Title cannot be empty"),
        email: zod_1.z.string().optional(),
        image: zod_1.z.string({
            required_error: "Image is required",
        }),
        content: zod_1.z
            .string({
            required_error: "Content is required",
        })
            .min(1, "Content cannot be empty"),
        category: zod_1.z.string({
            required_error: "category is required",
        }),
    }),
});
exports.updateBlogValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            required_error: "Name is required",
        })
            .optional(),
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
        email: zod_1.z.string().optional(),
        image: zod_1.z
            .string({
            required_error: "User Image is required",
        })
            .optional(),
        content: zod_1.z
            .string({
            required_error: "Content is required",
        })
            .min(1, "Content cannot be empty")
            .optional(),
        category: zod_1.z
            .string({
            required_error: "category is required",
        })
            .optional(),
    }),
});
// export const updateBlogValidationSchema = z.object({
//   body: z.object({
//     title: z
//       .string({
//         required_error: "Title is required",
//       })
//       .min(1, "Title cannot be empty").optional(),
//     content: z
//       .string({
//         required_error: "Content is required",
//       })
//       .min(1, "Content cannot be empty").optional(),
//     isPublished: z.boolean().optional().default(true).optional(),
//   }),
// });
exports.blogValidation = {
    createBlogValidationSchema: exports.createBlogValidationSchema,
    updateBlogValidationSchema: exports.updateBlogValidationSchema,
};
