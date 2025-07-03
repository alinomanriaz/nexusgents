import mongoose, { Document, Model, Schema } from "mongoose";

// 1. Define the TypeScript interface
export interface ISubscription extends Document {
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Define the schema
const SubscriptionSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Please provide a valid email address"],
    },
  },
  { timestamps: true }
);

// 3. Export model with dev-safe check
const SubscriptionModel: Model<ISubscription> =
  mongoose.models.Subscription || mongoose.model<ISubscription>("Subscription", SubscriptionSchema);

export default SubscriptionModel;
