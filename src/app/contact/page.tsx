import type { Metadata } from "next";
import { ContactPageClient } from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact & Connect",
  description: "Contact Ashrith Namburi, Full Stack Developer. Get in touch for custom web application development, freelancing projects, or engineering inquiries.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/contact"
  },
  openGraph: {
    title: "Contact & Connect | Ashrith Namburi",
    description: "Contact Ashrith Namburi, Full Stack Developer for project inquiries or collaboration.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/contact"
  }
};

export default function ContactPage() {
  return <ContactPageClient />;
}
