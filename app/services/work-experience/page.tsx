import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Work Experience | Worthwhile Endeavors",
  description:
    "Work Experience places clients in short-term community business settings — volunteer or paid — to build the real-world skills needed for long-term competitive employment.",
};

export default function WorkExperience() {
  return (
    <ServicePage
      tag="Adult Services"
      title="Work Experience"
      subtitle="Short-term placements in real community businesses that build the practical skills and confidence needed for long-term, competitive employment."
      image="/images/kitchen-coaching.jpeg"
      imageAlt="Job coach working alongside a client in a kitchen setting"
      highlights={[
        "Placement at real local businesses",
        "Volunteer or temporary paid work settings",
        "Skill building in an authentic work environment",
        "Structured support from our team throughout",
        "Referral through Texas Workforce Commission",
      ]}
      body={
        <>
          <p>
            Work Experience bridges the gap between training and full employment. By placing clients in real business settings — even on a short-term or volunteer basis — clients gain the firsthand experience that no classroom can fully replicate.
          </p>
          <p>
            These placements are selected based on each client&apos;s goals and strengths. Whether it&apos;s a retail environment, an office setting, or a trade, the goal is to expose clients to the rhythms of real work: showing up consistently, following workplace expectations, interacting with coworkers and customers, and developing a sense of professional identity.
          </p>
          <p>
            Our team remains actively involved during the placement — providing support, coaching, and feedback to help the client grow throughout the experience. Work Experience is often a stepping stone toward permanent employment.
          </p>
          <p>
            This service is referred through the Texas Workforce Commission&apos;s Vocational Rehabilitation program.
          </p>
        </>
      }
    />
  );
}
