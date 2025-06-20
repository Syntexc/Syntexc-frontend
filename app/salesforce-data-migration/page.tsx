import { Metadata } from "next"; 
import DataMigration from "./DataMigrationClient";



export const metadata: Metadata = {
    title: "Salesforce Data Migration Services | Synexc Experts",
    description: "Migrate data to Salesforce from CRMs Oracle & Dynamics. Synexc consultant offers secure, expert-led Salesforce data migration services in the USA & India.",
    keywords:"salesforce data migration, data migration in salesforce, migrate data to salesforce, data migration salesforce, migrate data from salesforce to dynamics crm, oracle to salesforce data migration, salesforce data migration services, data migration to salesforce, migrate data from crm to salesforce, salesforce data migration consultant"
    
}

export default function DataMigrationPage(){
  return <DataMigration/>
}