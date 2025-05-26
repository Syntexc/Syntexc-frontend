"use client"
import Style from "./style.module.scss";
interface NewProps {
    setOpen: (open: boolean) => void;
}
const SynexcYourCRM =  ({setOpen}:NewProps)=>{
    return(
        <>
         <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.content}>
                    <h2>Ready to <span>Synexc Your CRM?</span></h2>
                    <h3>Let’s craft a CRM experience that’s not just functional, but foundational.</h3>
                    <h4>Your growth starts here.</h4>
                    </div>
                    <div className={Style.btn}>
            <a onClick={() => setOpen(true)}>Talk to <b>Our Experts</b></a>
        </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default SynexcYourCRM;