import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Environmental Work Assessment | Worthwhile Endeavors",
  description:
    "Environmental Work Assessment evaluates a client's skills and behavior across three or more real work environments to identify the best employment path forward.",
};

export default function EnvironmentalWorkAssessment() {
  return (
    <ServicePage
      tag="Assessment"
      title="Environmental Work Assessment"
      subtitle="A diagnostic tool that evaluates how a client performs across multiple real work environments — identifying strengths, barriers, and the best path forward."
      image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
      imageAlt="Person being observed working in a professional environment"
      highlights={[
        "Assessment across 3+ real work environments",
        "Observation of skills, behavior, and adaptability",
        "Identification of barriers and accommodations",
        "Detailed report informing next steps",
        "Referral through Texas Workforce Commission",
      ]}
      body={
        <>
          <p>
            Before a client begins job training or placement, it&apos;s important to understand how they perform in real work settings. The Environmental Work Assessment does exactly that — placing a client in three or more different work environments to observe how they respond, adapt, and perform.
          </p>
          <p>
            This isn&apos;t a test — it&apos;s a structured observation. Our team watches how a client handles different tasks, workloads, supervisors, and workplace cultures. The result is a detailed picture of where a client excels and what variables — like noise levels, supervision style, or task complexity — may affect their performance.
          </p>
          <p>
            The findings from an Environmental Work Assessment directly inform the next phase of a client&apos;s vocational plan — helping us match them to the right job, training, or support services.
          </p>
          <p>
            This service is referred through the Texas Workforce Commission&apos;s Vocational Rehabilitation program.
          </p>
        </>
      }
    />
  );
}
