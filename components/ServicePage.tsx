import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface ServicePageProps {
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  body: React.ReactNode;
  highlights: string[];
}

export default function ServicePage({
  tag,
  title,
  subtitle,
  image,
  imageAlt,
  body,
  highlights,
}: ServicePageProps) {
  return (
    <>
      {/* Header */}
      <section className="bg-[#2d3966] pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={12} /> All Services
            </Link>
            <p className="text-xs uppercase tracking-widest text-blue-200 font-semibold mb-4">
              {tag}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {title}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">{subtitle}</p>
          </div>
          <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
            <Image src={image} alt={imageAlt} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
            {body}
          </div>
          <div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <p className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-4">
                What to Expect
              </p>
              <ul className="space-y-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                    <span
                      className="mt-1 w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#4a5b9a" }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <p className="text-xs uppercase tracking-widest text-[#4a5b9a] font-semibold mb-4">
          Ready to Get Started?
        </p>
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
          Let&apos;s talk about your goals.
        </h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          Contact us to learn how this service can be part of your path to employment.
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
