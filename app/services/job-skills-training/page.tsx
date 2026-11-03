import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Job Skills Training | Worthwhile Endeavors",
  description:
    "Job Skills Training provides goal-focused support for clients who need more training than an employer can provide — building independence and meeting workplace expectations.",
};

export default function JobSkillsTraining() {
  return (
    <ServicePage
      tag="Adult Services"
      title="Job Skills Training"
      subtitle="Targeted, goal-focused training that builds independence, reinforces workplace skills, and helps clients meet employer expectations."
      image="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
      imageAlt="Trainer working one-on-one with a client at a workstation"
      highlights={[
        "One-on-one training at or near the worksite",
        "Skill reinforcement and habit building",
        "Workplace accommodation development",
        "Collaboration with employer and support team",
        "Referral through Texas Workforce Commission",
      ]}
      body={
        <>
          <p>
            Some clients need more structured support than a typical employer orientation can provide. Job Skills Training fills that gap — offering focused, individualized coaching designed to help clients master the skills required for their specific role.
          </p>
          <p>
            Training is goal-focused and practical. We work directly with clients at or near their worksite, teaching and reinforcing the skills they need while developing accommodations that increase independence and reduce barriers to success.
          </p>
          <p>
            We coordinate closely with employers throughout the process to ensure training aligns with workplace expectations and culture. The goal is always for the client to become as independent as possible on the job.
          </p>
          <p>
            Job Skills Training is referred through the Texas Workforce Commission&apos;s Vocational Rehabilitation program. Ask your TWC counselor whether this service is appropriate for your situation.
          </p>
        </>
      }
    />
  );
}
