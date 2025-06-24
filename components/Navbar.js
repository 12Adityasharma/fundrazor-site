"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowDropdown(false);
        setActiveButton("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={navRef}>
      <nav
        className="flex justify-between bg-white/5 backdrop-blur-md border-b border-white/10  text-white p-4 items-center"
      >
        <Link href="/">
          <div className="text-2xl font-bold cursor-pointer">Fund-Razor!</div>
        </Link>

        <div className="flex items-center gap-4">
          {/* Search Button */}
          <Link href="/search">
            <button
              className={`cursor-pointer px-6 py-3 border rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b from-gray-900 to-black hover:from-indigo-500 ${
                activeButton === "search"
                  ? "ring-2 ring-indigo-400 border-indigo-400"
                  : "border-gray-800 text-gray-200"
              }`}
              onClick={() => setActiveButton("search")}
            >
              Search
            </button>
          </Link>

          {/* Dropdown for logged-in user */}
          {session && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center"
                type="button"
              >
                Welcome {session.user.name}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <Link
                        href="/dashboard"
                        className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          activeButton === "dashboard" &&
                          "font-bold text-indigo-300"
                        }`}
                        onClick={() => {
                          setActiveButton("dashboard");
                          setShowDropdown(false);
                        }}
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button
                        className={`w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          activeButton === "Your page" &&
                          "font-bold text-indigo-300"
                        }`}
                        onClick={() => {
                          setActiveButton("Your page");
                          setShowDropdown(false);
                          router.push(`/${session.user.name}`);
                        }}
                      >
                        Your page
                      </button>
                    </li>
                    <li>
                      <button
                        className={`w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${
                          activeButton === "signout" && "font-bold text-red-400"
                        }`}
                        onClick={() => {
                          setActiveButton("signout");
                          setShowDropdown(false);
                          signOut();
                        }}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Login Button */}
          {!session && (
            <Link href="/login">
              <button
                className={`cursor-pointer px-6 py-3 border rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b from-gray-900 to-black hover:from-indigo-500 ${
                  activeButton === "login"
                    ? "ring-2 ring-indigo-400 border-indigo-400"
                    : "border-gray-800 text-gray-200"
                }`}
                onClick={() => setActiveButton("login")}
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
