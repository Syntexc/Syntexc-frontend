import Image from "next/image";
import Style from "./style.module.scss"
const ContractResources = ()=>{
    return (
        <>
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
   <div className={Style.boxstyle}>
    <div className={Style.heading}>
    <h2>Why Choose Synexc for Contract Resources?</h2> 
</div>
<div className={Style.iinerbox}>
    <div className={Style.contentbox}>
        <h3>Deep Salesforce Talent Pool</h3>
        <p>We handpick only certified, battle-tested professionals with real-world experience.</p>
    </div>
    <div className={Style.imagebox}>
        <Image src={"/t1.png"} alt={""} width={500} height={333} style={{
            objectFit:"contain"
        }} />
    </div>
</div>
</div>




  <div className={Style.boxstyle}>
<div className={Style.iinerbox}>
     <div className={Style.imagebox}>
        <Image src={"/t2.png"} alt={""} width={410} height={410} style={{
            objectFit:"contain"
        }} />
    </div>
    <div className={Style.contentbox}>
        <h3>Faster Onboarding, Faster Delivery</h3>
        <p>Our resources are project-ready and hit the ground running, no long learning curves.</p>
    </div>
   
</div>
</div>

  <div className={Style.boxstyle}>
<div className={Style.iinerbox}> 
    <div className={Style.contentbox}>
        <h3>Flexible Contracts, Zero Lock-ins</h3>
       <p>Scale up or down as your needs change. No strings attached.</p>
    </div>
     <div className={Style.imagebox}>
        <Image src={"/t3.png"} alt={""} width={410} height={410} style={{
            objectFit:"contain"
        }} />
    </div>
</div>
</div>

  <div className={Style.boxstyle}>
<div className={Style.iinerbox}> 
    <div className={Style.imagebox}>
        <Image src={"/t4.png"} alt={""} width={410} height={410} style={{
            objectFit:"contain"
        }} />
    </div>
    <div className={Style.contentbox}>
        <h3>Secure & Compliant</h3>
        <p>Every resource works under strict NDAs, with secure access protocols and platform governance.</p>
    </div>
     
</div>
</div>
  <div className={Style.boxstyle}>
<div className={Style.iinerbox}> 
    
    <div className={Style.contentbox}>
        <h3>Backed by Synexc’s Salesforce Expertise</h3>
        <p>Our contractors don’t work in isolation, they’re supported by our broader consulting braintrust.</p>
    </div>
    <div className={Style.imagebox}>
        <Image src={"/t5.png"} alt={""} width={410} height={410}  style={{
            objectFit:"contain"
        }} />
    </div>
     
</div>
</div>

  
  
   
  


                </div>
            </div>
        </section>
        </>
    )
}
export default ContractResources;