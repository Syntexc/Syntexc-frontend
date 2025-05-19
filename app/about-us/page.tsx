 

import { Metadata } from "next";
import AboutUs from "./AboutUsClient";


export const metadata: Metadata = {
  title: "About Synexc | Salesforce Consulting Firm in India",
  description:
    "Learn about Synexc, a trusted Salesforce consulting firm in India delivering CRM, integration, and cloud solutions to drive business growth.",
};

export default function AboutPage() {
  return <AboutUs />;
}
