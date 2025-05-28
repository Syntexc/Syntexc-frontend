"use client"
import Image from "next/image";
import Style from "./style.module.scss";
import React, { useEffect, useRef, useState } from "react";

 

const Counter = ({ end, isVisible }: { end: number; isVisible: boolean }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isVisible) return; // Start counting only if visible

    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 30));

    const timer = setInterval(() => {
      start += increment;
      if (start > end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 30);

    return () => clearInterval(timer);
  }, [end, isVisible]); // Runs when `isVisible` changes

  return <>{count}</>;
};
interface NewProps {
    setOpen: (open: boolean) => void;
}
const OurIntegrationMagic = ({setOpen}:NewProps) =>{
    const [isVisible, setIsVisible] = useState(false);
      const sectionRef = useRef<HTMLDivElement | null>(null);
      
      useEffect(() => {
        const handleScroll = () => {
          if (sectionRef.current) {
            const top = sectionRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (top < windowHeight - 100) {
              setIsVisible(true);
            }
          }
        };
      
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check visibility on mount
      
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
    
    
          useEffect(() => {
            const handleScroll = () => {
              if (sectionRef.current) {
                const top = sectionRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight - 100) {
                  setIsVisible(true);
                }
              }
            };
            
            window.addEventListener("scroll", handleScroll); 
            return () => window.removeEventListener("scroll", handleScroll);
          }, []);
    
    
          const [activeIndex, setActiveIndex] = useState(0);
    
          useEffect(() => {
            const handleScroll = () => {
              if (sectionRef.current) {
                const top = sectionRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (top < windowHeight - 100) {
                  setIsVisible(true);
                }
              }
            };
            
            window.addEventListener("scroll", handleScroll); 
            return () => window.removeEventListener("scroll", handleScroll);
          }, []);
 
    return(
        <>
         <section className={Style.section} >
            <div className={Style.container}>
                <div className={Style.row}>
                    <h2>How We Work Our Integration Magic?</h2> 
                </div>

                <div className={Style.row1}>
                <div className={Style.cardboxouer}>
                            <div className={Style.one}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/sbriefcase-account.svg"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                <h3>API-Based Integration </h3>
                                    <p>We securely connect Salesforce with external systems using APIs like REST, SOAP, and Platform Events for seamless data exchange.</p>
                                </div>
                                </div>
                            </div>
                        
                            <div className={`${Style.one} ${Style.blackee} `}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/apple-icloud.svg"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                <h3>Salesforce Connect</h3>
                                    <p>We enable Salesforce to access live external data in real time without duplicating or storing it inside Salesforce.</p>
                                </div>
                                </div>
                            </div>
                         
                            <div className={Style.one}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/face-agent.svg"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                <h3>MuleSoft Mastery</h3>
                                    <p>We design complex, enterprise-grade integrations across multiple systems using MuleSoft’s powerful Anypoint Platform.</p>
                                </div>
                                </div>
                            </div>
                    </div>
<div className={Style.row1}> 
                    <div className={Style.cardboxouer}>
                            <div className={Style.one}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/sbriefcase-account.svg"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                <h3>AppExchange Power </h3>
                                    <p>We leverage trusted, ready-to-use AppExchange connectors to integrate Salesforce faster and more cost-effectively.</p>
                                </div>
                                </div>
                            </div>
                        
                            
                         
                            <div className={Style.one}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/face-agent.svg"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                <h3>Custom Development</h3>
                                    <p>We build custom APIs, middleware, and coded solutions when off-the-shelf integrations don’t fit your unique needs.</p>
                                </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>


 <div className={`${Style.row2} ${isVisible ? Style.fadeIn : ""}`} >
      <h2>Our Salesforce Integration Services</h2>
      <div className={Style.inner2}>
        <div className={Style.leftBar}></div>
        {/* <div className={Style.leftBar} style={{ top: `${activeIndex * 80}px` }}></div> */}
        <div className={Style.content} onClick={() => setActiveIndex((prev) => (prev + 1) % contentData.length)}>
          <h3>{contentData[activeIndex].title}</h3>
          <p>{contentData[activeIndex].description}</p>
        </div>
        <div className={Style.image}>
        <Image src={contentData[activeIndex].image} width={199} height={159} alt="" />
        </div>
      </div>
      <a onClick={()=>setOpen(true)} className={Style.btn}>
      Claim Your Exclusive <strong>Discovery Session</strong>
      </a>
    </div>




 


            </div>
        </section>
        </>
    )
}
export default OurIntegrationMagic;


const contentData = [
    {
      title: "Third-Party App Integration",
      description: "Sync Salesforce with your full tech stack, marketing, sales, support, finance, you name it.",
      image: "/crm1.svg",
    },
    {
      title: "ERP and CRM Synchronization",
      description: "Bridge the gap between sales, inventory, and finance for real-time clarity",
      image: "/crm2.svg",
    },
    {
      title: "Real-Time and Batch Data Sync",
      description: "Whether you need instant updates or overnight jobs, we’ve got it covered.",
      image: "/crm2.svg",
    },
    {
      title: "Legacy System Modernization",
      description: "Old doesn’t mean obsolete. We modernize your legacy apps with seamless integration.",
      image: "/crm2.svg",
    },
    {
      title: "Custom API Development",
      description: "Tailor-made APIs that make your systems click (and your life easier).",
      image: "/crm3.svg",
    },
    {
      title: "Salesforce-to-Salesforce Integration",
      description: "Multiple orgs? No problem. We create one connected Salesforce universe.",
      image: "/crm2.svg",
    },
    {
      title: "Ongoing Support and Optimization",
      description: "Your growth doesn’t stop, neither should your systems.",
      image: "/crm2.svg",
    },
  ];



