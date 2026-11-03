import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Job Placement | Worthwhile Endeavors",
  description:
    "Job Placement services guide clients through every step of the job search process — from resume to offer — securing a position that aligns with their skills and goals.",
};

export default function JobPlacement() {
  return (
    <ServicePage
      tag="Adult Services"
      title="Job Placement"
      subtitle="Comprehensive job search support that prepares clients to find and secure a position aligned with their skills, interests, and career goals."
      image="/images/resume-search.jpeg"
      imageAlt="HR professional reviewing candidate resumes"
      highlights={[
        "Resume development and interview preparation",
        "Job search strategy and employer outreach",
        "Application and follow-up support",
        "Goal-aligned job matching",
        "Referral through Texas Workforce Commission",
      ]}
      body={
        <>
          <p>
            Job Placement is a hands-on service that walks clients through the entire job search process — from clarifying career goals to accepting an offer. We don&apos;t just hand clients a job board; we work alongside them every step of the way.
          </p>
          <p>
            Our team helps clients build the tools they need to present themselves confidently to employers: polished resumes, strong interview skills, and a clear understanding of what they&apos;re looking for in a role.
          </p>
          <p>
            We also work directly with employers in the community to identify opportunities that are a genuine fit — not just any open position, but roles where a client can grow and succeed long-term.
          </p>
          <p>
            Job Placement is referred through the Texas Workforce Commission&apos;s Vocational Rehabilitation program. Speak with your TWC counselor about whether this service is right for you.
          </p>
        </>
      }
    />
  );
}
