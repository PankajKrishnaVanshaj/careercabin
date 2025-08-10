import connectToDatabase from "@/DataBase/connectdb";
import ResumeModel from "@/DataBase/models/resume";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

async function connectDB() {
  try {
    await connectToDatabase();
  } catch {
    throw new Error("Failed to connect to the database");
  }
}

// GET Resume
export async function GET(req, context) {
  try {
    const { id } = await context.params;
    await connectDB();

    const resume = await ResumeModel.findById(id);

    if (!resume) {
      return NextResponse.json(
        { success: false, error: "Resume not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: resume }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || "Server Error" },
      { status: 500 }
    );
  }
}

// UPDATE Resume
export async function PUT(req, context) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    const session = await getServerSession({ req });
    if (!session?.user?.email) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const resume = await ResumeModel.findById(id);
    if (!resume) {
      return NextResponse.json(
        { success: false, error: "Resume not found" },
        { status: 404 }
      );
    }

    if (resume.createdBy !== session.user.email) {
      return NextResponse.json(
        { success: false, error: "You are not allowed to edit this resume" },
        { status: 403 }
      );
    }

    const updatedResume = await ResumeModel.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    );

    return NextResponse.json(
      { success: true, data: updatedResume },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || "Server Error" },
      { status: 500 }
    );
  }
}

// DELETE Resume
export async function DELETE(req, context) {
  try {
    const { id } = await context.params;

    const session = await getServerSession({ req });
    if (!session?.user?.email) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const resume = await ResumeModel.findById(id);
    if (!resume) {
      return NextResponse.json(
        { success: false, error: "Resume not found" },
        { status: 404 }
      );
    }

    if (resume.createdBy !== session.user.email) {
      return NextResponse.json(
        { success: false, error: "You are not allowed to delete this resume" },
        { status: 403 }
      );
    }

    await ResumeModel.findByIdAndDelete(id);

    return NextResponse.json(
      { success: true, message: "Resume deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message || "Server Error" },
      { status: 500 }
    );
  }
}
