import Image from "next/image";
import Style from "./ourstory.module.scss"

const OurStory = () => {
    return (
        <>
            <section className={Style.section}>
                <div className={Style.container}>
                    <div className={Style.box}>
                        <div className={Style.content}>
                           
                                <h3>The Missed Potential of Salesforce</h3>
                                <div className={Style.module}>
                                <p>Many organizations invest in Salesforce with high hopes only to encounter fragmented systems, underutilized features, and disconnected teams. The result? Wasted resources, stalled growth, and missed opportunities.</p>
                                <p> That’s where clarity, strategy, and expertise become essential. That’s where Synexc comes in.</p>
                            </div>
                            <a href="#">Get a <b>Free</b> Consultation now!</a>
                        </div>
                        <div className={Style.image}>

                            <Image src={"/homefly.png"} width={59} height={79} alt="image" className={Style.learr} />
                            <Image src={"/44955449_9086038 1.svg"} width={478} height={478} alt="image" className={Style.bigimage} />
                        </div>
                    </div>

 <h2 className={Style.heading}>Our Story: <span>Built for Impact</span></h2>




<div className={Style.imagewithcontent}>
    <div className={Style.content}>
        <p><b>At Synexc</b>, we set out with a clear mission:</p>
        <p>To empower businesses with trusted, scalable, and innovative Salesforce solutions that deliver real, lasting impact.</p>
        <p>We're not just implementers we're strategic partners. From aligning stakeholders to optimizing user experiences, we always focus on the transformation that drives results.</p>
    <p>Whether you’re a startup laying your foundation or an enterprise refining your ecosystem, we meet you where you are and take you where you need to go.</p>
    </div>
    <div className={Style.image}>
        <Image src={"/Frame427319128.svg"} alt={"Frame427319128"} width={332} height={332} />
    </div>
</div>  

                </div>
            </section>
        </>
    )
}
export default OurStory;