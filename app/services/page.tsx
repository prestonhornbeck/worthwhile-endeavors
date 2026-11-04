import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Worthwhile Endeavors",
  description:
    "Worthwhile Endeavors offers vocational services for TWC-referred individuals — from assessment and training to job placement and supported employment.",
};

const services = [
  {
    title: "Supported Employment",
    href: "/services/supported-employment",
    desc: "Supported Employment enables clients to enter competitive, integrated employment through individualized job matching, ongoing coaching, and extended services that last well beyond the first day on the job. We work closely with both the client and the employer to ensure a lasting, productive match.",
    highlights: [
      "Individualized job matching based on skills and goals",
      "Ongoing support during and after placement",
      "Extended services for long-term stability",
      "Coordination with employers and support networks",
    ],
  },
  {
    title: "Job Placement",
    href: "/services/job-placement",
    desc: "Job Placement walks clients through the entire job search process — from clarifying career goals to accepting an offer. We help build the tools needed to present confidently to employers, and work directly with businesses in the community to identify opportunities that are a genuine fit.",
    highlights: [
      "Resume development and interview preparation",
      "Job search strategy and employer outreach",
      "Application and follow-up support",
      "Goal-aligned job matching",
    ],
  },
  {
    title: "Job Skills Training",
    href: "/services/job-skills-training",
    desc: "Job Skills Training provides focused, individualized coaching for clients who need more structured support than a typical employer orientation can offer. Training happens at or near the worksite and is designed to reinforce skills, build independence, and develop accommodations that set the client up for success.",
    highlights: [
      "One-on-one training at or near the worksite",
      "Skill reinforcement and habit building",
      "Workplace accommodation development",
      "Collaboration with employer and support team",
    ],
  },
  {
    title: "Environmental Work Assessment",
    href: "/services/environmental-work-assessment",
    desc: "Environmental Work Assessment places a client in three or more different work environments to observe how they respond, adapt, and perform. The findings directly inform the next phase of a client's vocational plan — helping identify the right job match, training needs, and accommodations.",
    highlights: [
      "Assessment across 3+ real work environments",
      "Observation of skills, behavior, and adaptability",
      "Identification of barriers and accommodations",
      "Detailed findings to inform next steps",
    ],
  },
  {
    title: "Work Experience",
    href: "/services/work-experience",
    desc: "Work Experience places clients in real community businesses — on a short-term volunteer or paid basis — to build the practical skills and professional habits needed for long-term employment. Our team stays actively involved throughout, providing support and coaching at each step.",
    highlights: [
      "Placement at real local businesses",
      "Volunteer or temporary paid work settings",
      "Skill building in an authentic work environment",
      "Structured support from our team throughout",
    ],
  },
  {
    title: "Summer Earn & Learn (SEAL)",
    href: "/services/summer-earn-and-learn",
    desc: "The Summer Earn & Learn program connects students ages 14–22 to paid summer work placements alongside structured employability training. Participants leave with a paycheck, a résumé entry, and — most importantly — real confidence heading into the workforce.",
    highlights: [
      "For students ages 14–22",
      "Paid work experience placements",
      "Employability skills training",
      "Statewide TWC program",
    ],
  },
  {
    title: "Vocational Adjustment Training (VAT)",
    href: "/services/vocational-adjustment-training",
    desc: "Vocational Adjustment Training prepares high school students for competitive employment through practical classroom instruction. VAT covers workplace communication, professional conduct, employer expectations, and the soft skills that make the difference between getting a job and keeping one.",
    highlights: [
      "For high school students",
      "Classroom-based instruction and activities",
      "Covers work habits, communication, and professional conduct",
      "Prepares students for competitive integrated employment",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#2d3966] pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-200 font-semibold mb-4">
              What We Offer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Services Built Around Every Client
            </h1>
            <p className="text-gray-400 max-w-xl text-lg">
              All services are referred through the Texas Workforce Commission and tailored to each individual&apos;s abilities, goals, and employment path.
            </p>
          </div>
          <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src="/images/office-worker.jpeg"
              alt="Client working independently at a standing desk in an office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto divide-y divide-gray-100">
          {services.map((s) => (
            <div key={s.href} className="py-12 first:pt-0">
              <h2 className="text-2xl font-bold text-[#2d3966] mb-4">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-500">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#4a5b9a" }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#f4f6fb] text-center">
        <p className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-4">Get Started</p>
        <h2 className="text-3xl font-bold text-[#2d3966] mb-4">Not sure which service fits?</h2>
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
