import Image from "next/image";
import Style from "./style.module.scss"
const ManagedServicesBanner = () => {
    return(
        <>
        <section className={Style.banner}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.textblock}>
                   <div className={Style.innerterxt}>
                         <h2>Doing everything right,<span> but not seeing results?</span></h2>
                        <p><b>Salesforce isn’t a “set it and forget it” tool: it should grow and adapt with your business.</b>
At Synexc, we don't just "maintain" Salesforce. We fuel it. We fix it. We future-proof it</p>
                   </div>
                   <a href="#" className={Style.btn}>Get Started. <b>its for free!</b></a>
                    </div>
                    <div className={Style.imagebox}>
<Image src={"/Groupw39667.png"} alt={"Groupw39667"} width={701} height={607}  />

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default ManagedServicesBanner;