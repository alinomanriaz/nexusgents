// // import { db } from "@/database/dbconnect/db";
// import { db } from "@/database/db";
// import UserModel from "@/database/models/user.model";
// import bcrypt from "bcryptjs";
// import { NextRequest, NextResponse } from "next/server";

// export const POST = async (request: NextRequest) => {
//   try {
//     await db();
//     const { username, email, password }: { username: string; email: string; password: string } = await request.json();

//     if (!username || !email || !password) {
//       return NextResponse.json({ message: "Missing fields" }, { status: 400 });
//     }

//     // Check if user already exists
//     const existingUser = await UserModel.findOne({ email });
//     if (existingUser) {
//       console.log("User already exists:", email);
//       return NextResponse.json({ message: "User already exists" }, { status: 409 }); // 409 Conflict
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create and save user
//     const newUser = new UserModel({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     const savedUser = await newUser.save();
//     console.log("User registered:", savedUser.email);

//     // TODO: Send welcome email here

//     return NextResponse.json(
//       { message: "Sign up successful", user: { email: savedUser.email, username: savedUser.username } },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Signup error:", error);
//     return NextResponse.json({ message: "Signup failed", error: String(error) }, { status: 500 });
//   }
// };
