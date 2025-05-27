import Image from "next/image";
import Style from "./style.module.scss"
const DataintegrationBanner = () => {
    return(
        <>
        <section className={Style.banner}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.textblock}>
                   <div className={Style.innerterxt}>
                         <h2>Salesforce Integration Services</h2>
                         <h3>Make Your Systems Talk And Your Business Roar.</h3>
                        <p><b>Today, speed isn’t a luxury. It’s survival.</b>
And disconnected systems? They’re the silent killers of customer experience, agility, and growth.</p>
                   </div>
                   <a href="#" className={Style.btn}>Get Started. <b>its for free!</b></a>
                    </div>
                    <div className={Style.imagebox}>
<Image src={"/Group39678.svg"} alt={"Groupw39667"} width={701} height={607}  />

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default DataintegrationBanner;