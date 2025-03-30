import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, work_experience } =
      await request.json();

    // Use environment variables for security
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "careers@rolconsultancy.com",
        pass: "ukch asot uygi ujfd",
      },
    });

    // Send mail to careers@rolconsultancy.com
    const info = await transporter.sendMail({
      from: email,
      to: "careers@rolconsultancy.com",
      subject: `Inquiry from RQL Consultancy`,
      text: "RQL Consultancy Contact Form",
      html: `<b> First Name: ${firstName} <br> 
                Last Name: ${lastName} <br> 
                Email: ${email} <br> 
                Phone: ${phone} <br> 
                ${work_experience ? `Message: ${work_experience}` : ""} 
            </b>`,
    });

    // Send confirmation email to user
    const recipient = await transporter.sendMail({
      from: "careers@rolconsultancy.com",
      to: email,
      subject: `RQL Consultancy`,
      text: "RQL Consultancy",
      html: `<b> We will contact you soon </b> <br/> 
             <b> Contact no: +91 93040 53124 </b> <br> 
             ${work_experience ? `Message: ${work_experience}` : ""}`,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Confirmation sent: %s", recipient.messageId);

    return NextResponse.json({
      status: 200,
      message: "Email sent successfully",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
