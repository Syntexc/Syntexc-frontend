"use client";
import DataMigrationBanner from "@/components/DataMigration/Banner/page";
import CRMWithout from "@/components/DataMigration/CRMwithout/page";
import WhyMigrate from "@/components/DataMigration/WhyMigrate/page";
import InqueryBox from "@/components/Inquerybox";
import SalesforcePartner from "@/components/SalesforcePartner";
import Trustedby from "@/components/Trustedby";
import { useState } from "react";

const DataMigration = ()=>{
     const [open , setOpen] = useState(false);
    return(
        <>
        <DataMigrationBanner  setOpen={setOpen} />
         <WhyMigrate />
      <SalesforcePartner />
        <CRMWithout setOpen={setOpen}/>
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

export default DataMigration;