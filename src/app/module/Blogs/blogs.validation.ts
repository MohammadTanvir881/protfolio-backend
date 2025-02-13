import { z } from "zod";

// Zod validation schema for Blog
export const createBlogValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    userImage: z.string({
      required_error: "User Image is required",
    }),
    title: z
      .string({
        required_error: "Title is required",
      })
      .min(1, "Title cannot be empty"),
    email: z.string().optional(),
    image: z.string({
      required_error: "Image is required",
    }),
    content: z
      .string({
        required_error: "Content is required",
      })
      .min(1, "Content cannot be empty"),
    category: z.string({
      required_error: "category is required",
    }),
  }),
});
export const updateBlogValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .optional(),
    userImage: z
      .string({
        required_error: "User Image is required",
      })
      .optional(),
    title: z
      .string({
        required_error: "Title is required",
      })
      .min(1, "Title cannot be empty")
      .optional(),
    email: z.string().optional(),
    image: z
      .string({
        required_error: "User Image is required",
      })
      .optional(),
    content: z
      .string({
        required_error: "Content is required",
      })
      .min(1, "Content cannot be empty")
      .optional(),
    category: z
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

export const blogValidation = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
