"use client"
import InqueryBox from "@/components/Inquerybox";
import Certainty from "@/components/MobileasFirst/Certainty/page";
import FortheMovers from "@/components/MobileasFirst/FortheMovers/page";
import MobileasFirstbanner from "@/components/MobileasFirst/MobileasFirstbanner/page";
import WhatWeBring from "@/components/MobileasFirst/WhatWeBring/page";
import { useState } from "react";

const MobileasFirstPage = () =>{
    const [open , setOpen] = useState(false);
    return(
        <>
    <MobileasFirstbanner setOpen={setOpen} />
    <WhatWeBring />
    <FortheMovers /> 
    <Certainty  setOpen={setOpen} />



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
export default MobileasFirstPage;