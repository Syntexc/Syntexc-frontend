import { Metadata } from "next"; 
import SalesforceImplementationServices from "./SaleforceImplimentionClient";



export const metadata: Metadata = {
    title: "Salesforce CRM Implementation Services | Synexc",
    description: " Implement Salesforce CRM with Synexc’s expert consultants in USA & India. End-to-end implementation services tailored to your business needs and growth goals.",
    keywords:"salesforce crm implementation, salesforce crm implementation services, salesforce crm implementation consultant, implement salesforce crm, salesforce crm implementation company, salesforce crm implementation in india , salesforce crm implementation india, salesforce crm implementation services india"
    
}

export default function SaleforceImplimentationPage(){
  return <SalesforceImplementationServices/>
}