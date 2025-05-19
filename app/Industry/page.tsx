import { Metadata } from "next";
import IndustryPage from "./IndustryClient";



export const metadata: Metadata = {
    title: "Industries We Serve | Salesforce Consulting Services",
    description: " Explore how our Salesforce consulting agency supports industries with CRM, cloud solutions, and integration services tailored to your goals."
    
}

export default function IndustryPages(){
  return <IndustryPage/>
}