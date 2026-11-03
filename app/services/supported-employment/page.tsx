import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Supported Employment | Worthwhile Endeavors",
  description:
    "Supported Employment helps individuals with significant disabilities find and keep competitive, integrated employment through individualized job matching and ongoing support.",
};

export default function SupportedEmployment() {
  return (
    <ServicePage
      tag="Adult Services"
      title="Supported Employment"
      subtitle="Individualized assistance that enables clients with significant disabilities to enter and thrive in competitive, integrated employment."
      image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
      imageAlt="Two colleagues working together at a desk"
      highlights={[
        "Individualized job matching based on skills and goals",
        "Ongoing support during and after placement",
        "Extended services for long-term stability",
        "Coordination with employers and support networks",
        "Referral through Texas Workforce Commission",
      ]}
      body={
        <>
          <p>
            Supported Employment is designed for individuals with significant disabilities who are ready and motivated to work in competitive, integrated settings — meaning real jobs, at real wages, alongside people without disabilities.
          </p>
          <p>
            Unlike general job placement, Supported Employment includes ongoing, individualized support that lasts well beyond the first day on the job. Our team works closely with each client to identify the right job match, prepare for employment, and provide the coaching and accommodation needed to succeed.
          </p>
          <p>
            We also establish extended services — a long-term support system that helps clients maintain employment over time. This may involve regular check-ins, workplace accommodations, or coordination with other community support providers.
          </p>
          <p>
            Supported Employment is referred through the Texas Workforce Commission&apos;s Vocational Rehabilitation program. If you&apos;re working with a TWC counselor, ask about a referral to Worthwhile Endeavors.
          </p>
        </>
      }
    />
  );
}
