import { Metadata } from "next"; 
import ManagedServices from "./ManagedServiceClient";



export const metadata: Metadata = {
    title: "Salesforce Managed Services Provider | Synexc",
    description: "Get expert Salesforce managed services with Synexc. From admin to app support, we offer scalable solutions across USA & India with certified CRM consultants.",
    keywords:"salesforce managed services, managed services for salesforce, managed salesforce services, managed services salesforce, salesforce managed service provider, salesforce managed service, salesforce managed services partner, salesforce managed service providers, hire salesforce managed services, salesforce managed services consulting, salesforce managed services integration, salesforce managed services provider, salesforce managed support services, managed salesforce service provider, managed salesforce support services, salesforce admin managed services, salesforce, application management services, salesforce it service management, salesforce managed service consultant, salesforce managed service in usa, salesforce managed services specialist ,salesforce managed services support, salesforce managed services company, salesforce app managed services, salesforce managed service india"
    
}

export default function ManagedServicePage(){
  return <ManagedServices/>
}