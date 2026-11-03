import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Briefcase, Award, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Worthwhile Endeavors | Workforce Services for People with Disabilities",
  description:
    "Worthwhile Endeavors helps individuals with disabilities prepare for and enter competitive, integrated employment. Serving Texas through Texas Workforce Commission-referred vocational services.",
};

const services = [
  { title: "Supported Employment", href: "/services/supported-employment", desc: "Individualized job matching and ongoing support for clients with significant disabilities." },
  { title: "Job Placement", href: "/services/job-placement", desc: "End-to-end job search support to help clients land a position that fits their goals." },
  { title: "Job Skills Training", href: "/services/job-skills-training", desc: "Goal-focused training that builds independence and meets employer expectations." },
  { title: "Work Experience", href: "/services/work-experience", desc: "Short-term community placements that build real skills for long-term employment." },
  { title: "Pre-ETS", href: "/services/pre-employment-transition-services", desc: "In-classroom work readiness for students ages 14–22 preparing for life after graduation." },
  { title: "Summer Earn & Learn", href: "/services/summer-earn-and-learn", desc: "Paid summer work experience and employability training for students with disabilities." },
];

const stats = [
  { icon: Users, label: "Clients Served", value: "Hundreds" },
  { icon: Briefcase, label: "Services Offered", value: "8" },
  { icon: Award, label: "TWC Partner", value: "Certified" },
  { icon: HeartHandshake, label: "Approach", value: "Side by Side" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end mt-16">
        <Image
          src="/images/hero-client-at-work.jpeg"
          alt="Client with Down syndrome smiling at work in a grocery store"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/90 via-[#1a1a2e]/50 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 w-full">
          <p className="text-xs uppercase tracking-widest text-[#f5c842] mb-4 font-semibold">
            Workforce Services · Texas
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-2xl mb-6">
            Your Path to Meaningful Work Starts Here
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mb-8">
            Worthwhile Endeavors partners with individuals with disabilities to prepare for, find, and keep competitive, integrated employment — side by side, every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-colors"
              style={{ backgroundColor: "#4a5b9a" }}
            >
              Explore Services <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm border border-white/30 hover:border-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#4a5b9a] py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center text-center text-white">
              <Icon size={24} className="mb-2 opacity-80" />
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-xs uppercase tracking-widest opacity-70 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-4">Our Mission</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-tight mb-6">
              Achieving More, Side by Side.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              You — or someone you love — deserves a real shot at meaningful work. Not a workaround. Not a sheltered option. A real job, with real pay, alongside everyone else.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              That&apos;s what we&apos;re here for. We walk alongside clients, families, and employers to remove the barriers standing between a person and the career they&apos;re capable of building.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#4a5b9a] hover:underline"
            >
              See how we help <ArrowRight size={15} />
            </Link>
          </div>
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/side-by-side.jpeg"
              alt="Two colleagues working together side by side"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-4 text-center">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] text-center mb-4">
            Services Built Around You
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-14">
            From first assessment to long-term employment, we offer a full range of vocational services referred through the Texas Workforce Commission.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#4a5b9a]/30 hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-[#1a1a2e] mb-2 group-hover:text-[#4a5b9a] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <span className="text-xs font-semibold text-[#4a5b9a] inline-flex items-center gap-1">
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-colors"
              style={{ backgroundColor: "#4a5b9a" }}
            >
              View All 8 Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden order-2 md:order-1">
            <Image
              src="/images/employer-handshake.jpeg"
              alt="Employer shaking hands with a new hire"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-4">For Employers</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-tight mb-6">
              Hire Motivated, Job-Ready Talent
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our clients come to you prepared. Through job skills training, work experience, and individualized coaching, we ensure each candidate is ready to contribute from day one.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We stay involved after placement — providing ongoing support to both the employee and your team to ensure a lasting, productive match.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-colors"
              style={{ backgroundColor: "#4a5b9a" }}
            >
              Partner With Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#1a1a2e]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#f5c842] font-semibold mb-4 text-center">
            What People Are Saying
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-14">
            Stories from the People We Serve
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "Working with Worthwhile Endeavors changed everything for me. They didn't just find me a job — they helped me believe I could actually keep it.",
                name: "Client, North Dallas",
                role: "Supported Employment",
              },
              {
                quote: "Paul and his team made the hiring process seamless. They prepared our new employee well, and the ongoing support meant we never felt like we were on our own.",
                name: "Local Business Owner",
                role: "Employer Partner",
              },
              {
                quote: "I've referred many clients to Worthwhile Endeavors and have been consistently impressed. They treat every person with real dignity and get results.",
                name: "TWC Vocational Rehabilitation Counselor",
                role: "Referral Partner",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col">
                <p className="text-gray-300 leading-relaxed text-sm flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-[#f5c842] mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-xs mt-8">
            * Testimonials are representative of client and partner experiences.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-white text-center"
        style={{ backgroundColor: "#1a1a2e" }}
      >
        <p className="text-xs uppercase tracking-widest text-[#f5c842] font-semibold mb-4">Ready to Begin?</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
          Let&apos;s Find the Right Path Together
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Whether you&apos;re a client, a TWC case manager, or an employer, we&apos;d love to talk about how Worthwhile Endeavors can help.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[#1a1a2e] text-sm transition-colors"
          style={{ backgroundColor: "#f5c842" }}
        >
          Contact Us <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
