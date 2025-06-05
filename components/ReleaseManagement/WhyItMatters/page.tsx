import Image from "next/image";
import Style from "./style.module.scss"
const WhyItMatters = ()=>{
    return (
        <>
        <section className={Style.section}>

<div className={Style.contbox}>
    <h2>Why It Matters</h2>
<div className={Style.viewbox}>
<BoxView image={"/yes1.svg"} text="Zero Downtime. Full Confidence."   />
<BoxView image={"/yes1.svg"} text="Agile Innovation. Enterprise Stability."   />
<BoxView image={"/yes1.svg"} text="Seamless Collaboration Across Teams."   />
</div>
    <p> Because releasing changes shouldn’t feel like walking a tightrope.</p>
</div>




            
            <div className={Style.container}>
                <div className={Style.row}>
   <div className={Style.boxstyle}>
    <div className={Style.heading}>
    <h2>How Synexc Does It Differently </h2> 
    <h3>We bring together the best tools, a battle-tested process, and a DevOps-first mindset to help you manage releases at scale. </h3>
</div>
<div className={Style.iinerbox}>
    <div className={Style.contentbox}>
        <h3>Version Control: </h3> 
       <p>All your metadata tracked, versioned, and stored safely, so nothing slips through the cracks.</p>
    </div>
    <div className={Style.imagebox}>
        <Image src={"/fy1.svg"} alt={""} width={500} height={333}  />
    </div>
</div>
</div>




  <div className={Style.boxstyle}>
<div className={Style.iinerbox}>
     <div className={Style.imagebox}>
        <Image src={"/fy2.svg"} alt={""} width={410} height={410}  />
    </div>
    <div className={Style.contentbox}>
        <h3>Deployment Automation: </h3> 
       <p>Using tools like Gearset, Copado, and Salesforce CLI, we eliminate manual errors and speed up delivery. </p>
    </div>
   
</div>
</div>

  <div className={Style.boxstyle}>
<div className={Style.iinerbox}> 
    <div className={Style.contentbox}>
        <h3>CI/CD Pipelines:</h3> 
         <p>From Git commits to go-lives, we automate the entire journey with robust checks and balances.</p>
    </div>
     <div className={Style.imagebox}>
        <Image src={"/fy3.svg"} alt={""} width={410} height={410}  />
    </div>
</div>
</div>

  <div className={Style.boxstyle}>
<div className={Style.iinerbox}> 
    <div className={Style.imagebox}>
        <Image src={"/fy4.svg"} alt={""} width={410} height={410}  />
    </div>
    <div className={Style.contentbox}>
        <h3>Governance & Approval: </h3>
         <p>Audit trails, approval workflows, and documentation, fully baked into every deployment.</p>
    </div>
     
</div>
</div>

  
  
   
  


                </div>
            </div>
        </section>
        </>
    )
}
export default WhyItMatters;



interface BoxViewPRop {
image?:any;
text?:string;
}



const BoxView = ({image , text}:BoxViewPRop)=>{
    return(
        <>
        <div className={Style.boxinner}>
            <div className={Style.image}>
                <Image src={image} width={80} height={80} alt="" />
            </div>
            <div className={Style.contentnox}>
                <h5>{text}</h5>
            </div>
        </div>
        </>
    )
}