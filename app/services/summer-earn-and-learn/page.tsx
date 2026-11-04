import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Summer Earn & Learn (SEAL) | Worthwhile Endeavors",
  description:
    "The Summer Earn & Learn program provides students with disabilities ages 14–22 with paid work experience and employability skills training over the summer.",
};

export default function SummerEarnAndLearn() {
  return (
    <ServicePage
      tag="Student Services"
      title="Summer Earn & Learn (SEAL)"
      subtitle="A statewide summer program that gives students with disabilities ages 14–22 paid work experience and the employability skills they need to succeed."
      image="/images/office-worker.jpeg"
      imageAlt="Young person working independently at a standing desk"
      highlights={[
        "For students with disabilities ages 14–22",
        "Paid work experience placements",
        "Employability skills training",
        "Statewide TWC program",
        "Summer session schedule",
      ]}
      body={
        <>
          <p>
            Summer Earn & Learn (SEAL) is a Texas statewide initiative that connects students with disabilities to real paid work during the summer months — while building the foundational skills that make those experiences count.
          </p>
          <p>
            Participants receive both a paycheck and practical training. SEAL combines paid work placements with structured employability instruction — covering topics like workplace communication, reliability, professional conduct, and navigating workplace relationships.
          </p>
          <p>
            The program is designed for students ages 14–22 who have a documented disability. It&apos;s a powerful first step into the workforce for young people who may have limited prior work experience, giving them a résumé entry, a reference, and — most importantly — confidence.
          </p>
          <p>
            SEAL is a Texas Workforce Commission program. Contact us or speak with your TWC counselor to learn if your student qualifies.
          </p>
        </>
      }
    />
  );
}
