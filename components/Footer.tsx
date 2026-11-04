import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2d3966] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-9 h-9 rounded flex items-center justify-center text-white font-bold text-sm leading-none"
              style={{ backgroundColor: "#4a5b9a" }}
            >
              we
            </div>
            <span className="font-semibold text-sm tracking-wide">
              Worthwhile Endeavors
            </span>
          </div>
          <p className="text-sm text-gray-400 italic">
            Achieving More, Side by Side.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Navigate
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            <li><Link href="/employers" className="hover:text-white transition-colors">For Employers</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Services
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/services/supported-employment" className="hover:text-white transition-colors">Supported Employment</Link></li>
            <li><Link href="/services/job-placement" className="hover:text-white transition-colors">Job Placement</Link></li>
            <li><Link href="/services/job-skills-training" className="hover:text-white transition-colors">Job Skills Training</Link></li>
            <li><Link href="/services/work-experience" className="hover:text-white transition-colors">Work Experience</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">View All Services</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Contact
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Paul Frey, Director</li>
            <li className="text-gray-500 text-xs">McKinney, TX · Serving DFW</li>
            <li>
              <a href="tel:7174068286" className="hover:text-white transition-colors">
                717-406-8286
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Send a Message
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 mt-10 pt-6 text-xs text-gray-600 text-center">
        &copy; {new Date().getFullYear()} Worthwhile Endeavors. All rights reserved.
      </div>
    </footer>
  );
}
