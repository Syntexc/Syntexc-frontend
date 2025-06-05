import Image from "next/image";
import Style from "./style.module.scss"
const MakesLightning = ()=>{
    return(
        <>
        <section  className={Style.section}> 

 


             <div className={Style.container}>
                <div className={Style.boxstyle}>
                    <h2><span>What Makes Lightning…</span> Lightning?</h2>
                  

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
export default MakesLightning;



const whatarray = [
    {
        title:"Lightning App Builder",
        content:"Build custom apps with clicks, not code. Drag. Drop. Deploy. Tailor every workspace exactly the way your teams work.",
        image:"/app.svg",
    },
    {
        title:"Lightning Components",
        content:"Reusable, modular building blocks to create dynamic pages and apps. Think LEGO®, but for business growth.",
        image:"/energy.svg",
    },
    {
        title:"Enhanced UI & UX",
        content:"A clean, intuitive interface that doesn’t just look better, it works better. Fewer clicks, faster load times, and everything where you need it.",
        image:"/uxnew.svg",
    },
    {
        title:"Lightning Flow & Process Automation",
        content:"From lead capture to post-sale support, automate anything. No more manual bottlenecks. Just seamless efficiency.",
        image:"/technology-integration.svg",
    },
    {
        title:"Kanban Views & List Management",
        content:"Visualize progress like never before. Prioritize, drag, drop, and conquer your pipeline with confidence.",
        image:"/migration.svg",
    },
    {
        title:"Mobile-First Responsive",
        content:"Work doesn’t wait. Lightning ensures your CRM moves with you, on any device, any time.",
        image:"/responsive.svg",
    },
]


