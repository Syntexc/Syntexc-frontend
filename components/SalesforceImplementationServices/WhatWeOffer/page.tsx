import Image from "next/image";
import Style from "./style.module.scss"
const WhatWeOffer = ()=>{
    return(
        <>
        <section  className={Style.section}> 

<div className={Style.container2}>
    <div className={Style.content2}>
        <h2>Why CRM Implementation Matters</h2>
        <h4>CRM isn’t just a tool. It’s your frontline in delivering meaningful customer experiences.</h4>
        <p> Every growing business hits a tipping point: spreadsheets start to sag, leads fall through the cracks, and sales teams lose sync. That’s where CRM steps in, but only if it’s implemented right. At Synexc, we make sure it is.</p>
    </div>

    <Image src={"/11119941_4671188 1.svg"} width={635} height={408} alt="11119941_4671188" />

</div>


            <div className={Style.container}>
                <div className={Style.boxstyle}>
                    <h2>What We Offer</h2>
                    <div className={Style.heading}>
                        <h3>Strategic Planning Meets Seamless Execution</h3>
                        <h4>Here’s how we guide your CRM journey from concept to conversion:</h4>
                    </div>

<div className={Style.modulebox}>
{whatarray?.map((item,index)=>{
    return(
        <>
        <div className={Style.cardbox} key={index}>
            <div className={Style.conatnt}>
                <h4>{item.title}</h4>
                <p>{item.content}</p>
            </div>
            <div className={Style.image}>
                <Image src={item.image} width={164} height={164} alt="image" />
            </div>
        </div>
        </>
    )
})}




</div>


                </div>
            </div>
        </section>
        </>
    )
}
export default WhatWeOffer;



const whatarray = [
    {
        title:"CRM Roadmapping",
        content:"We start with your goals and tailor a CRM blueprint that supports them,  not the other way around.",
        image:"/ww1.svg",
    },
    {
        title:"Custom Setup & Configuration",
        content:"We build your CRM setup from the ground up, customizing objects, streamlining workflows, and automating processes to match the way your business actually runs.",
        image:"/ww2.svg",
    },
    {
        title:"User Training & Change Management",
        content:"Because adoption isn’t optional. We empower your teams to not just use CRM,  but thrive with it.",
        image:"/ww3.svg",
    },
    {
        title:"Third-Party Integrations",
        content:"Sync your CRM with your favorite tools: email, marketing automation, ERP, or custom apps.",
        image:"/ww4.svg",
    },
    {
        title:"Data Migration & Cleanup",
        content:"Say goodbye to messy imports. We ensure your data arrives safely and meaningfully.",
        image:"/ww5.svg",
    },
    {
        title:"Post-Go-Live Support",
        content:"We stick around. From bug fixes to performance tuning, we’re with you every step of the way.",
        image:"/ww6.svg",
    },
]


