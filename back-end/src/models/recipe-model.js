import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        summary: {
            type: String,
            required: true,
        },
        ingredients: {
            type: String,
            required: true,
        },
        instructions: {
            type: String,
            required: true,
        },
        authorName: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const Recipe = mongoose.model("Recipe", recipeSchema)