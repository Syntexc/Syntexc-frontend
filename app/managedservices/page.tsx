"use client"
import InqueryBox from "@/components/Inquerybox";
import ManagedServicesBanner from "@/components/ManagedServices/Banner/page";
import JustMaintain from "@/components/ManagedServices/JustMaintain/page";
import ManagedServicesinner from "@/components/ManagedServices/ManagedServices/page";
import ContactUs from "@/components/ContactUs";
import { useState } from "react";


const ManagedServices = ()=>{
     const [open , setOpen] = useState(false);
    return(
        <>
        <ManagedServicesBanner />
        <ManagedServicesinner />
        <JustMaintain setOpen={setOpen}/>
        <ContactUs />
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
export default ManagedServices;