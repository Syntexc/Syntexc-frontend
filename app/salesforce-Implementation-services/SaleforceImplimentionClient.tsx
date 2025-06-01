"use client"
import InqueryBox from "@/components/Inquerybox";
import SalesforceImplementationServicesBanner from "@/components/SalesforceImplementationServices/Banner/page";
import Bonus from "@/components/SalesforceImplementationServices/Bonus/page";
import SynexcYourCRM from "@/components/SalesforceImplementationServices/SynexcYourCRM/page";
import WhatWeOffer from "@/components/SalesforceImplementationServices/WhatWeOffer/page";
import { useState } from "react";


const SalesforceImplementationServices = ()=>{
     const [open , setOpen] = useState(false);
    return (
        <>
        <SalesforceImplementationServicesBanner setOpen={setOpen} />
     <WhatWeOffer />
          <Bonus setOpen={setOpen}  />
         <SynexcYourCRM setOpen={setOpen} /> 
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
export default SalesforceImplementationServices;