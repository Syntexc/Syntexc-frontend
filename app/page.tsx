import BlogSection from "@/components/BlogSection";
import ContactUs from "@/components/ContactUs";
import Instantly from "@/components/Instantly";
import MissionVision from "@/components/MissionVision";
import Image from "next/image"; 

export default function Home() {
  return (
     <>
     <MissionVision />
     <BlogSection />
     <Instantly />
     <ContactUs />
     </>
  );
}
