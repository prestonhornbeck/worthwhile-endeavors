import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Users, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Worthwhile Endeavors",
  description:
    "Meet Paul Frey and learn the mission behind Worthwhile Endeavors — a workforce services organization built on the belief that every person deserves to be treated as worthwhile.",
};

const values = [
  {
    icon: Heart,
    title: "Every Person is Worthwhile",
    desc: "Our name isn't just a brand — it's a commitment. Every client, every employer, every employee we work with deserves to be treated with dignity and respect.",
  },
  {
    icon: Users,
    title: "We Do It Together",
    desc: "\"WE\" is intentional. Employment isn't something we do for our clients — it's something we accomplish alongside them, one step at a time.",
  },
  {
    icon: Handshake,
    title: "Respect in Every Direction",
    desc: "We bring the same level of respect to every relationship in the employment process — clients, families, coworkers, and the businesses that hire them.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#2d3966] pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-blue-200 font-semibold mb-4">
              Our Story
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Built on the Belief That Every Person is Worthwhile
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Worthwhile Endeavors was founded with a simple but powerful conviction: that every individual — regardless of disability — deserves a real shot at meaningful employment, and that getting there is something we do together.
            </p>
          </div>
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/images/coaching-session.jpeg"
              alt="A coaching session between a job counselor and a client"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* The "WE" section */}
      <section className="py-20 px-6 bg-[#4a5b9a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-3xl mx-auto mb-8"
            style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
          >
            we
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            &ldquo;WE&rdquo; Is More Than a Logo
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
            The name <em>Worthwhile Endeavors</em> — and the &ldquo;WE&rdquo; at the center of it — reflects our core belief: that achieving more in life is not a solo effort. It takes clients, coaches, employers, and families working together. When everyone in that process is treated as worthwhile, the outcome changes.
          </p>
        </div>
      </section>

      {/* Paul's story */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-4">
              Meet Paul Frey
            </p>
            <h2 className="text-3xl font-bold text-[#2d3966] mb-6">
              A Career Built Around People with Disabilities
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Paul Frey has dedicated over a decade of his career to supporting adults with disabilities — starting out running group homes and learning firsthand what it means to walk alongside someone through the challenges of daily life.
              </p>
              <p>
                That foundation led him deeper into the workforce side of disability services, where he worked as a job coach and placement specialist, helping individuals find and keep real jobs in their communities. Along the way, he saw what worked, what didn&apos;t, and — most importantly — what it truly looked like for a client to thrive.
              </p>
              <p>
                He founded Worthwhile Endeavors to put those lessons into practice at scale — building an organization where every person in the employment process, from the client sitting across the table to the employer opening their door, is treated with genuine respect and care.
              </p>
              <p>
                Paul operates out of McKinney, Texas, and serves clients across North Dallas and the greater DFW area.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-6">
              Career Timeline
            </p>
            {[
              { label: "Group Home Director", desc: "Began career supporting adults with disabilities, running residential group homes and building a foundation of person-centered care." },
              { label: "Job Coach", desc: "Transitioned into vocational services, coaching clients through the day-to-day realities of entering and navigating the workplace." },
              { label: "Placement Specialist", desc: "Focused on job matching and employer relationships, connecting clients to opportunities that fit their individual goals and abilities." },
              { label: "Founded Worthwhile Endeavors", desc: "Launched WE to bring together everything he had learned — building a service organization grounded in dignity, respect, and real results." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 mt-1"
                    style={{ backgroundColor: "#4a5b9a" }}
                  />
                  {i < 3 && <div className="w-px flex-1 mt-2" style={{ backgroundColor: "#4a5b9a", opacity: 0.2 }} />}
                </div>
                <div className="pb-6">
                  <p className="font-semibold text-[#2d3966] mb-1">{item.label}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-[#f4f6fb]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-4 text-center">
            What We Stand For
          </p>
          <h2 className="text-3xl font-bold text-[#2d3966] text-center mb-14">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#4a5b9a" }}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-[#2d3966] text-lg mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <p className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-4">
          Ready to Work Together?
        </p>
        <h2 className="text-3xl font-bold text-[#2d3966] mb-4">
          Achieving More, Side by Side.
        </h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Whether you&apos;re seeking services, making a referral, or looking to hire — we&apos;d love to connect.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm"
          style={{ backgroundColor: "#4a5b9a" }}
        >
          Get in Touch <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
