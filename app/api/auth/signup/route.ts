import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs'; 
import User from "@/app/models/user";
import { connect } from "@/app/dbConfig";

export async function POST(req: Request) {
  const { name, email, password, role } = await req.json();

  await connect();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ message: 'Email already exists' }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    role: role === 'super-admin' ? 'super-admin' : 'admin',
  });

  return NextResponse.json({ message: 'Signup successful', userId: newUser._id }, { status: 201 });
}
