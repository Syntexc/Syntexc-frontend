import Image from "next/image";
import Style from "./style.module.scss"
const WhereWeFit = ()=>{
    return (
        <>
        <section className={Style.section}>
            <div className={Style.container}>
                <h3>Where We Fit In</h3>
                <h4>We support:</h4>
                <div className={Style.image}>
                    <Image src={"/Group44439692.png"}  width={964} height={383} alt="" />
                </div>
            </div>
        </section>
        </>
    )
}
export default WhereWeFit;