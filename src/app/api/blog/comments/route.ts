// import { db } from "@/database/dbconnect/db"
// import BlogPost from "@/database/models/blogpost.model"
// import Comment from "@/database/models/comment.model"
// import User from "@/database/models/user.model"
// import { NextResponse } from "next/server"

// export const POST = async (request) => {
//     console.log(request)
//     const { content, user, post, parentComment } = await request.json()
//     console.log(content)
//     console.log(user)
//     console.log(post)
//     console.log(parentComment)

//     await db()
//     // const commentwriter= await  User.find(id)
//     const currentUser = await User.findById({ _id: user });
//     const Cpost = await BlogPost.findById({ _id: post });

//     const newComment = {
//         post: Cpost,
//         user: currentUser,
//         content: content,
//         parentComment:parentComment

//     }
//     const result = await Comment.create(newComment)
//     return NextResponse.json({ result: result }, { status: 200 })
// }
// export const GET = async (request) => {
//     const id = request.nextUrl.searchParams.get('id')
//     console.log(request)
//     await db()
//     try {
//         // Fetch the root comments (comments without a parent)
//         const comments = await Comment.find({ post: id, parentComment: null })
//             .populate('user', 'username') // Optionally populate the user info
//             .populate('post', 'title'); // Optionally populate the post info

//         // Fetch the replies for each root comment
//         const commentsWithReplies = await Promise.all(
//             comments.map(async (comment) => {
//                 const replies = await Comment.find({ parentComment: comment._id })
//                     .populate('user', 'username')
//                     .populate('post', 'title');

//                 return {
//                     ...comment.toObject(),
//                     replies, // Add replies to the comment
//                 };
//             })
//         );

//         return NextResponse.json({ message: 'Comments fetched', result: commentsWithReplies }, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ message: 'Error fetching comments', error: error.message }, { status: 500 });
//     }
// };
