import { db } from "@/database/db";
import User from "@/database/models/user.model";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await db();
    const userList = await User.find();

    return NextResponse.json(
      {
        message: "Fetched all user data successfully",
        result: userList,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Failed to fetch users" },
      { status: 500 }
    );
  }
};
