import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, work_experience } =
      await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: "contact@synexc.com", // your Microsoft 365 email
        pass: "76%K#x8DG6vg", // see below
      },
    });

    // Internal email
    const info = await transporter.sendMail({
      from: "contact@synexc.com",
      to: "contact@synexc.com",
      subject: `Inquiry from Salesforce Consulting Company`,
      html: `<b> First Name: ${firstName} <br> 
                Last Name: ${lastName} <br> 
                Email: ${email} <br> 
                Phone: ${phone} <br> 
                ${work_experience ? `Message: ${work_experience}` : ""} 
            </b>`,
    });

    // User confirmation email
    const recipient = await transporter.sendMail({
      from: "contact@synexc.com",
      to: email,
      subject: "We’ve Received Your Request! 🚀",
      html: `<p>Hi,</p>
             <p>Thank you for reaching out to <b>Synexc</b>! We’ve received your details, and our sales team will be in touch with you shortly.</p>
             <p>If you need any assistance in the meantime, feel free to email us at <a href="mailto:contact@synexc.com">contact@synexc.com</a> or call us at <b>+91 9810512585</b>. We’re here to help!</p>
             <p>Looking forward to connecting with you.</p>
             <p>Best regards, <br> <b>Team Synexc</b></p>`,
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Confirmation sent: %s", recipient.messageId);

    return NextResponse.json({
      status: 200,
      message: "Email sent successfully",
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
