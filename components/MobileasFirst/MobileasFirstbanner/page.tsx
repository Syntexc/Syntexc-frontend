"use client"


import Image from "next/image";
import Style from "./style.module.scss"
interface NewProps {
    setOpen: (open: boolean) => void;
}
const MobileasFirstbanner = ({setOpen}:NewProps) => {
    return(
        <>
        <section className={Style.banner}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.textblock}>
                   <div className={Style.innerterxt}>
                         <h2>Salesforce, Now in Your <span>Pocket</span></h2>
                         <h3>Built for the go-getters. Powered by Synexc. </h3>
                        <p><b>Business doesn’t wait. Neither should your CRM.</b>
At Synexc, we transform Salesforce Mobile from just an app into your pocket-sized power tool, smart, secure, and supercharged.</p>
                   </div>
                   <a onClick={()=>setOpen(true)} className={Style.btn}>Get Started. <b>its for free!</b></a>
                    </div>
                    <div className={Style.imagebox}>
<Image src={"/Group239690.svg"} alt={"Groupw39667"} width={695} height={521}  priority />

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default MobileasFirstbanner;