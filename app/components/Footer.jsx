import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">MyBlog</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Discover stories, ideas, and insights from creators around the
            world. Stay curious, stay inspired.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-white transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Newsletter / Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Connected
          </h3>
          <p className="text-sm text-gray-400 mb-3">
            Join our newsletter for weekly updates and articles.
          </p>
          <form className="flex bg-white rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-lg text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
            >
              Subscribe
            </button>
          </form>

          {/* Social icons */}
          <div className="flex space-x-4 mt-5">
            <Link
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-xl"></i>
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
