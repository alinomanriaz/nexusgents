import { db } from "@/database/dbconnect/db"
import Category from "@/database/models/category.model";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const reqbody = await request.json();
    const { categoryname } = reqbody
    console.log(categoryname)
    await db()
    await Category.create({ categoryname });
    return NextResponse.json({ message: 'category added successfully' }, { status: 200 })
}

export const GET = async (request) => {
    try {
        await db()
        const categorydata = await Category.find();
        return NextResponse.json({ result: categorydata }, { message: "got a category successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "api work but data not get" }, { status: 404 })
    }
}