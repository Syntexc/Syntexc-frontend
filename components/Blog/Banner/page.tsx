import Image from "next/image";
import Style from "./style.module.scss"
const BannerSection = ()=>{
    return(
        <>
        <section className={Style.section}>
<div className={Style.container}>
    <div className={Style.row}>
        <div className={Style.box}>
        <div className={Style.logo}>
            <Image src={"/Groupwhitelogo.svg"} alt={"Groupwhitelogo"} width={352} height={71} />
        </div>

        <h2> Ideas. Innovation. Impact. <span>All in sync.</span></h2>
        <p>Welcome to our braintrust. The place where Salesforce know-how meets strategic foresight. We don’t just talk trends, we break them down, build on them, and turn them into business outcomes.</p>
        </div>
        <a href="#">
        <strong>Subscribe</strong> & Stay Ahead
        </a>
    </div>
</div>
        </section>
        </>
    )
}
export default BannerSection;