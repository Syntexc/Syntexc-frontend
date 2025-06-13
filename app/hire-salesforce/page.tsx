import { Metadata } from "next";
import HireSalesForce from "./ClientHireSalesforceClient";



export const metadata: Metadata = {
    title: "Hire Salesforce Experts & Developers | Synexc",
    description: "Hire certified Salesforce developers and admins from Synexc. Flexible engagement models for CRM customization, integration, and ongoing support"
    
}

export default function HireSalesForcePage(){
  return <HireSalesForce/>
}