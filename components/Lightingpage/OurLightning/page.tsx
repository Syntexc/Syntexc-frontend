import Image from "next/image";
import Style from "./style.module.scss"
const OurLightning = ()=> {
    return(
        <>
        <section className={Style.section}>
            <div className={Style.container}>
            <div className={Style.row}> <h2>Our Lightning <span>Services</span></h2></div>
            <div className={Style.row1}>
                {row1arry?.map((items,index)=>{
                    return(
                        <>
                        <CardBox
                        key={index}
                        image={items.image}
                        // heading={items.title}
                        content={items.content}
                        />
                        </>
                    )
                })}
                
            </div>
            <div className={Style.row2}>
         
                {row2arry?.map((items,index)=>{
                    return(
                        <>
                        <CardBox
                        key={index}
                        image={items.image}
                        // heading={items.title}
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

export default OurLightning;


interface CardBoxProp   {
image?:any;
heading?:string;
content?:string;
}

const CardBox = ({
    image,
    // heading,
    content,
}:CardBoxProp)=>{
    return(
        <>
        <div className={Style.cardbox}> 
            <div className={Style.image}>
                <Image src={image} width={84} height={83} alt={"image"} loading="lazy" />
            </div>
            <div className={Style.content}>
                {/* <h3>{heading}</h3> */}
                <p>{content}</p>
            </div>
        </div>
        </>
    )
}



const row1arry = [
    {
        image:"/s1.svg",
        // title:"Trust",
        content:"Lightning Migration & Upgrade",
    },
    {
       image:"/s2.svg",
        // title:"Customer Success ",
        content:"Custom App Development (App Builder & Components)",
    },
    {
         image:"/s3.svg",
        // title:"Inclusivity",
        content:"Lightning UI/UX Optimization",
    },
    
]

const row2arry = [
    {
        image:"/s4.svg",
        // title:"Innovation",
        content:"Automation & Optimization",
    },
    {
         image:"/s5.svg",
        // title:"Collaboration",
        content:"Post-Migration Support",
    },
    
]