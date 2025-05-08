"use client"
import Image from "next/image";
import Style from "./aboutbanner.module.scss"
import Link from "next/link";
import InqueryBox from "../Inquerybox";
import { useState } from "react";

const Aboutbanner = ()=>{
    const [isVisible, setIsVisible] = useState(false);
    return(
        <>
<section className={Style.section}>
<div className={`${Style.layer1} ${Style.rounded1}`}></div>
<div className={`${Style.layer2} ${Style.rounded1}`}></div>
<div className={`${Style.layer3} ${Style.rounded2}`}></div>
<div className={`${Style.layer4} ${Style.rounded2}`}></div>


<div className={Style.container}>
    <div className={Style.row}>
        <div className={Style.heading2}>
            <Image src={"/sdlfsdf.svg"} alt={""} width={171} height={203} className={Style.layeer1} />
            <h4>You’ve got the vision <span>
                <Image src={"/Filesdasds.svg"} alt={""} width={77} height={77} /></span></h4>
            <h3>You’ve invested in technology</h3>
            <h3>But something’s <span className={Style.missing}>missing!!</span></h3>
        </div>
        <div className={Style.perstyle}>
            <p>Maybe your systems don’t talk to each other.  </p>
            <p>Maybe your teams are stuck using only 33% of what Salesforce can actually do.  </p>
            <p>Or maybe, you’re growing fast and need a solution that can scale with you.</p>
        </div>
        <div className={Style.midheight}>
            <h3>
            What if Salesforce wasn’t just a platform you use but a <span>strategy you own?</span>
            </h3>
        </div>

        <div className={Style.btn} 
        onClick={() => setIsVisible(true)}>
        
            <span >That’s the future we build <b>at Synexc.</b></span>
        </div>
    </div>
</div>
</section>
{isVisible && (
     <div className={Style.popupOverlay}>
    <div className={Style.frombox}>
                <InqueryBox />
            </div>
            </div>
)}

        </>
    )
}

export default Aboutbanner;