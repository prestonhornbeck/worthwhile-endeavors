import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Vocational Adjustment Training (VAT) | Worthwhile Endeavors",
  description:
    "Vocational Adjustment Training prepares high school students with disabilities for competitive integrated employment through practical classroom instruction on work-related topics.",
};

export default function VAT() {
  return (
    <ServicePage
      tag="Student Services"
      title="Vocational Adjustment Training (VAT)"
      subtitle="Practical, classroom-based instruction that prepares high school students with disabilities for competitive, integrated employment."
      image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
      imageAlt="Students participating in a vocational training session"
      highlights={[
        "For high school students with disabilities",
        "Classroom-based instruction and activities",
        "Covers work habits, communication, and professional conduct",
        "Prepares students for competitive integrated employment",
        "Referred through Texas Workforce Commission",
      ]}
      body={
        <>
          <p>
            Vocational Adjustment Training (VAT) is a structured, classroom-based service that prepares high school students with disabilities for the realities of competitive employment. It goes beyond career exploration — VAT teaches the specific behaviors, attitudes, and skills that employers expect from day one.
          </p>
          <p>
            Topics covered include punctuality, workplace communication, appropriate professional conduct, understanding employer expectations, responding to feedback, and working alongside others. These &quot;soft skills&quot; are often the difference between a student who gets hired and one who keeps a job long-term.
          </p>
          <p>
            VAT is delivered through practical instruction and hands-on activities designed to mirror real workplace scenarios. Students leave with a clearer understanding of what it means to be a reliable, productive employee — and what kind of work environment suits them best.
          </p>
          <p>
            This service is referred through the Texas Workforce Commission&apos;s Vocational Rehabilitation program and delivered in coordination with local school systems.
          </p>
        </>
      }
    />
  );
}
