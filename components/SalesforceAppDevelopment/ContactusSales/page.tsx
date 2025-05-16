import InqueryBox from "@/components/Inquerybox";
import Style from "./style.module.scss"
const ContactusSales = ()=>{
    return(
        <>

<section className={Style.section} id="contact">
    <div className={Style.container}>
        <div className={Style.row}>
            <div className={Style.headingbox}>
            <h2>Have an Idea? <span>Let’s Build It Right.</span></h2>
            <p>Or Send Us Your Concept Now!</p>
            </div>
            <div className={Style.frombox}>
                <InqueryBox  boxcontainer="full"    />
            </div>
        </div>
    </div>
</section>

        </>
    )
}
export default ContactusSales;