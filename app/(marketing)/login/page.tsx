"use client";

import { useActionState } from "react";
import { loginAction } from "@/app/actions/auth";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white px-4">
      <div className="w-full max-w-md p-8 text-center">
        {/* <img 
          src="/media/images/logo.svg" 
          alt="Zerodha Logo" 
          className="w-10 mx-auto mb-6" 
        /> */}
        
        <h2 className="text-2xl font-medium text-[#424242] mb-2">
          Login to Zerodha 
        </h2>
        <p className="text-sm text-gray-900 mb-8">
          Enter your credentials to access the dashboard
        </p>

        <form action={formAction} className="space-y-5 text-left">
          <div>
            <label className="block text-sm text-[#424242] mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-[#eee] rounded focus:outline-none text-gray-950 placeholder:text-gray-500 focus:border-[#387ed1] transition-colors"
              placeholder="user@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-[#424242] mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 border border-[#eee] rounded focus:outline-none text-gray-950 placeholder:text-gray-500 focus:border-[#387ed1] transition-colors"
              placeholder="••••••••"
            />
          </div>

          {/* Show error message if the server action fails */}
          {state?.error && (
            <div className="text-red-500 text-sm bg-red-50 p-3 rounded">
              {state.error}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-[#387ED1] text-white font-medium py-2.5 rounded hover:bg-[#387ED1] transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isPending ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#eee] text-sm text-[#9b9b9b]">
          Don't have an account? <a href="/signup" className="text-[#387ed1] hover:underline">Sign up</a>
        </div>
      </div>
    </div>
  );
}