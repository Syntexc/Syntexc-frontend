import styles from "../ContactUs/ContactUs.module.scss"
import InqueryBox from "../Inquerybox";

const ContactUs = ()=>{
    return(
        <>
<section className={styles.section}>
    <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.contentbox}>
                <h2><span>Contact Us</span> – Let’s Make Something Great Together!</h2>
                <div className={styles.desp}>
                    <h4>Time to break the ice? We’d love to hear from you! </h4>
                    <p>Whether you have a question, need expert advice, or are ready to transform your Salesforce experience, we’re here to help.</p>
                </div>
            </div>
            <div className={styles.frombox}>
                <InqueryBox />
            </div>
        </div>
    </div>
</section>


        </>
    )
}
export default ContactUs;