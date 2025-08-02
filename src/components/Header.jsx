"use client";

import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { UserIcon } from "lucide-react";

export default function Header() {
  const { status, data } = useSession();
  const [infoVisible, setInfoVisible] = useState(false);
  const infoRef = useRef(null);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    setInfoVisible(false);
    window.location.href = "/";
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (infoRef.current && !infoRef.current.contains(event.target)) {
        setInfoVisible(false);
      }
    }

    if (infoVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [infoVisible]);

  return (
<header className="bg-white border-b-2 border-green-500 top-0 z-50 rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-6 py-0.5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-1 group">
          <div className="transition duration-300">
            <Image
              src="/careercabin.png"
              alt="PK CareerCabin Logo"
              width={60}
              height={60}
              className="rounded-full object-contain"
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-green-600 via-green-400 to-green-900 bg-clip-text text-transparent transition duration-300 group-hover:scale-105">
            PK CareerCabin
          </span>
        </Link>

        {/* Right Section - Sign in or Avatar */}
        <div className="relative flex items-center gap-4">
          {status === "authenticated" ? (
            <>
              <Image
                className="rounded-full w-10 h-10 cursor-pointer ring-2 ring-green-400 hover:ring-green-500 transition"
                src={data?.user?.image || "/default-avatar.png"}
                alt="User avatar"
                width={40}
                height={40}
                onClick={() => setInfoVisible((prev) => !prev)}
              />

              {infoVisible && (
                <div
                  ref={infoRef}
                  className="absolute top-14 right-0 w-64 bg-white dark:bg-neutral-800 p-5 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-neutral-700"
                >
                  <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                    Welcome, {data?.user?.name?.split(" ")[0]}
                  </h2>
                  <ul className="space-y-3">
                    <li className="text-sm text-gray-500 dark:text-gray-400">
                      {data?.user?.email}
                    </li>

                    <li>
                      <Link
                        href="/dashboard"
                        className="flex w-full items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 transition-all duration-300"
                      >
                        <UserIcon className="w-4 h-4" />
                        Dashboard
                      </Link>
                    </li>

                    <li>
                      <button
                        onClick={handleSignOut}
                        className="flex w-full items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-700 transition-all duration-300"
                      >
                        <UserIcon className="w-4 h-4" />
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-green-600 transition"
            >
              <UserIcon className="w-4 h-4" />
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
