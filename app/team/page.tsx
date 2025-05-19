import { Metadata } from "next";
import Teampage from "./TeamClient";


export const metadata:Metadata = {
    title:"Meet Our Experts | Salesforce Integration Consultants",
    description:"Discover Synexc’s certified Salesforce consultants specializing in CRM, cloud, and integration services for businesses across India."
}

export default function TeamPage(){
    return <Teampage />
}

 
