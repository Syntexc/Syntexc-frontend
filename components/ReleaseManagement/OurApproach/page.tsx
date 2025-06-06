import Image from "next/image";
import Style from "./style.module.scss";

const OurApproach = ()=>{
    return(
        <>
        <section className={Style.section}>
            <div className={Style.container}>
                <h3><span>Our Approach ,</span> Your Peace of Mind </h3>
                <div className={Style.heading}>
                    <h4>Whether you're running weekly sprints or quarterly enterprise rollouts, Synexc builds a release rhythm you can trust.</h4>
                    <h5>We don’t just deploy changes. We deliver confidence. </h5>
                </div>
                <Image src={"/Group39523.svg"} width={935} height={332} alt="" />
            </div>
        </section>
        </>
    )
}
export default OurApproach;