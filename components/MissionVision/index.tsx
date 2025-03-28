import Image from "next/image";
import Style from "./missionvision.module.scss"

const MissionVision = ()=>{
    return (
        <>

<section className={Style.section}>
    <div className={Style.conatiner}>
    <div className={Style.row}>
<h2>Our Mission, Vision & Goals: <span>The Synexc Promise</span></h2>
        </div>

        <div className={Style.row1}>
{missionvisionarry?.map((item,index)=>{
    return(
        <>
        <div className={Style.boxstyle} key={index}>
            <div className={Style.image}>
                <Image src={item.image} width={104} height={104} alt={item.title} />
            </div>
            <div className={Style.conatent}>
                <h4>{item.title}</h4>
                <p>{item.contant}</p>
            </div>
        </div>
        </>
    )
})}
        </div>
    </div>
</section>

        </>
    )
}
export default MissionVision;


const missionvisionarry = [
    {
        image:"/milestones1.png",
        title:"Mission ",
        contant:"To empower businesses with scalable, intelligent, and future-ready Salesforce solutions that drive efficiency, enhance customer experiences, and maximize growth.",
    },
    {
        image:"/vision1.png",
        title:"Vision ",
        contant:" To create a dynamic, innovative, and inclusive Salesforce ecosystem where businesses harness technology to scale smarter, engage better, and achieve lasting success.",
    },
    {
        image:"/objectives1.png",
        title:"Goals ",
        contant:" To deliver tailored, high-impact Salesforce solutions, leverage AI and automation for business transformation, and build long-term partnerships rooted in trust, transparency, and measurable success.",
    },
]
