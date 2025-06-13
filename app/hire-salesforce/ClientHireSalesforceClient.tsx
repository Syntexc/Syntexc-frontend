"use client"
import ContractResources from "@/components/HireSalesForcepage/ContractResources/page";
import EnterpriseScale from "@/components/HireSalesForcepage/EnterpriseScale/page";
import HireSalesForceBanner from "@/components/HireSalesForcepage/HireSalesForceBanner/page";
import WhatWeOfferhire from "@/components/HireSalesForcepage/WhatWeOfferhire/page";
import WhereWeFit from "@/components/HireSalesForcepage/WhereWeFit/page";
import InqueryBox from "@/components/Inquerybox";
import { useState } from "react";

const HireSalesForce = () =>{
    const [open , setOpen] = useState(false);
    return (
        <>
        <HireSalesForceBanner />
        <WhatWeOfferhire />
        <ContractResources />
        <WhereWeFit />
        <EnterpriseScale  setOpen={setOpen} />
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
export default HireSalesForce;