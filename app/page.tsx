"use client"
import BlogSection from "@/components/BlogSection";
import ContactUs from "@/components/ContactUs";
import CRM from "@/components/CRM";
import ExpertPartner from "@/components/ExpertPartner";
import Instantly from "@/components/Instantly";
import MissionVision from "@/components/MissionVision";
import SalesforcePartner from "@/components/SalesforcePartner";
import ThinkYour from "@/components/ThinkYour";
import Trustedby from "@/components/Trustedby";
import Image from "next/image"; 

export default function Home() {
  return (
     <>
     <CRM />
     <SalesforcePartner />
     <ExpertPartner />
     <ThinkYour />
     <Trustedby />
     <MissionVision />
     <BlogSection />
     <Instantly />
     <ContactUs />
     </>
  );
}
