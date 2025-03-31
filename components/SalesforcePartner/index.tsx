import Image from "next/image";
import Style from "./alesforcepartner.module.scss"
const SalesforcePartner = () =>{
    return (
        <>
        <section className={Style.section} id="product">
            <Image src={"/experience-overview-trees 1.png"} alt={""} width={217} height={169} className={Style.layer1} />
            <Image src={"/image 415.png"} alt={""} width={156} height={73} className={Style.layer2} />
            <div className={Style.container}>
                <div className={Style.row}>
                    <h2>Proud to Be the Salesforce Partner<span> That Delivers. Every Time.</span></h2>
                </div>
<div className={Style.row1}>
{dataarry?.map((items,index)=>{
    return(
        <>
        <CardBox key={index} icon={items.icon} title={items.title} content={items.content} />
        </>
    )
})}
</div>

            </div>
        </section>
        </>
    )
}

export default SalesforcePartner;

const dataarry = [
    {
       icon:"/1.png",
       title:"Salesforce Consulting",
       content:"Align your CRM with your business goals", 
    },
    {
        icon:"/2.png",
       title:"Implementation & Integration",
       content:"Fast, seamless, and future-proof", 
    },
    {
        icon:"/3.png",
       title:"AppExchange Development",
       content:"Custom applications for extended functionality", 
    },
    {
        icon:"/4.png",
       title:"Managed Services",
       content:"24/7 monitoring, upgrades, and optimization", 
    },
    {
        icon:"/5.png",
       title:"On-Demand Salesforce Experts",
       content:"Scale your team with contract-based professionals", 
    },
]


interface CardBoxProp {
    icon?:any;
    title?:string;
    content?:string;
}

const CardBox = ({
    icon,
    title,
    content,
}:CardBoxProp)=>{
    return(
        <>
        <div className={Style.cardbox}>
            <div className={Style.image}>
                <Image src={icon} width={24} height={24} alt="" />
            </div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
        </>
    )
}