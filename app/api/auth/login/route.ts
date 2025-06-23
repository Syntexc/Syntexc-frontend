import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "@/app/models/user";
import { connect } from "@/app/dbConfig";

const JWT_SECRET = process.env.JWT_SECRET || 'secret123';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  await connect();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
  }

  const token = jwt.sign(
    { userId: user._id, role: user.role },
    JWT_SECRET,
    { expiresIn: '1d' }
  );

  return NextResponse.json({ message: 'Login successful', token, role: user.role });
}
