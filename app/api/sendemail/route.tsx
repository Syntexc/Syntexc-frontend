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
        user: "contact@synexc.com",
        pass: "grip xobu fsva wtnh",
      },
    });

    // Send mail to contact@synexc.com
    const info = await transporter.sendMail({
      from: email,
      to: "contact@synexc.com",
      subject: `Inquiry from Salesforce Consulting Company`,
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
      from: "contact@synexc.com",
      to: email,
      subject: "We’ve Received Your Request! 🚀",
      text: `Hi,
    
    Thank you for reaching out to Synexc! We’ve received your details, and our sales team will be in touch with you shortly.
    
    If you need any assistance in the meantime, feel free to email us at contact@synexc.com or call us at +91 9810512585. We’re here to help!
    
    Looking forward to connecting with you.
    
    Best regards,
    Team Synexc`,
      html: `<p>Hi,</p>
             <p>Thank you for reaching out to <b>Synexc</b>! We’ve received your details, and our sales team will be in touch with you shortly.</p>
             <p>If you need any assistance in the meantime, feel free to email us at <a href="mailto:contact@synexc.com">contact@synexc.com</a> or call us at <b>+91 9810512585</b>. We’re here to help!</p>
             <p>Looking forward to connecting with you.</p>
             <p>Best regards, <br> <b>Team Synexc</b></p>`
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
