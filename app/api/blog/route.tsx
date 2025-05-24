import { connect } from "@/app/dbConfig";
import Blog from "@/app/models/blogModels";
import { NextRequest, NextResponse } from "next/server";

connect();

// GET all blogs
export async function GET(request: NextRequest) {
  try {
    const blogs = await Blog.find();
    return NextResponse.json(blogs, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT to update blog by ID
export async function PUT(request: NextRequest) {
  try {
    const { field, url, courseId } = await request.json();

    const update = { [field]: url };
    const course = await Blog.findByIdAndUpdate(courseId, update, {
      new: true,
    });

    return NextResponse.json({
      message: "Blog updated successfully",
      success: true,
      course,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
 
export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: "Blog ID is required" },
        { status: 400 }
      );
    }

    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json(
        { error: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Blog deleted successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
