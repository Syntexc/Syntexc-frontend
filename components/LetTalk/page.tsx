import Image from "next/image";
import Style from "./lettalk.module.scss"
const LetTalk = () =>{
    return(
        <>
        <section className={Style.section}>
            <div className={Style.container}>
<div className={Style.phone}>
    <Image src={"/phone.svg"}  width={60} height={60} alt={""}  />
</div>

                <h2>Let’s Talk </h2>
                <p>Your growth story deserves a partner who’s just as invested as you are.<br /><br />
                Let’s explore how Synexc can help you unlock the full potential of Salesforce and build a smarter, stronger future.</p>
                <a href="#">Contact Us Now</a>
            </div>
        </section>
        </>
    )
} 
export default LetTalk;