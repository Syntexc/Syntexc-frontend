 

import { Metadata } from "next"; 
import ContactUss from "./ContactUsClient";


export const metadata: Metadata = {
  title: "Contact Synexc | Salesforce CRM Consultant India",
  description:
    "Connect with Synexc, a leading Salesforce CRM consultant in India. Get expert support for implementation, consulting, and integrations.",
};

export default function ContactPage() {
  return <ContactUss />;
}
