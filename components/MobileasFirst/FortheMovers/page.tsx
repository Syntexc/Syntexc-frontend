import Image from "next/image";
import Style from "./style.module.scss"
const FortheMovers = ()=> {
    return(
        <>
        <section className={Style.section}>
            <div className={Style.container}>
            <div className={Style.row}> <h2>For the Movers <span>Who Mean Business</span></h2>
            
            <h3><span>Sales. Support. Strategy.</span> If your team mobile, your CRM should be too.</h3>
            
            </div>
            <div className={Style.row1}>
                {row1arry?.map((items,index)=>{
                    return(
                        <>
                        <CardBox
                        key={index}
                        image={items.image}
                        heading={items.title}
                        // content={items.content}
                        />
                        </>
                    )
                })}
                
            </div>

<div className={Style.btnnew}>Anyone tired of “I’ll do it when I get to my laptop” </div>

            
            </div>
        </section>


        </>
    )
}

export default FortheMovers;


interface CardBoxProp   {
image?:any;
heading?:string;
// content?:string;
}

const CardBox = ({
    image,
    heading,
    // content,
}:CardBoxProp)=>{
    return(
        <>
        <div className={Style.cardbox}> 
            <div className={Style.image}>
                <Image src={image} width={84} height={83} alt={"image"} loading="lazy" />
            </div>
            <div className={Style.content}>
                <h3>{heading}</h3>
                {/* <p>{content}</p> */}
            </div>
        </div>
        </>
    )
}



const row1arry = [
    {
        image:"/mt1.svg",
        title:"Field Sales Teams ",
        // content:"We honor every partnership with integrity and accountability",
    },
    {
        image:"/mt2.svg",
        title:"Customer Service Agents",
        // content:"Your wins are the only metrics that matter",
    },
    {
        image:"/mt3.svg",
        title:"Executives On-the-Go ",
        // content:"Diverse minds solve bigger problems. We welcome all voices.",
    },
    {
        image:"mt4.svg",
        title:"Event & Campaign Managers ",
        // content:"We show up. We deliver. Every time.",
    },
      
]

 