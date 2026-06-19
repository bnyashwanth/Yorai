"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Set a strong secret in your .env.local: JWT_SECRET=your_super_secret_key
const JWT_SECRET = process.env.JWT_SECRET || "fallback_secret_for_dev_only";

export async function signupAction(state: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    // 1. Connect directly to MongoDB
    await connectToDatabase();

    // 2. Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { error: "Email is already in use." };
    }

    // 3. Hash password and save
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // 4. Create JWT Token
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 5. Lock Token in Cookie
    const cookieStore = await cookies();
    cookieStore.set("yorai_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

  } catch (error) {
    // Notice this error message is different! 
    // If you see THIS error, it means Mongoose failed to connect.
    console.error("Signup DB Error:", error);
    return { error: "Database error: Could not create your account." };
  }

  // 6. Redirect to Dashboard
  redirect("/dashboard");
}

export async function loginAction(state: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    await connectToDatabase();
    const user = await User.findOne({ email });
    if (!user) return { error: "Invalid email or password." };

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return { error: "Invalid email or password." };

    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: "7d" });

    const cookieStore = await cookies();
    cookieStore.set("yorai_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

  } catch (error) {
    console.error("Login DB Error:", error);
    return { error: "Database error: Could not log you in." };
  }

  redirect("/dashboard");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("yorai_session");
  redirect("/login");
}