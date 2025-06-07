"use client"
import Image from "next/image";
import Style from "./style.module.scss"
interface NewProps {
    setOpen: (open: boolean) => void;
}
const Healthpagebanner = ({setOpen}:NewProps) => {
    return(
        <>
        <section className={Style.banner}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.textblock}>
                   <div className={Style.innerterxt}>
                    <h3>Secure. Compliant. Optimized. That’s the Synexc promise </h3>
                         <h2>Salesforce Org Health Check</h2>
                         
                        <p><b>Your Salesforce org might be running, but is it running securely and efficiently? </b>
 </p>
                   </div>
                   <a onClick={()=>setOpen(true)} className={Style.btn}>Get Started. <b>its for free!</b></a>
                    </div>
                    <div className={Style.imagebox}>
<Image src={"/2480451_150271.svg"} alt={"Groupw39667"} width={604} height={416} priority  className="desktop" />
<Image src={"/scope.png"} alt={"Groupw39667"} width={604} height={416} priority  className="mobile" />

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Healthpagebanner;