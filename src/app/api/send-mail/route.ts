import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { emailAddress } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: "ishuchoudhary8560@gmail.com",
        pass: process.env.EMAIL_PASS, // Use App Password, NOT real password
      },
    });

    await transporter.sendMail({
      from: "ishuchoudhary8560@gmail.com",
      to: emailAddress,
      subject: "Will created!",
      text: "Hi there,\n\nYou have successfully created a will. Thank you for using our platform.\n\nBest regards.",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending mail:", error);
    return NextResponse.json({ success: false, error });
  }
}
