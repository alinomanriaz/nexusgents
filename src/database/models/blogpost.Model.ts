import mongoose, { Document, Schema, Model } from 'mongoose';

// 1. Define the interface for the blog post
export interface IBlogPost extends Document {
  title: string;
  slug: string;
  description?: string;
  content: string;
  author: mongoose.Types.ObjectId;
  categories: mongoose.Types.ObjectId[];
  tags: string[];
  status: 'draft' | 'published';
  featuredImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Define the schema
const blogPostSchema = new Schema<IBlogPost>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
      },
    ],
    tags: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft',
    },
    featuredImage: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// 3. Create and export the model with dev-safe reuse
const BlogPost: Model<IBlogPost> =
  mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', blogPostSchema);

export default BlogPost;
