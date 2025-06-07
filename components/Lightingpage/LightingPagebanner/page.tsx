"use client"


import Image from "next/image";
import Style from "./style.module.scss"
interface NewProps {
    setOpen: (open: boolean) => void;
}
const LightingPagebanner = ({setOpen}:NewProps) => {
    return(
        <>
        <section className={Style.banner}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.textblock}>
                   <div className={Style.innerterxt}>
                         <h2>Salesforce Lightning : <span>A Modern Take on CRM Power</span></h2>
                         <h3>Goodbye Legacy. Hello Lightning.</h3>
                        <p><b>Classic was comfort.</b>
Because your CRM shouldn’t just support growth, it should accelerate it</p>
                   </div>
                   <a onClick={()=>setOpen(true)} className={Style.btn}>Get Started. <b>its for free!</b></a>
                    </div>
                    <div className={Style.imagebox}>
<Image src={"/full-model.svg"} alt={"Groupw39667"} width={667} height={491}  priority className="desktop" />
<Image src={"/Group39683.png"} alt={"Groupw39667"} width={667} height={491}  priority className="mobile" />

                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default LightingPagebanner;