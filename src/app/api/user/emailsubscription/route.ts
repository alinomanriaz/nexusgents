// import { db } from "@/database/db";
// import SubscriptionModel from "@/database/models/subscription.Model";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     await db();

//     const { email }: { email: string } = await req.json();

//     if (!email) {
//       return NextResponse.json({ error: "Email is required" }, { status: 400 });
//     }

//     // Check if email is already subscribed
//     const existing = await SubscriptionModel.findOne({ email });

//     if (existing) {
//       return NextResponse.json({ result: "User already subscribed" }, { status: 400 });
//     }

//     // Save new subscription
//     const data = new SubscriptionModel({ email });
//     await data.save();

//     return NextResponse.json({ result: "Email saved successfully" }, { status: 200 });
//   } catch (error) {
//     console.error("Error saving subscription:", error);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }
