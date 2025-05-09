import SalesforceAppDevelopmentBanner from "@/components/SalesforceAppDevelopment/Banner/page";
import Style from "./style.module.scss"
import SalesforceApps from "@/components/SalesforceAppDevelopment/SalesforceApps";
import WhatWeBuild from "@/components/SalesforceAppDevelopment/WhatWeBuild";
import SalesforcePartner from "@/components/SalesforcePartner";
import ExpertPartner from "@/components/ExpertPartner";
import ContactusSales from "@/components/SalesforceAppDevelopment/ContactusSales/page";

const SalesforceAppDevelopment = ()=>{
    return(
        <>
<SalesforceAppDevelopmentBanner />
<SalesforceApps />
<WhatWeBuild />
<SalesforcePartner />
<ExpertPartner />
<ContactusSales />
       
        </>
    )
}

export default SalesforceAppDevelopment;