import Image from "next/image";
import Style from "./style.module.scss"
const SalesforceAppDevelopmentBanner = ()=>{
    return(
        <>
        <>
<section className={Style.section}>
<div className={`${Style.layer1} ${Style.rounded1}`}></div>
<div className={`${Style.layer2} ${Style.rounded1}`}></div>
<div className={`${Style.layer3} ${Style.rounded2}`}></div>
<div className={`${Style.layer4} ${Style.rounded2}`}></div>


<div className={Style.container}>
<div className={Style.row}>
       <div className={Style.contentbox}>
       <div className={Style.heading2}> 
            <h4>Build What Salesforce Doesn’t, Yet</h4>
            <h5>Custom Salesforce App Development by Synexc</h5>
             
        </div>
        <div className={Style.perstyle}>
            
            <p>Salesforce is powerful out of the box but every business eventually runs into this thought:</p>
            <p><b>“I wish Salesforce could just do this one thing…”</b></p>
            <p>That’s where custom app development comes in</p>
            <div className={Style.textbold}>And that’s where Synexc thrives.</div>
        </div>
       

        <div className={Style.btn}>
            <a href="#">Get Started. <b>its for free!</b></a>
        </div>
       </div>
       <div className={Style.imagebox}>
       <Image src={"/Group39660.png"} width={639} height={556} alt={"Frame427319200"} 
        priority={true}
        />
       </div>
    </div>
</div>
</section>
        </>
        </>
    )
}
export default SalesforceAppDevelopmentBanner;