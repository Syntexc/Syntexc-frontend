"use client"
import Banner from "@/components/Banner";
import BlogSection from "@/components/BlogSection";
import ContactUs from "@/components/ContactUs";
import CRM from "@/components/CRM";
import ExpertPartner from "@/components/ExpertPartner";
import Instantly from "@/components/Instantly";
import MissionVision from "@/components/MissionVision";
import SalesforcePartner from "@/components/SalesforcePartner";
import Synexc from "@/components/Synexc";
import ThinkYour from "@/components/ThinkYour";
import Trustedby from "@/components/Trustedby"; 

export default function Home() {
  return (
     <>
      
   
     <Banner />
     <Synexc />
     <CRM />
     <SalesforcePartner />
     <ExpertPartner />
     <ThinkYour />
     <Trustedby /> 
     <MissionVision />
     {/* <BlogSection /> */}
     <Instantly />
     <ContactUs />
     </>
  );
}
