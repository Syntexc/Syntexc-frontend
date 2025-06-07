"use client"


import Image from "next/image";
import Style from "./style.module.scss"
interface NewProps {
    setOpen: (open: boolean) => void;
}
const RMbanner = ({setOpen}:NewProps) => {
    return(
        <>
        <section className={Style.banner}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.textblock}>
                   <div className={Style.innerterxt}>
                         <h2>Salesforce Release Management  </h2>
                         <h3>Future-Proof Your Salesforce, One Deployment at a Time </h3>
                        <p><b>At Synexc, we don’t just push code, we orchestrate change.</b>
Release Management is the heart of your Salesforce evolution, and we make sure every beat is on tempo.</p>
                   </div>
                   <a onClick={()=>setOpen(true)} className={Style.btn}>Get Started. <b>its for free!</b></a>
                    </div>
                    <div className={Style.imagebox}>
<Image src={"/Groupds39688.svg"} alt={"Groupw39667"} width={784} height={567}  priority className="desktop" />
<Image src={"/release-circel.png"} alt={"Groupw39667"} width={784} height={567}  priority className="mobile" />

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default RMbanner;