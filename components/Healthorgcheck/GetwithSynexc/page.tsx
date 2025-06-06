import Image from "next/image";
import Style from "./style.module.scss"
const GetwithSynexc = () => {
    return (
        <>
            <section className={Style.section}>
                <div className={Style.container}>
                    <div className={Style.boxstyle}>
                        <h2><span>What You Get with</span> Synexc</h2>
                        <div className={Style.modulebox}>
                            {whatarray?.map((item, index) => {
                                return (
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
export default GetwithSynexc;



const whatarray = [
    {
        title: "A Detailed Health Scorecard ",
        content: "See how your current settings stack up with Salesforce benchmarks.",
        image: "/st1.svg",
    },
    {
        title: "A Personalized Fix-It Plan ",
        content: "We don’t leave you hanging with a report. We build a remediation roadmap, complete with timelines and quick wins.",
        image: "/st2.svg",
    },
    {
        title: "Compliance & Risk Advisory",
        content: "We guide you in aligning your org with GDPR, HIPAA, and internal IT policies, so you stay audit-ready. ",
        image: "/st3.svg",
    },
    {
        title: "Admin Enablement",
        content: "We upskill your internal team to recognize and maintain secure configurations post-remediation. ",
        image: "/st4.svg",
    },
    
]


