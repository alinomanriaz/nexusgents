// src/app/api/blog/[slug]/route.ts
// import BlogPost from "@/database/models/blogpost.model";
// import Category from "@/database/models/category.model";
import User from "@/database/models/user.model";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { db } from "@/database/db";
import BlogPost from "@/database/models/blogpost.Model";
import Category from "@/database/models/category.Model";

// GET request handler
export async function GET(request: Request, context: { params: { slug: string } }) {
  const { slug } = context.params;
  await db();
  const singleBlog = await BlogPost.findOne({ slug })
    .populate("categories", "categoryname")
    .populate("author", "username");

  return NextResponse.json({ result: singleBlog }, { status: 200 });
}

// DELETE request handler
export async function DELETE(request: Request, context: { params: { slug: string } }) {
  const { slug } = context.params;
  await db();
  await BlogPost.deleteOne({ slug });
  return NextResponse.json({ result: "Blog post deleted successfully" }, { status: 200 });
}

// PUT request handler
export async function PUT(request: Request, context: { params: { slug: string } }) {
  const { slug } = context.params;
  const formData = await request.formData();
  const timestamp = Date.now();

  await db();

  let BlogPostData: any = {};
  const Image = formData.get("featuredImage");

  if (Image === "false") {
    BlogPostData = {
      title: formData.get("title"),
      content: formData.get("content"),
      author: formData.get("author"),
      authorImage: formData.get("authorImage"),
      categories: formData.get("categories"),
      tags: formData.get("tags"),
      status: formData.get("status"),
    };
  } else {
    const cnvrtdByteData = await (Image as File).arrayBuffer();
    const buffer = Buffer.from(cnvrtdByteData);
    const path = `./public/${timestamp}_${(Image as File).name}`;
    await writeFile(path, buffer);
    const ImgUrl = `/${timestamp}_${(Image as File).name}`;

    BlogPostData = {
      title: formData.get("title"),
      content: formData.get("content"),
      author: formData.get("author"),
      authorImage: formData.get("authorImage"),
      categories: formData.get("categories"),
      tags: formData.get("tags"),
      status: formData.get("status"),
      featuredImage: ImgUrl,
    };
  }

  const author = await User.findById(BlogPostData.author);
  const categoryId = JSON.parse(BlogPostData.categories);
  const categories = await Category.find({ categoryname: { $in: categoryId } });

  const newBlogPost = {
    title: BlogPostData.title,
    content: BlogPostData.content,
    description: BlogPostData.content.slice(0, 150) + "...",
    author,
    categories,
    tags: BlogPostData.tags,
    status: BlogPostData.status,
    featuredImage: BlogPostData.featuredImage,
  };

  const updatedPost = await BlogPost.findOneAndUpdate({ slug }, newBlogPost, { new: true });

  if (!updatedPost) {
    return NextResponse.json({ message: "Blog post not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Blog post updated successfully", blogPost: updatedPost });
}
