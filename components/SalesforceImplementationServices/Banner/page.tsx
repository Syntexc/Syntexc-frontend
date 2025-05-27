import Image from "next/image";
import Style from "./style.module.scss"


interface NewProps {
    setOpen: (open: boolean) => void;
}

const SalesforceImplementationServicesBanner = ({setOpen}:NewProps) =>{
    return(
        <>
         <section className={Style.banner}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.textblock}>
                   <div className={Style.innerterxt}>
                         <h2>CRM Chaos? <span>Let's Turn It into Clarity.</span></h2>
                        <p> At Synexc, we don’t just implement CRMs, we embed growth. Whether you're starting fresh or scaling fast, we align your CRM with your strategy, your people, and your customers.</p>
                   </div>
                   <a onClick={()=> setOpen(true)} className={Style.btn}>Get Started. <b>its for free!</b></a>
                    </div>
                    <div className={Style.imagebox}>
<Image src={"/Group39680.svg"} alt={"Groupw39667"} width={669} height={326}  />

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default SalesforceImplementationServicesBanner;