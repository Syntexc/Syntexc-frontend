import Image from "next/image";
import Style from "./style.module.scss"
const MuchEverything = ()=> {
    return(
        <>
        <section className={Style.section}>
            <div className={Style.container}>
            <div className={Style.row}> <h2>What We Integrate <span>(Pretty Much Everything)</span></h2></div>
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

export default MuchEverything;


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
        image:"/mt1.svg",
        title:"Trust",
        content:"We honor every partnership with integrity and accountability",
    },
    {
        image:"/mt2.svg",
        title:"Customer Success ",
        content:"Your wins are the only metrics that matter",
    },
    {
        image:"/mt3.svg",
        title:"Inclusivity",
        content:"Diverse minds solve bigger problems. We welcome all voices.",
    },
    {
        image:"mt4.svg",
        title:"Reliability",
        content:"We show up. We deliver. Every time.",
    },
     {
        image:"/mt5.svg",
        title:"Innovation",
        content:"We’re always exploring what’s next, so you stay ahead",
    },
    {
        image:"/mt6.svg",
        title:"Collaboration",
        content:"We build with you, not just for you",
    },
]

 