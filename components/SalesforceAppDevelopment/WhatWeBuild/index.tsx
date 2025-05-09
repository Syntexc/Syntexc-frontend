"use client"

import Image from "next/image";
import Style from "./crm.module.scss" 

 
const WhatWeBuild = ()=>{

   

   
 
    return(
        <>
         <section className={Style.section} >
            <div className={Style.container}>
                <div className={Style.row}>
                    <h2>What We Build</h2> 
                </div>

                <div className={Style.row1}>
                <div className={Style.cardboxouer}>
                        
                            <div className={Style.one}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/sbriefcase-account.svg"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                <h3>Internal <br/> Business Apps </h3>
                                    <p>Need a better way to manage approvals? Route field service calls? Handle onboarding? We build internal apps that eliminate spreadsheets, manual workarounds, and data silos.</p>
                                </div>
                                </div>
                            </div>
                        
                            <div className={`${Style.one} ${Style.blackee} `}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/apple-icloud.svg"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                <h3>AppExchange <br /> Products</h3>
                                    <p>Got an idea that can help other Salesforce users? We help you design, develop, package, and publish your app to the AppExchange—turning your internal solution into a market-ready product.</p>
                                </div>
                                </div>
                            </div>
                         
                            <div className={Style.one}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/face-agent.svg"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                <h3>Partner & <br /> Customer Portals</h3>
                                    <p>Build branded portals that integrate seamlessly with your Salesforce org. Give your partners and customers controlled access to the data they need—nothing more, nothing less.</p>
                                </div>
                                </div>
                            </div>
                    
                       
                    </div>
                    
                </div>





                <div className={Style.textbox2}>
                  <div className={Style.heading1}>
                    <h2>How We Do It!</h2>
                    <p>We use the full Salesforce development stack to bring your app to life:</p>
                  </div>

                <div className={Style.cardboxouter}>
<div className={Style.contantbox}>
  <ul>
    <li>Lightning Web Components (LWC) for sleek, responsive UI</li>
    <li>Apex for custom logic, automation, and data processing</li>
    <li>Salesforce DX for modern DevOps and scalable code management</li>
    <li>REST/SOAP APIs for deep integration with external platforms</li>
    <li>Mobile-first design for wherever your users work</li>
    <li>Security reviews & AppExchange compliance (if publishing)</li>
  </ul>
</div>

<div className={Style.imagebox}>
  <Image src={"/Assetdfsd.svg"} alt={""} width={293} height={264} />
</div>
                </div>


                </div>


 


            </div>
        </section>
        </>
    )
}
export default WhatWeBuild;


const contentData = [
    {
      title: "We Solve Business Problems, Not Just Tech Issues.",
      description: "Salesforce is a tool, but success comes from strategy. We design solutions that fix bottlenecks, improve sales efficiency, and enhance customer engagement.",
      image: "/Frame395345.png",
    },
    {
      title: "Turn Data into Decisions.",
      description: "We help businesses make informed decisions by integrating Salesforce analytics and AI-driven insights.",
      image: "/Frame395341.png",
    },
    {
      title: "Automate for Efficiency.",
      description: "Reduce manual effort with intelligent automation in Salesforce, ensuring smooth business operations.",
      image: "/Frame395342.png",
    },
    {
      title: "Personalized Customer Experiences.",
      description: "Improve customer engagement with tailored marketing and support solutions powered by Salesforce.",
      image: "/Frame395343.png",
    },
    {
      title: "Seamless Integrations & Scalability.",
      description: "Connect Salesforce with your existing tools and scale as your business grows effortlessly.",
      image: "/Frame395344.png",
    },
  ];



