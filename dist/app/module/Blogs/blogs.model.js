"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogModel = void 0;
const mongoose_1 = require("mongoose");
const blogsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    userImage: {
        type: String,
        required: [true, "User Image is required"],
    },
    title: {
        type: String,
        required: [true, "Title is Required"],
    },
    email: {
        type: String,
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },
    content: {
        type: String,
        required: [true, "Content is Required"],
    },
    category: {
        type: String,
        required: [true, "Category is Required"],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
blogsSchema.pre("find", function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
});
exports.BlogModel = (0, mongoose_1.model)("Blog", blogsSchema);
