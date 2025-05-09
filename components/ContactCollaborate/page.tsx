
import ButtonHideAndShow from "../ButtonHideAndShow/page";
import Style from "./contactcollaborate.module.scss"
const ContactCollaborate = () => {
    return (
        <>
            <section className={Style.section}>
                <div className={Style.container}>
                    <div className={Style.row}>
                        <h3>Let’s Collaborate</h3>
                        <p>Whether it’s a quick idea or a long-term roadmap, we’re here to listen.</p>
                    </div>



                    <div className={Style.row1}>
<div className={Style.box}>
    <h4>Business & Sales Inquiries</h4>
    <div className={Style.btn1}>
    <ButtonHideAndShow
               iconurl={"/Arrow30.svg"}
               text="careers@synexc.com"
               action="mailto:careers@synexc.com"

               />
               <ButtonHideAndShow
               iconurl={"/usericonnew.svg"}
               text="+919810640078"
               action="tel:+91 9810640078"

               />
    </div>
</div>
<div className={Style.box}>
    <h4>Partnership Opportunities</h4>
    <div className={Style.btn1}>
    <ButtonHideAndShow
               iconurl={"/dubbeluser.svg"}
               text="Talk to us for Partnership"
               action="mailto:careers@synexc.com"


               />
             
    </div>
</div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default ContactCollaborate;