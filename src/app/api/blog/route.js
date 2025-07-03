import { db } from "@/database/dbconnect/db";
import BlogPost from "@/database/models/blogpost.model";
import Category from "@/database/models/category.model";
import User from "@/database/models/user.model";
import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises';


export const GET = async () => {
    await db();
    const BlogData = await BlogPost.find()
    .populate('categories', 'categoryname')
    .populate('author','username userImage role');
    return NextResponse.json({ result: BlogData }, { status: 200 })
}

const generateSlug = (title) => {
    return title
        .toLowerCase()                       // Convert to lowercase
        .trim()                               // Remove leading/trailing spaces
        .replace(/[^a-z0-9\s-]/g, '')         // Remove non-alphanumeric characters
        .replace(/\s+/g, '-')                 // Replace spaces with hyphens
        .replace(/-+/g, '-');                 // Remove extra hyphens
};


export const POST = async (request) => {
    const formData = await request.formData();
    const timestamp = Date.now();

    // Process featured image
    const Image = formData.get('featuredImage');
    const cnvrtdByteData = await Image.arrayBuffer();
    const buffer = Buffer.from(cnvrtdByteData);
    const path = `./public/${timestamp}_${Image.name}`;
    await writeFile(path, buffer);
    const ImgUrl = `/${timestamp}_${Image.name}`;

    // Prepare the BlogPost object
    const BlogPostData = {
        title: `${formData.get('title')}`,
        content: `${formData.get('content')}`,
        author: `${formData.get('author')}`,     // Assuming this is the author's ID
        authorImage: `${formData.get('authorImage')}`,
        categories: `${formData.get('categories')}`,     // Assuming these are category IDs
        tags: `${formData.get('tags')}`,
        status: `${formData.get('status')}`,
        featuredImage: `${ImgUrl}`,
    };
    console.log({ findData: BlogPostData })

    await db();
    // Assuming author and categories are IDs, you need to populate them later in the save process
    const authorId = formData.get('author');  // Assuming the author's ID is passed as a string
    const categoryIds = JSON.parse(formData.get('categories'));  // Assuming categories are passed as a comma-separated string

    // Find and populate the author and categories
    const author = await User.findById(authorId);
    const categories = await Category.find({ categoryname: { $in: categoryIds } });


    const slug= generateSlug(BlogPostData.title)
    // Now create the BlogPost
    const newBlogPost = new BlogPost({
        title: BlogPostData.title,
        slug: slug,
        content: BlogPostData.content,
        description: BlogPostData.content.slice(0, 150) + '...',  // Truncate to 150 characters and add ellipsis,
        author: author, // Populated author
        authorImage: author.userImage,
        categories: categories, // Populated categories
        tags: BlogPostData.tags,
        status: BlogPostData.status,
        featuredImage: BlogPostData.featuredImage,
    });
    console.log(newBlogPost)

    // Save the new blog post
    await newBlogPost.save();

    return NextResponse.json({ message: 'Blog post created successfully', blogPost: newBlogPost });
};
