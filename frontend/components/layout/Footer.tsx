import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#202430] text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Footer */}
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/footer-logo.svg"
                alt="QuickHire"
                width={152}
                height={36}
              />
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              Great platform for the job seeker that passionate about startups.
              Find your dream job easier.
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Companies</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Terms</Link>
              </li>
              <li>
                <Link href="#">Advice</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#">Help Docs</Link>
              </li>
              <li>
                <Link href="#">Guide</Link>
              </li>
              <li>
                <Link href="#">Updates</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Get job notifications
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              The latest job news, articles, sent to your inbox weekly.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="px-3 py-2 w-full text-sm bg-gray-200 text-black outline-none"
              />
              <button className="bg-indigo-500 px-4 py-2 text-sm text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} QuickHire. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-400">
            <Link href="#">FB</Link>
            <Link href="#">IG</Link>
            <Link href="#">Dr</Link>
            <Link href="#">IN</Link>
            <Link href="#">TW</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
