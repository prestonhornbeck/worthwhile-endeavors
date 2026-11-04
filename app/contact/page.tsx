import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Worthwhile Endeavors",
  description:
    "Get in touch with Worthwhile Endeavors. Reach out by phone, email, or the contact form — we'd love to connect.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#2d3966] pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-blue-200 font-semibold mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Let&apos;s Talk
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Whether you&apos;re a client, a TWC case manager, or a business interested in hiring — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-bold text-[#2d3966] mb-8">Contact Information</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#4a5b9a" }}
                >
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Phone</p>
                  <a
                    href="tel:7174068286"
                    className="text-[#2d3966] font-semibold hover:text-[#4a5b9a] transition-colors"
                  >
                    717-406-8286
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#4a5b9a" }}
                >
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:Paul.Frey@iamworthwhile.org"
                    className="text-[#2d3966] font-semibold hover:text-[#4a5b9a] transition-colors"
                  >
                    Paul.Frey@iamworthwhile.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#4a5b9a" }}
                >
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Location</p>
                  <p className="text-[#2d3966] font-semibold">McKinney, TX</p>
                  <p className="text-sm text-gray-500 mt-1">Serving McKinney, North Dallas, and the greater DFW area</p>
                </div>
              </li>
            </ul>

            <div className="mt-12 p-6 bg-[#f4f6fb] rounded-2xl border border-gray-100">
              <p className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-3">
                Referred by TWC?
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our services are provided through the Texas Workforce Commission&apos;s Vocational Rehabilitation program. If your counselor has referred you to Worthwhile Endeavors, give us a call or send us a message and we&apos;ll get the process started.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#2d3966] mb-8">Send a Message</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#2d3966] placeholder-gray-400 focus:outline-none focus:border-[#4a5b9a] transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#2d3966] placeholder-gray-400 focus:outline-none focus:border-[#4a5b9a] transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#2d3966] placeholder-gray-400 focus:outline-none focus:border-[#4a5b9a] transition-colors"
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#2d3966] placeholder-gray-400 focus:outline-none focus:border-[#4a5b9a] transition-colors"
                  placeholder="555-555-5555"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                  I am a...
                </label>
                <select
                  name="role"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#2d3966] focus:outline-none focus:border-[#4a5b9a] transition-colors appearance-none bg-white"
                >
                  <option value="">Select one</option>
                  <option value="client">Client / Individual seeking services</option>
                  <option value="family">Family member or caregiver</option>
                  <option value="twc">TWC Case Manager / Counselor</option>
                  <option value="employer">Employer</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#2d3966] placeholder-gray-400 focus:outline-none focus:border-[#4a5b9a] transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-colors"
                style={{ backgroundColor: "#4a5b9a" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
