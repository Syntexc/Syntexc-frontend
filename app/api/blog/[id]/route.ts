import { NextRequest, NextResponse } from 'next/server';
import Blog from '@/app/models/blogModels';

export async function DELETE(
  request: NextRequest,
  context: any  // <-- use any to avoid type error temporarily
) {
  const { id } = context.params;

  if (!id) {
    return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
  }

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog deleted successfully", success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 

export async function PATCH(request: NextRequest, context: any) {
  const { id: slug } = context.params;

  if (!slug) {
    return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
  }

  try {
    const body = await request.json();
    const { title, content, mtitle, mdescription, customCategory } = body;

    const updatedBlog = await Blog.findOneAndUpdate(
      { slug },
      {
        title,
        content,
        mtitle,
        mdescription,
        customCategory,
      },
      { new: true }
    );

    if (!updatedBlog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error: any) {
    console.error('PATCH error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}