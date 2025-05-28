import Image from "next/image";
import Style from "./style.module.scss"

const DataintSalesforcePartner = ()=>{
    return(
        <>
          <section className={Style.section} id="product">
                <Image src={"/experience-overview-trees 1.png"} alt={""} width={217} height={169} className={Style.layer1} />
                <Image src={"/image 415.png"} alt={""} width={156} height={73} className={Style.layer2} />
                <div className={Style.container}>
                    <div className={Style.row}>
                        <h2>The Problem with Poor Integration? <span>Everything.</span></h2>
                    </div>
                    <div className={Style.row1}>
                        {dataarry?.map((items, index) => {
                            return (
                                <>
                                    <CardBox key={index} icon={items.icon} title={items.title} content={items.content} />
                                </>
                            )
                        })}
                    </div>


<div className={Style.extratext}>
    <p className={Style.text1}>No more juggling spreadsheets.</p>
    <p className={Style.text2}>No more broken customer experiences.</p>
    <p className={Style.text3}>No more “we'll get back to you” delays.</p>
</div>

<div className={Style.btnlink}>
    <a href="#">Get a <b>Free</b> Integration Consultation</a>
</div>

                </div>
            </section>
        </>
    )
}
export default DataintSalesforcePartner;




const dataarry = [
    {
        icon: "/3.png",
        title: "Data silos that slow you down.", 
    },
    {
        icon: "/2.png",
        title: "Manual work that costs you money.", 
    },
    {
        icon: "/1.png",
        title: "Customer journeys that feel broken and frustrating.", 
    },
    {
        icon: "/4.png",
        title: "Decision-making that’s based on guesswork, not real-time insights.", 
    },
     
]


interface CardBoxProp {
    icon?: any;
    title?: string;
    content?: string;
}

const CardBox = ({
    icon,
    title,
    content,
}: CardBoxProp) => {
    return (
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