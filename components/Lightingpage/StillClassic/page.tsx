"use client"
import Image from "next/image"
import Style from "./style.module.scss"
const StillClassic = () => {
    return (
        <>
            <section className={Style.section}>

                <h3>Still on Classic? Let Synexc Guide Your Lightning Leap.</h3>


                <div className={Style.cons}>
                    <div className={Style.contentbox}>
                        <h4>We dont just migrate, we modernize:</h4>
                        <ul>
                            <li>Full CRM Audit: We assess whats working and whats holding you back.</li>
                            <li>Seamless Lightning Migration: Zero disruption, full optimisation.</li>
                            <li>Custom Lightning App Development: Tailored interfaces, no-code flexibility.</li>
                            <li>Training & Change Management: Because adoption is as important as deployment.</li>
                            <li>Ongoing Support: We're in it with you, long after the switch is flipped.</li>
                        </ul>
                    </div>
                    <div className={Style.imagebox}>
                        <Image src={"/Group239682.png"} width={476} height={314} alt="Group239682" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default StillClassic;