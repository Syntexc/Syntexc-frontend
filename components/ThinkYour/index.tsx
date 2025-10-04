"use client"
import React, { useState } from "react"
import Style from "./thinkyour.module.scss"
import Image from "next/image";
const ThinkYour = ()=>{

    const [activeTab, setActiveTab] = React.useState("Real estate");
    console.log(activeTab , "saadsads")
   


    return(
        <>
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <h1>Salesforce Consulting Services for Every Industry</h1>
                    <p>Our Salesforce consulting services empower businesses worldwide:</p>
                </div>
                <div className={Style.row1}>
                    <ul className={Style.tabws}>
                        {tabsarry?.map((items,index)=>{
                            return(
                                <>
                                <li className={activeTab === items.tabname ? Style.active : Style.inactive} key={index} onClick={() => setActiveTab(items.tabname)}>{items.tabname}</li>
                                </>
                            )
                        })}
                    </ul>


 {activeTab === "Real estate" &&  <>
<div className="">
    <Tabbox
    title="Real Estate" 
    imageurl="/12079892_4906433 1.png" 
    content="Track leads, manage tenants, and automate sales cycles" 
     />
</div>
</>}  
 {activeTab === "Finance" &&  <>
<div className="">
    <Tabbox
    title="Finance" 
    imageurl="/65674511_9609529 1.png" 
    content="Compliance and streamline customer data management" 
     />
</div>
</>}  
 {activeTab === "Healthcare" &&  <>
<div className="">
    <Tabbox
    title="Healthcare" 
    imageurl="/healthcar-image.png" 
    content="Patient engagement, security, and connected care" 
     />
</div>
</>}  
 {activeTab === "E-commerce" &&  <>
<div className="">
    <Tabbox
    title="E-commerce" 
    imageurl="/22635354_6666910 1.png" 
    content="Sales journeys, automation, and insights " 
     />
</div>
</>}  
 {activeTab === "Manufacturing" &&  <>
<div className="">
    <Tabbox
    title="Manufacturing" 
    imageurl="/7206481_3527159 1.png" 
    content="Supply chain visibility and sales efficiency" 
     />
</div>
</>}  

                </div>
            </div>
        </section>
        </>
    )
}
export default ThinkYour;


const tabsarry = [
    {tabname:"Real estate"},
    {tabname:"Finance"},
    {tabname:"Healthcare"},
    {tabname:"E-commerce"},
    {tabname:"Manufacturing"},
]

interface TabboxProp  {
title?:any;
content?:string;
imageurl?:any;
}

const Tabbox =({
title,
content,
imageurl,

}:TabboxProp)=>{
    return (
        <>
        <div className={Style.tabbox}>
            <div className={Style.tabrow}>
                <div className={Style.tabcontent}>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </div>
                <div className={Style.tabimage}>
                    <Image src={imageurl} width={220} height={220} alt={""}    />
                </div>
            </div>
        </div>
        </>
    )
}





