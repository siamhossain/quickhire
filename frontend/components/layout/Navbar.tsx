"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";



export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 78) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-main h-[78px] flex items-center justify-between">
        <div className="flex items-center">
            <Link href="/" className="font-bold text-xl pr-10">
                <Image src="/logo.svg" 
                  alt="QuickHire Logo" 
                  width={152} 
                  height={36} 
                  className="inline mr-2" 
                />
            </Link>

            <div className="space-x-4">
                <Link href="/jobs" className="nav-link">Find Jobs</Link>
                <Link href="/admin" className="nav-link">Admin Panel</Link>
            </div>
        </div>

        <div className="flex items-center">
          <Link href="/login" className="font-epilogue font-bold text-[16px] leading[160%] text-primary px-4 py-2 rounded-none w-[92px] h-[50px] flex items-center justify-center">
            Login
          </Link>
          <Link href="/signup" className="font-epilogue font-bold text-[16px] leading[160%] ml-4  bg-primary text-white px-4 py-2 rounded-none w-[108px] h-[50px] flex items-center justify-center">
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
}