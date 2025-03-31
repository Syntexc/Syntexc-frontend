"use client"

import Image from "next/image";
import Style from "./crm.module.scss"
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
const CRM = ()=>{

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
         <section className={Style.section} ref={sectionRef}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <h2>From CRM to Business Breakthroughs - <br/> The Synexc Effect </h2>
                    <p>Proven Expertise. Measurable Impact. Continuous Innovation.</p>
                </div>

                <div className={Style.row1}>
                    <ul>
                        <li>
                            <div className={Style.one}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/Connection.png"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                <h3><Counter end={50} isVisible={isVisible} /><span>+</span></h3>
                                    <p>Salesforce <br/> Implementation</p>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={Style.secd}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/start-up 1.png"} width={30} height={30} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                <h3><Counter end={50} isVisible={isVisible} /><span>+</span></h3>
                                    <p>Projects  <br/> Completed</p>
                                </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul>
                       
                        
                        <li>
                            <div className={Style.three}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/success 1.png"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                <h3><Counter end={50} isVisible={isVisible} /><span>+</span></h3>
                                    <p>Success  <br/> Stories</p>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={Style.four}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/badge 1.png"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                <h3><Counter end={50} isVisible={isVisible} /><span>+</span></h3>
                                    <p>Salesforce  <br/> Specialists</p>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className={Style.five}>
                            <div className={Style.inner}>
                                <div className={Style.image}>
                                    <Image src={"/exchange-rate 1.png"} width={24} height={24} alt="Connection" />
                                </div>
                                <div className={Style.container}>
                                <h3><Counter end={50} isVisible={isVisible} /><span>+</span></h3>
                                    <p>AppExchange Security  <br/> Reviews Cleared</p>
                                </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>



                <div className={`${Style.row2} ${isVisible ? Style.fadeIn : ""}`} >
      <h2>Big Goals Need Big Solutions: That’s Where Synexc Comes In.</h2>
      <div className={Style.inner2}>
        <div className={Style.leftBar} style={{ top: `${activeIndex * 80}px` }}></div>
        <div className={Style.content} onClick={() => setActiveIndex((prev) => (prev + 1) % contentData.length)}>
          <h3>{contentData[activeIndex].title}</h3>
          <p>{contentData[activeIndex].description}</p>
        </div>
        <div className={Style.image}>
        <Image src={"/Frame 39534.png"} width={199} height={159} alt="" />
        </div>
      </div>
      <a href="#contact" className={Style.btn}>
        Get Started. <strong>It’s for free!</strong>
      </a>
    </div>


            </div>
        </section>
        </>
    )
}
export default CRM;


const contentData = [
    {
      title: "We Solve Business Problems, Not Just Tech Issues.",
      description: "Salesforce is a tool, but success comes from strategy. We design solutions that fix bottlenecks, improve sales efficiency, and enhance customer engagement.",
      image: "/Frame39534.png",
    },
    {
      title: "Turn Data into Decisions.",
      description: "We help businesses make informed decisions by integrating Salesforce analytics and AI-driven insights.",
      image: "/analytics.png",
    },
    {
      title: "Automate for Efficiency.",
      description: "Reduce manual effort with intelligent automation in Salesforce, ensuring smooth business operations.",
      image: "/automation.png",
    },
    {
      title: "Personalized Customer Experiences.",
      description: "Improve customer engagement with tailored marketing and support solutions powered by Salesforce.",
      image: "/customer-experience.png",
    },
    {
      title: "Seamless Integrations & Scalability.",
      description: "Connect Salesforce with your existing tools and scale as your business grows effortlessly.",
      image: "/integration.png",
    },
  ];



