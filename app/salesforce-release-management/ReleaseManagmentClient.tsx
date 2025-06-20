"use client"
import InqueryBox from "@/components/Inquerybox";
import Certainty from "@/components/MobileasFirst/Certainty/page";
import OurApproach from "@/components/ReleaseManagement/OurApproach/page";
import RMbanner from "@/components/ReleaseManagement/RMbanner/page";
import WhyItMatters from "@/components/ReleaseManagement/WhyItMatters/page";
import { useState } from "react";

const ReleaseManagement = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <RMbanner setOpen={setOpen} />
      <WhyItMatters />
      <OurApproach />
      <Certainty setOpen={setOpen} />


      {open && (
        <div className="overlay">
          <div className="popup">
            <button onClick={() => setOpen(false)} className="closeButton" style={{
              color: "red"
            }}>
              &times;
            </button>
            <InqueryBox />
          </div>
        </div>

      )}
    </>
  )
}
export default ReleaseManagement;