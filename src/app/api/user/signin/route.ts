import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserModel from "@/database/models/user.model";
import { db } from "@/database/db";

export const POST = async (request: NextRequest) => {
  try {
    await db();

    const { email, password }: { email: string; password: string } = await request.json();

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      console.log("Unregistered user");
      return NextResponse.json({ message: "Unregistered user" }, { status: 400 });
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ message: "Invalid password" }, { status: 400 });
    }

    // Create JWT payload
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    // Set JWT in cookie via NextResponse
    const response = NextResponse.json(
      { message: "Login successful", user: tokenData },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60, // 1 day
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Login failed" }, { status: 500 });
  }
};
