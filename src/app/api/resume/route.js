import connectToDatabase from "@/DataBase/connectdb";
import ResumeModel from "@/DataBase/models/resume";
import UserModel from "@/DataBase/models/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

async function connectDB() {
  try {
    await connectToDatabase();
  } catch {
    throw new Error("Failed to connect to the database");
  }
}

export async function POST(req) {
  try {
    const { title } = await req.json();

    const session = await getServerSession({ req });
    if (!session?.user?.email) {
      return NextResponse.json(
        { success: false, error: "Unauthorized: No session or email found" },
        { status: 401 }
      );
    }

    await connectDB();

    const user = await UserModel.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const newResume = await ResumeModel.create({
      title,
      createdBy: user.email,
    });

    return NextResponse.json(
      { success: true, resume: newResume },
      { status: 201 }
    );

  } catch (error) {
    console.error("Error creating resume:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
