import Image from "next/image";
import Style from "./style.module.scss"

const HireSalesForceBanner = ()=>{
    return(
        <>
<section className={Style.section}>
<div className={Style.container}>
   <div className={Style.contentbox}>
     <h2>Hire Salesforce Experts <span> On Demand</span></h2>
    <h3>Because great projects deserve the right people, right now.</h3>
    <h4>Need Salesforce talent, fast? </h4>
    <p>Whether it’s a product launch, a surprise workload spike, or a specialized module rollout, Synexc’s Resource on Contract model gives you flexible access to certified Salesforce experts without the overhead of full-time hiring. </p>
   </div>
</div>


<div className={Style.layesrs}>
    <Image src={"/XMLID_248_.png"} alt={""} width={1920} height={300} />
</div>
</section>


        </>
    )
}
export default HireSalesForceBanner;