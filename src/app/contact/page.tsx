import type { Metadata } from "next";
import { ContactPageClient } from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Ashrith Krishna Namburi"
  },
  description: "Get in touch with Ashrith Krishna Namburi for project inquiries, freelance web development, or engineering opportunities.",
  alternates: {
    canonical: "https://myportfolio-eight-ecru-21.vercel.app/contact"
  },
  openGraph: {
    title: "Contact Ashrith Krishna Namburi",
    description: "Get in touch with Ashrith Krishna Namburi for project inquiries, freelance web development, or engineering opportunities.",
    url: "https://myportfolio-eight-ecru-21.vercel.app/contact"
  }
};

export default function ContactPage() {
  return <ContactPageClient />;
}
