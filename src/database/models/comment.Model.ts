
import mongoose, {Document, Schema, Model} from "mongoose";

interface CommentT extends Document {
    post: mongoose.Types.ObjectId,
    user: mongoose.Types.ObjectId,
    content: string,
    parentComment: mongoose.Types.ObjectId,
}

const commentSchema: Schema<CommentT> = new mongoose.Schema<CommentT>({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BlogPost', // Referencing the BlogPost model
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referencing the User model
    required: true,
  },
  content: {
    type: String,
    required: [true, 'Please provide a comment'],
  },
  parentComment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment', // Referencing the same Comment model for threaded comments
    default: null,
  },
}, {
  timestamps: true, // Corrected typo here
});

const Comment: Model<CommentT> = mongoose.models.Comment || mongoose.model<CommentT>('Comment', commentSchema);

export default Comment;
