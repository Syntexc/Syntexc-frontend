 
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const { firstName, lastName , email,  phone, work_experience, } =
      await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "careers@rolconsultancy.com",
        pass: "ukch asot uygi ujfd",
      },
    });

    const info = await transporter.sendMail({
      from: email,
      to: "careers@rolconsultancy.com",
      subject: `Inquiry from RQL Consultancy`,

      text: "RQL Consultancy Contact Form",
      html: `<b> Firstname: ${firstName} <br> Lastname: ${lastName} <br> Email: ${email} <br> Phone: ${phone} <br> Message: ${work_experience} }  </b>`,
    });
    const recipient = await transporter.sendMail({
      from: email,
      to: email,
      subject: `RQL Consultancy`,
      text: "RQL Consultancy",
      html: `<b> We will contact you soon  </b> <br/> <b> contact no :+91 93040 53124  <br> ${work_experience ? `Message: ${work_experience}` : `University name: ${work_experience}`} </b>`,
    });
    console.log("Message sent: %s", recipient.messageId);

    console.log("Message sent: %s", info.messageId);

    return NextResponse.json({
      status: 200,
      message: "Email sent successfully",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
