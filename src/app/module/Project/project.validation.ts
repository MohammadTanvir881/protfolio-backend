import { z } from "zod";

// Zod validation schema for Blog
export const createProjectValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),

    email: z.string().optional(),

    userImage: z.string({
      required_error: "User Image is required",
    }),

    title: z
      .string({
        required_error: "Title is required",
      })
      .min(1, "Title cannot be empty"),

    image: z.string({
      required_error: "Image is required",
    }),
    descriptions: z
      .string({
        required_error: "descriptions is required",
      })
      .min(1, "descriptions cannot be empty"),
    liveLink: z.string({
      required_error: "Live Link Of the project is required",
    }),
  }),
});
export const updateProjectValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .optional(),

    email: z.string().optional(),

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

    image: z
      .string({
        required_error: "Image is required",
      })
      .optional(),
    descriptions: z
      .string({
        required_error: "descriptions is required",
      })
      .min(1, "descriptions cannot be empty")
      .optional(),
    liveLink: z
      .string({
        required_error: "Live Link Of the project is required",
      })
      .optional(),
  }),
});

export const projectValidation = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
