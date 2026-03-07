import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto p-4 flex justify-between">
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
                <Link href="/jobs">Find Jobs</Link>
                <Link href="/admin">Admin Panel</Link>
            </div>
        </div>
        
        <h1 className="heading-2 bg-primary text-secondary font-heading">Test</h1>

        <div className="flex items-center">
          <Link href="/login" className="text-sm font-medium">
            Login
          </Link>
          <Link href="/signup" className="ml-4 text-sm font-medium bg-primary text-white px-4 py-2 rounded width-108 height-50">
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
}