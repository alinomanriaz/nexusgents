// // src/app/api/blog/[slug]/route.ts
// // import BlogPost from "@/database/models/blogpost.model";
// // import Category from "@/database/models/category.model";
// import User from "@/database/models/user.model";
// import { NextResponse } from "next/server";
// import { writeFile } from "fs/promises";
// import { db } from "@/database/db";
// import BlogPost from "@/database/models/blogpost.Model";
// import Category from "@/database/models/category.Model";

// // GET request handler
// // export async function GET(request: Request, context: { params: { slug: string } }) {
// //   const { slug } = context.params;
// //   await db();
// //   const singleBlog = await BlogPost.findOne({ slug })
// //     .populate("categories", "categoryname")
// //     .populate("author", "username");

// //   return NextResponse.json({ result: singleBlog }, { status: 200 });
// // }

// // DELETE request handler
// export async function DELETE(request: Request, context: { params: { slug: string } }) {
//   const { slug } = context.params;
//   await db();
//   await BlogPost.deleteOne({ slug });
//   return NextResponse.json({ result: "Blog post deleted successfully" }, { status: 200 });
// }

// interface BlogPostFormData {
//   title: string;
//   content: string;
//   author: string;
//   authorImage: string;
//   categories: string;
//   tags: string;
//   status: string;
//   featuredImage?: string;
// }

// // PUT request handler
// export async function PUT(request: Request, context: { params: { slug: string } }) {
//   const { slug } = context.params;
//   const formData = await request.formData();
//   const timestamp = Date.now();

//   await db();

//   const image = formData.get("featuredImage");
//   let featuredImage: string | undefined;

//   if (image !== "false") {
//     const convertedByteData = await (image as File).arrayBuffer();
//     const buffer = Buffer.from(convertedByteData);
//     const path = `./public/${timestamp}_${(image as File).name}`;
//     await writeFile(path, buffer);
//     featuredImage = `/${timestamp}_${(image as File).name}`;
//   }

//   const BlogPostData: BlogPostFormData = {
//     title: formData.get("title") as string,
//     content: formData.get("content") as string,
//     author: formData.get("author") as string,
//     authorImage: formData.get("authorImage") as string,
//     categories: formData.get("categories") as string,
//     tags: formData.get("tags") as string,
//     status: formData.get("status") as string,
//     featuredImage,
//   };

//   const author = await User.findById(BlogPostData.author);
//   const categoryNames = JSON.parse(BlogPostData.categories);
//   const categories = await Category.find({ categoryname: { $in: categoryNames } });

//   const newBlogPost = {
//     title: BlogPostData.title,
//     content: BlogPostData.content,
//     description: BlogPostData.content.slice(0, 150) + "...",
//     author,
//     categories,
//     tags: BlogPostData.tags,
//     status: BlogPostData.status,
//     featuredImage: BlogPostData.featuredImage,
//   };

//   const updatedPost = await BlogPost.findOneAndUpdate({ slug }, newBlogPost, { new: true });

//   if (!updatedPost) {
//     return NextResponse.json({ message: "Blog post not found" }, { status: 404 });
//   }

//   return NextResponse.json({
//     message: "Blog post updated successfully",
//     blogPost: updatedPost,
//   });
// }
