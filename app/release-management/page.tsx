import { Metadata } from "next";  
import ReleaseManagement from "./ReleaseManagmentClient";



export const metadata: Metadata = {
    title: "Salesforce Release Management Services | Synexc",
    description: "Streamline Salesforce updates with expert release management. Synexc ensures smooth deployments, testing, and version control for enterprise agility."
    
}

export default function ReleaseManagmentPage(){
  return <ReleaseManagement/>
}