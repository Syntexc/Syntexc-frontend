import DataMigrationBanner from "@/components/DataMigration/Banner/page";
import CRMWithout from "@/components/DataMigration/CRMwithout/page";
import WhyMigrate from "@/components/DataMigration/WhyMigrate/page";
import SalesforcePartner from "@/components/SalesforcePartner";
import Trustedby from "@/components/Trustedby";

const DataMigration = ()=>{
    return(
        <>
        <DataMigrationBanner />
        <WhyMigrate />
        <SalesforcePartner />
        <CRMWithout />
        <Trustedby />
        </>
    )
}

export default DataMigration;