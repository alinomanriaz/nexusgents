import mongoose, { Schema, Document, Model } from "mongoose";

// 1. Define the interface for the category document
export interface ICategory extends Document {
  categoryname: string;
  description?: string;
}

// 2. Create the schema
const categorySchema: Schema = new Schema(
  {
    categoryname: {
      type: String,
      required: [true, "Please provide a category"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true } // Optional: Adds createdAt and updatedAt fields
);

// 3. Prevent model overwrite in dev and export
const Category: Model<ICategory> =
  mongoose.models.Category || mongoose.model<ICategory>("Category", categorySchema);

export default Category;
