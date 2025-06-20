import { Metadata } from "next"; 
import HealthPage from "./HealthOrgCheckClient";



export const metadata: Metadata = {
    title: "Salesforce Org Health Check Services | Synexc",
    description: "Optimize your Salesforce performance with Synexc's Org Health Check. Identify risks, clean data, and improve CRM efficiency and system reliability"
    
}

export default function HealthPageNew(){
  return <HealthPage/>
}