import Image from "next/image";
import Style from "./contacttalktous.module.scss"
const ContactTalktoUs = () =>{
    return(
        <>
<section className={Style.section}>
<div className={Style.layeer}>
    <Image src={"/Clippathgroup.svg"} alt={""} width={1188} height={64} />
</div>

    <div className={Style.container}>
    <div className={Style.row}>
    <div className={Style.contentbox}>
<h2>Talk to Us</h2>
<h3>No bots, no barriers </h3>
<p>Just real people, real solutions, and real results.</p>
<a href="#contact" >Book Consultation</a>

    </div>
    <div className={Style.imagebox}>
        <Image src={"/job-interview 1.svg"} alt={"interview"} width={213} height={213} />
    </div>
        </div>
    </div>
</section>
        </>
    )
}
export default ContactTalktoUs;