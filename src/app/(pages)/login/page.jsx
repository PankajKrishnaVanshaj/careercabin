"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import Image from "next/image";

export default function LoginPage() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      window.location.href = "/";
    }
  }, [status]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-neutral-900 rounded-2xl shadow-xl p-8 animate-fade-in-up">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/careercabin.png"
            alt="App Logo"
            width={72}
            height={74}
            className="rounded-full"
            priority
          />
        </div>

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-green-700 dark:text-green-400">
            Welcome Back
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sign in to access your account
          </p>
        </div>

        {/* Authentication */}
        <div className="mt-8">
          {!session ? (
            <button
              onClick={() => signIn("google")}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 488 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248.3 504 110.8 504 0 393.2 0 255.7 0 118.2 110.8 7.4 248.3 7.4c66.6 0 122.5 24.2 165.3 63.8l-67 64.3C312.2 92 281.1 79.1 248.3 79.1c-94.2 0-170.8 77.3-170.8 171.7s76.6 171.7 170.8 171.7c83.4 0 137.4-47.9 145.3-114.7h-145v-91h241.1c2.2 13.1 3.3 25.9 3.3 44z" />
              </svg>
              Sign in with Google
            </button>
          ) : (
            <div className="space-y-4 text-center text-gray-700 dark:text-gray-200">
              <p>
                Signed in as{" "}
                <span className="font-semibold">{session.user.email}</span>
              </p>
              <p>
                Name:{" "}
                <span className="font-semibold">{session.user.name}</span>
              </p>
              <button
                onClick={() => signOut()}
                className="mt-4 w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 transition"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
}
