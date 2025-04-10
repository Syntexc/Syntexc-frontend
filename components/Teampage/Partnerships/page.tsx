import Image from "next/image";
import Style from "./partnerships.module.scss"
const Partnerships =()=>{
    return(
        <>
        <section className={Style.section}>
            <div className={Style.layer}>
                <Image src={"/clip-path-group.svg"} alt={""} width={1188} height={64}  /> 
            </div>
            <div className={Style.container}>
<h2>People Build Companies.<br /> <span>People Build Partnerships.</span> </h2>
<p>Our journey is driven by bold thinkers, curious minds, and partners who believe in doing things differently. Whether you're looking to transform your Salesforce ecosystem, explore a partnership, or just chat ideas, you're in the right place.</p>
<div className={Style.btn}>
    <a href="#">Let’s build what’s next, <b>together</b>.</a>
</div>
            </div>
        </section>
        </>
    )
}
export default Partnerships;