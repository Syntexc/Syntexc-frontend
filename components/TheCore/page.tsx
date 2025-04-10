import Image from "next/image";
import Style from "./thecore.module.scss"
const TheCore = ()=> {
    return(
        <>
        <section className={Style.section}>
            <div className={Style.container}>
            <div className={Style.row}> <h2>The Core Code <span>We Live By!</span></h2></div>
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
            <div className={Style.row2}>
                <div></div>
                {row2arry?.map((items,index)=>{
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
                <div></div>
                
            </div>
            </div>
        </section>


        </>
    )
}

export default TheCore;


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
        image:"/Trust.svg",
        title:"Trust",
        content:"We honor every partnership with integrity and accountability",
    },
    {
        image:"/CustomerSuccess.svg",
        title:"Customer Success ",
        content:"Your wins are the only metrics that matter",
    },
    {
        image:"/Inclusivity.svg",
        title:"Inclusivity",
        content:"Diverse minds solve bigger problems. We welcome all voices.",
    },
    {
        image:"Reliability.svg",
        title:"Reliability",
        content:"We show up. We deliver. Every time.",
    },
]

const row2arry = [
    {
        image:"/Innovation.svg",
        title:"Innovation",
        content:"We’re always exploring what’s next, so you stay ahead",
    },
    {
        image:"/Collaboration.svg",
        title:"Collaboration",
        content:"We build with you, not just for you",
    },
    {
        image:"/Transparency.svg",
        title:"Transparency",
        content:"No hidden fees, no vague promises  just clarity",
    } 
]