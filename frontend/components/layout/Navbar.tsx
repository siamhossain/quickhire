import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-6xl mx-auto p-4 flex justify-between">
        <Link href="/" className="font-bold text-xl">
          QuickHire
        </Link>

        <div className="space-x-6">
          <Link href="/jobs">Jobs</Link>
          <Link href="/admin">Post Job</Link>
        </div>
      </div>
    </nav>
  );
}