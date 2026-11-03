import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Pre-Employment Transition Services (Pre-ETS) | Worthwhile Endeavors",
  description:
    "Pre-ETS is an in-classroom work readiness program that prepares students with disabilities ages 14–22 for employment after graduation.",
};

export default function PreETS() {
  return (
    <ServicePage
      tag="Student Services"
      title="Pre-Employment Transition Services (Pre-ETS)"
      subtitle="An in-classroom work readiness program that equips students with disabilities ages 14–22 with the knowledge and skills to pursue employment after graduation."
      image="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
      imageAlt="Students engaged in a classroom workshop"
      highlights={[
        "For students with disabilities ages 14–22",
        "Delivered in school or classroom settings",
        "Covers work readiness, career exploration, and self-advocacy",
        "Prepares students for life after graduation",
        "Referred through Texas Workforce Commission",
      ]}
      body={
        <>
          <p>
            Pre-Employment Transition Services (Pre-ETS) meets students where they are — in the classroom — to begin building the foundation for a successful working life. This program is specifically designed for students with disabilities between the ages of 14 and 22.
          </p>
          <p>
            Pre-ETS covers five core areas: job exploration counseling, work-based learning experiences, counseling on postsecondary education, workplace readiness training, and instruction in self-advocacy. Together, these prepare students not just for their first job, but for a lifetime of employment.
          </p>
          <p>
            By starting this preparation during the school years, students graduate with more than a diploma — they graduate with a plan. Pre-ETS gives them the vocabulary, confidence, and practical skills to navigate the transition from school to work.
          </p>
          <p>
            Pre-ETS is a federally mandated program delivered through the Texas Workforce Commission&apos;s Vocational Rehabilitation division. Eligible students are referred through their school or TWC counselor.
          </p>
        </>
      }
    />
  );
}
