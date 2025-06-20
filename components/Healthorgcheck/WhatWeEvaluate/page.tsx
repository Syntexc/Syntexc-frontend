import Image from "next/image";
import Style from "./style.module.scss"
const WhatWeEvaluate = () => {
    return (
        <>
            <section className={Style.section} id="product">
                {/* <Image src={"/experience-overview-trees 1.png"} alt={""} width={217} height={169} className={Style.layer1} />
                <Image src={"/image 415.png"} alt={""} width={156} height={73} className={Style.layer2} /> */}
                <div className={Style.container}>
                    <div className={Style.row}>
                        <h2>What We Evaluate</h2>
                        <h3>We deep-dive into the core health indicators of your org</h3>
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
                    <div className={Style.row2}>
                        {dataarry1?.map((items, index) => {
                            return (
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

export default WhatWeEvaluate;

const dataarry = [
    {
        icon: "/1.png",
        title: "Password Policies ",
        content: "Minimum length, complexity, expiration cycles.",
    },
    {
        icon: "/2.png",
        title: "Session Settings",
        content: "Timeouts, IP ranges, login hours.",
    },
    {
        icon: "/6.png",
        title: "Field-Level Security",
        content: "Sensitive data visibility across profiles.",
    },
    {
        icon: "/4.png",
        title: "Object & Permission Settings",
        content: "Role-based access control.",
    },
    
]
const dataarry1 = [
     
    {
        icon: "/5.png",
        title: "Audit Trails & Setup Changes",
        content: " Monitoring critical system changes.",
    },
    {
        icon: "/7.png",
        title: "Data Sharing Rules",
        content: "Over-permissioned users? We’ll catch them.",
    },
    {
        icon: "/3.png",
        title: "API Usage & Integration Logs ",
        content: "Spotting misuse or oversights.",
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