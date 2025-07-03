import mongoose, { Document, Schema, Model } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: "admin" | "manager" | "visitor";
  userImage: string;
  isVerified: boolean;
  forgetPasswordToken?: string;
  forgetPasswordTokenExpiry?: Date;
  verifyToken?: string;
  verifyTokenExpiry?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    username: {
      type: String,
      required: [true, "please provide a username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "please provide a username"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "please provide a password"],
    },
    role: {
      type: String,
      enum: ["admin", "manager", "visitor"],
      default: "visitor",
    },
    userImage: {
      type: String,
      default: "/assets/images/userPlaceholder.jpg",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    forgetPasswordToken: String,
    forgetPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  },
  { timestamps: true }
);

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
