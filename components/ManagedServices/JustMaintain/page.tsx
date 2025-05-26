"use client"
import Style from "./style.module.scss";
interface NewProps {
    setOpen: (open: boolean) => void;
}
const JustMaintain =  ({setOpen}:NewProps)=>{
    return(
        <>
         <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
                    <div className={Style.content}>
                    <h2>Let’s Not Just Maintain Salesforce! <span>Let’s Master It.</span></h2>
                    
                    <h4>Talk to a Salesforce Managed Services Expert Today.</h4>
                    </div>
                    <div className={Style.btn}>
            <a onClick={() => setOpen(true)}>Book a  <b>consultation now</b></a>
        </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default JustMaintain;