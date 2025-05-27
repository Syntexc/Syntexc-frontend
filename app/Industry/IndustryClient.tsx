"use client"
import AboutbannerIndustry from "@/components/AboutbannerIndustry/page";
import ActuallyWorks from "@/components/ActuallyWorks/page";
import InqueryBox from "@/components/Inquerybox";
import SalesforcePartner from "@/components/SalesforcePartner";
import Synexc1 from "@/components/Synexc1";
import Trustedby from "@/components/Trustedby";
import { useState } from "react";

 

const IndustryPage =()=>{

     const [open , setOpen] = useState(false);
    return(
        <>
        <AboutbannerIndustry  setOpen={setOpen} />
       <Synexc1  setOpen={setOpen} />
         <SalesforcePartner />
       <ActuallyWorks setOpen={setOpen}/>
   <Trustedby /> 



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
export default IndustryPage;