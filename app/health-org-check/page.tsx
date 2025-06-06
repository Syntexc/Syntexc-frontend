"use client"
import CtaModel from "@/components/Healthorgcheck/CtaModel/page";
import GetwithSynexc from "@/components/Healthorgcheck/GetwithSynexc/page";
import HealthPageBanner from "@/components/Healthorgcheck/Healthpagebanner/page";
import ImportantThanEver from "@/components/Healthorgcheck/ImportantThanEver/page";
import Testimonialsection from "@/components/Healthorgcheck/Testimonialsection/page";
import WhatWeEvaluate from "@/components/Healthorgcheck/WhatWeEvaluate/page";
import InqueryBox from "@/components/Inquerybox";
import { useState } from "react";

const HealthPage = ()=>{
    const [open , setOpen] = useState(false);
    return(
        <>
        <HealthPageBanner setOpen={setOpen} />
<WhatWeEvaluate />
<GetwithSynexc />
<ImportantThanEver />
<Testimonialsection />
<CtaModel setOpen={setOpen} />





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
export default HealthPage;