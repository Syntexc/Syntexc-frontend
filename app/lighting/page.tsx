"use client"
import InqueryBox from "@/components/Inquerybox";
import GoLightning from "@/components/Lightingpage/GoLightning/page";
import LightingPagebanner from "@/components/Lightingpage/LightingPagebanner/page";
import MakesLightning from "@/components/Lightingpage/MakesLightning/page";
import OurLightning from "@/components/Lightingpage/OurLightning/page";
import RealityCheck from "@/components/Lightingpage/RealityCheck/page";
import StillClassic from "@/components/Lightingpage/StillClassic/page";
import { useState } from "react";

const LightingPage = ()=>{
    const [open , setOpen] = useState(false);
    return(
        <>
       <LightingPagebanner  setOpen={setOpen} />
<MakesLightning />
<RealityCheck />
<StillClassic />
<OurLightning />
<GoLightning setOpen={setOpen} />




        {open && (
            <div className="overlay">
          <div className="popup">
            <button onClick={() => setOpen(false)} className="closeButton" style={{
              color:"red"
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
export default LightingPage;