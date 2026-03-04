import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto p-4 flex justify-between">
        <div className="flex items-center">
            <Link href="/" className="font-bold text-xl pr-10">
                QuickHire
            </Link>

            <div className="space-x-6">
                <Link href="/jobs">Find Jobs</Link>
                <Link href="/admin">Browse Companies</Link>
            </div>
        </div>
        

        <div className="flex items-center">
          <Link href="/login" className="text-sm font-medium">
            Login
          </Link>
          <Link href="/signup" className="ml-4 text-sm font-medium">
            Sign Up
          </Link>
        </div>

      </div>
    </nav>
  );
}