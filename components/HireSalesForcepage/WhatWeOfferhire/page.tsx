import Image from "next/image";
import Style from "./style.module.scss"
const WhatWeOfferhire = ()=> {
    return(
        <>
        <section className={Style.section}>
             <Image src={"/experience-overview-trees 1.png"} alt={""} width={217} height={169} className={Style.layer1} />
                <Image src={"/image 415.png"} alt={""} width={156} height={73} className={Style.layer2} />
            <div className={Style.container}>
            <div className={Style.row}> <h2>What We Offer </h2></div>
            <div className={Style.row1}>
                {row1arry?.map((items,index)=>{
                    return(
                        <>
                        <CardBox
                        key={index}
                        image={items.image}
                        heading={items.title}
                        content={items.content}
                        />
                        </>
                    )
                })}
                
            </div>
            
            </div>
        </section>


        </>
    )
}

export default WhatWeOfferhire;


interface CardBoxProp   {
image?:any;
heading?:string;
content?:string;
}

const CardBox = ({
    image,
    heading,
    content,
}:CardBoxProp)=>{
    return(
        <>
        <div className={Style.cardbox}> 
            <div className={Style.image}>
                <Image src={image} width={84} height={83} alt={"image"} loading="lazy" />
            </div>
            <div className={Style.content}>
                <h3>{heading}</h3>
                <p>{content}</p>
            </div>
        </div>
        </>
    )
}



const row1arry = [
    {
        image:"/d1.png",
        title:"Salesforce Developers",
        content:"(Apex, LWC, Integrations) ",
    },
    {
       image:"/d2.png",
        title:"Admins & Analysts",
        content:"(Data, Security, Automation)",
    },
    {
        image:"/d3.png",
        title:"Solution Architects ",
        content:"(Design, Scalability, Governance)",
    },
    {
       image:"/d4.png",
        title:"Marketing Cloud Experts",
        content:"(Journey Builder, Email Studio)",
    },
     {
       image:"/d5.png",
        title:"CPQ & FSL Specialists",
        // content:"We’re always exploring what’s next, so you stay ahead",
    },
    {
        image:"/d6.png",
        title:"AppExchange App Developers",
        // content:"We build with you, not just for you",
    },
]

 