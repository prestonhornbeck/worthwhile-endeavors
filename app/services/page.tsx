import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Worthwhile Endeavors",
  description:
    "Worthwhile Endeavors offers 8 vocational services for individuals with disabilities — from assessment and training to job placement and supported employment.",
};

const services = [
  {
    title: "Supported Employment",
    href: "/services/supported-employment",
    desc: "Enables clients with significant disabilities to enter competitive integrated employment through individualized job matching, ongoing support, and extended services.",
    tag: "Adult Services",
  },
  {
    title: "Job Placement",
    href: "/services/job-placement",
    desc: "Assists clients in preparing for and completing the job search process to secure a position that aligns with their goals.",
    tag: "Adult Services",
  },
  {
    title: "Job Skills Training",
    href: "/services/job-skills-training",
    desc: "Goal-focused training that teaches and reinforces skills, develops workplace accommodations, and builds independence on the job.",
    tag: "Adult Services",
  },
  {
    title: "Environmental Work Assessment",
    href: "/services/environmental-work-assessment",
    desc: "Evaluates a client's skills across three or more work environments to identify variables affecting their ability to perform at full potential.",
    tag: "Assessment",
  },
  {
    title: "Work Experience",
    href: "/services/work-experience",
    desc: "Short-term community business placements — volunteer or paid — designed to build real skills for long-term competitive employment.",
    tag: "Adult Services",
  },
  {
    title: "Summer Earn & Learn (SEAL)",
    href: "/services/summer-earn-and-learn",
    desc: "A statewide program providing students with disabilities ages 14–22 with paid summer work experience and employability skills training.",
    tag: "Student Services",
  },
  {
    title: "Pre-Employment Transition Services (Pre-ETS)",
    href: "/services/pre-employment-transition-services",
    desc: "In-classroom work readiness program preparing students ages 14–22 for employment after graduation.",
    tag: "Student Services",
  },
  {
    title: "Vocational Adjustment Training (VAT)",
    href: "/services/vocational-adjustment-training",
    desc: "Practical classroom instruction and activities that prepare high school students with disabilities for competitive integrated employment.",
    tag: "Student Services",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a1a2e] pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#f5c842] font-semibold mb-4">
            What We Offer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl mb-6">
            Services Built Around Every Client
          </h1>
          <p className="text-gray-400 max-w-xl text-lg">
            From first assessment to long-term employment support, our services are referred through the Texas Workforce Commission and tailored to each individual&apos;s needs.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#4a5b9a]/30 hover:shadow-md transition-all group flex flex-col"
            >
              <span className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-3">
                {s.tag}
              </span>
              <h2 className="text-xl font-bold text-[#1a1a2e] mb-3 group-hover:text-[#4a5b9a] transition-colors">
                {s.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-6">{s.desc}</p>
              <span className="text-xs font-semibold text-[#4a5b9a] inline-flex items-center gap-1">
                Learn more <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <p className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-4">Get Started</p>
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">Not sure which service fits?</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Reach out and we&apos;ll help determine the right path — whether you&apos;re a client, a TWC case manager, or an employer.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm"
          style={{ backgroundColor: "#4a5b9a" }}
        >
          Contact Us <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
