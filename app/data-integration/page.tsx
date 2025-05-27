"use client"
import InqueryBox from "@/components/Inquerybox"; 
import JustMaintain from "@/components/ManagedServices/JustMaintain/page";
import ManagedServicesinner from "@/components/ManagedServices/ManagedServices/page";
import ContactUs from "@/components/ContactUs";
import { useState } from "react";
import DataintegrationBanner from "@/components/Dataintegration/BannerTop/page";


const ManagedServices = ()=>{
     const [open , setOpen] = useState(false);
    return(
        <>
       <DataintegrationBanner />
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