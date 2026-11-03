import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Briefcase, HeartHandshake, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "For Employers | Worthwhile Endeavors",
  description:
    "Partner with Worthwhile Endeavors to hire motivated, job-ready candidates with disabilities. We provide custom placement support and stay involved after hire to help both sides succeed.",
};

const benefits = [
  {
    icon: Users,
    title: "Pre-Screened, Job-Ready Candidates",
    desc: "Every client we place has been assessed, trained, and matched to your specific role. We don't send candidates — we send the right candidate.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support After Hire",
    desc: "We don't disappear after placement. Our team stays involved — supporting both the employee and your management team to ensure a lasting, productive match.",
  },
  {
    icon: Lightbulb,
    title: "Custom Plans for Every Placement",
    desc: "No two clients are alike, and no two placements are either. We design an individualized plan for each candidate based on your workplace and their goals.",
  },
  {
    icon: Briefcase,
    title: "Open to All Industries",
    desc: "We've placed clients across a wide variety of business types and work environments. If you have a role that needs filling, we want to talk.",
  },
];

const steps = [
  { num: "01", title: "Connect With Us", desc: "Reach out and tell us about your business, the role you're trying to fill, and what a successful employee looks like for you." },
  { num: "02", title: "We Find the Match", desc: "We identify a candidate from our client pool whose skills, goals, and personality align with your workplace and the specific position." },
  { num: "03", title: "Supported Placement", desc: "We handle the transition — preparing the candidate, coordinating with your team, and providing on-site support during onboarding." },
  { num: "04", title: "Lasting Partnership", desc: "We stay in contact after placement to make sure things are working on both sides — and to troubleshoot quickly if they're not." },
];

export default function EmployersPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#1a1a2e] pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#f5c842] font-semibold mb-4">
              For Employers
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Hire Motivated, Job-Ready Talent
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Worthwhile Endeavors partners with businesses across North Dallas and DFW to connect you with candidates who are prepared, supported, and genuinely motivated to work.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm"
              style={{ backgroundColor: "#4a5b9a" }}
            >
              Partner With Us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/employer-handshake.jpeg"
              alt="Employer shaking hands with a new hire"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-4 text-center">
            Why Partner With Us
          </p>
          <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-14">
            More Than a Referral. A Real Partnership.
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#4a5b9a" }}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-[#1a1a2e] text-lg mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-4 text-center">
            The Process
          </p>
          <h2 className="text-3xl font-bold text-[#1a1a2e] text-center mb-14">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col">
                <p className="text-4xl font-bold mb-4" style={{ color: "#4a5b9a", opacity: 0.25 }}>
                  {step.num}
                </p>
                <h3 className="font-bold text-[#1a1a2e] mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What employers get */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/job-interview.jpeg"
              alt="Job interview in progress"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-4">
              What You Can Expect
            </p>
            <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">
              We Handle the Hard Part
            </h2>
            <ul className="space-y-4">
              {[
                "A candidate matched to your specific role and workplace culture",
                "Pre-placement coordination — we prepare your new hire before day one",
                "On-site job coaching and support during onboarding",
                "Ongoing check-ins to keep things on track",
                "A direct line to our team whenever questions come up",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5" style={{ color: "#4a5b9a" }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: "#1a1a2e" }}>
        <p className="text-xs uppercase tracking-widest text-[#f5c842] font-semibold mb-4">
          Let&apos;s Work Together
        </p>
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Meet Your Next Great Hire?
        </h2>
        <p className="text-gray-400 max-w-md mx-auto mb-10">
          Tell us about your business and the role you&apos;re looking to fill. We&apos;ll take it from there.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[#1a1a2e] text-sm"
          style={{ backgroundColor: "#f5c842" }}
        >
          Contact Us <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
