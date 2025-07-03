// import { db } from "@/database/dbconnect/db"
// import BlogPost from "@/database/models/blogpost.model";
// import Category from "@/database/models/category.model";
// import User from "@/database/models/user.model";
// import { NextResponse } from "next/server";
// import { writeFile } from 'fs/promises';

// export const GET = async (request, context) => {
//     const { id } = await context.params;
//     await db();
//     const singleBlog = await BlogPost.findOne({ slug: id }).populate('categories', 'categoryname').populate('author','username');
//     return NextResponse.json({ result: singleBlog }, { status: 200 })
// }


// export const DELETE = async (request, context) => {
//     const { id } = await context.params
//     await db()
//     await BlogPost.deleteOne({ _id: id })
//     return NextResponse.json({ result: 'blogpost deleted sucessfully' }, { status: 200 })
// }

// export const PUT = async (request, context) => {
//     const { id } = await context.params;
//     const formData = await request.formData();
//     const timestamp = Date.now();

//     await db()

//     const Image = formData.get('featuredImage');

//     if (Image === 'false') {

//         // Prepare the BlogPost object
//         var BlogPostData = {
//             title: `${formData.get('title')}`,
//             content: `${formData.get('content')}`,
//             author: `${formData.get('author')}`,     // Assuming this is the author's ID
//             authorImage: `${formData.get('authorImage')}`,
//             categories: `${formData.get('categories')}`,     // Assuming these are category IDs
//             tags: `${formData.get('tags')}`,
//             status: `${formData.get('status')}`,
//             // featuredImage: `${ImgUrl}`,
//         };


//     } else {
//         // Process featured image
//         // const Image = formData.get('featuredImage');
//         const cnvrtdByteData = await Image.arrayBuffer();
//         const buffer = Buffer.from(cnvrtdByteData);
//         const path = `./public/${timestamp}_${Image.name}`;
//         await writeFile(path, buffer);
//         var ImgUrl = `/${timestamp}_${Image.name}`;

//         // Prepare the BlogPost object
//         var BlogPostData = {
//             title: `${formData.get('title')}`,
//             content: `${formData.get('content')}`,
//             author: `${formData.get('author')}`,     // Assuming this is the author's ID
//             authorImage: `${formData.get('authorImage')}`,
//             categories: `${formData.get('categories')}`,     // Assuming these are category IDs
//             tags: `${formData.get('tags')}`,
//             status: `${formData.get('status')}`,
//             featuredImage: `${ImgUrl}`,
//         };

//     }



//     const authorId = formData.get('author')
//     const author = await User.findById(authorId)

//     const categoryId = JSON.parse(formData.get('categories'))
//     const categories = await Category.find({ categoryname: { $in: categoryId } })


//     const newBlogPost = {
//         title: BlogPostData.title,
//         content: BlogPostData.content,
//         description: BlogPostData.content.slice(0, 150) + '...',  // Truncate to 150 characters and add ellipsis,
//         author: author, // Populated author
//         categories: categories, // Populated categories
//         tags: BlogPostData.tags,
//         status: BlogPostData.status,
//         featuredImage: BlogPostData.featuredImage,
//     }

//     // Update the blog post by its ID using `findByIdAndUpdate`
//     const updatedPost = await BlogPost.findByIdAndUpdate(id, newBlogPost, { new: true });

//     // If the post doesn't exist
//     if (!updatedPost) {
//         return NextResponse.json({ message: 'Blog post not found' }, { status: 404 });
//     }

//     return NextResponse.json({ message: 'Blog post Updated successfully', blogPost: newBlogPost });

// }