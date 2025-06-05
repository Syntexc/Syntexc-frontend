import Image from "next/image";
import Style from "./style.module.scss"
const WhatWeBring = ()=>{
    return (
        <>
        <section className={Style.section}>
            <div className={Style.container}>
                <div className={Style.row}>
   <div className={Style.boxstyle}>
    <div className={Style.heading}>
    <h2>What We Bring to the Tap</h2> 
</div>
<div className={Style.iinerbox}>
    <div className={Style.contentbox}>
        <h3>Mobile Customization That Gets You </h3>
        <h4>No clunky menus. No desktop copy-paste. 
We tailor your app to roles, goals, and hustle. </h4>
        <ul>
            <li>
               Swipe-friendly layouts
            </li>
            <li>Role-based views </li>
       <li>Quick actions for quicker wins</li>
        </ul>
    </div>
    <div className={Style.imagebox}>
        <Image src={"/ss1.png"} alt={""} width={500} height={333}  />
    </div>
</div>
</div>




  <div className={Style.boxstyle}>
<div className={Style.iinerbox}>
     <div className={Style.imagebox}>
        <Image src={"/ss2.png"} alt={""} width={410} height={410}  />
    </div>
    <div className={Style.contentbox}>
        <h3>Smart Design, Smarter Decisions </h3>
        <h4>We build mobile dashboards that speak your language, 
visual, fast, and real-time. </h4>
        <ul>
            <li>
              Lightning App Builder magic
            </li>
            <li>Custom mobile components </li>
       <li>On-the-go insights that don’t miss a beat</li>
        </ul>
    </div>
   
</div>
</div>

  <div className={Style.boxstyle}>
<div className={Style.iinerbox}> 
    <div className={Style.contentbox}>
        <h3>Security That Travels</h3>
        <h4>Your data stays protected, even offline. 
From Face ID to MDM, we’ve got your back. </h4>
        <ul>
            <li>
             Biometric logins
            </li>
            <li>Secure offline mode</li>
       <li>Compliance-first setup</li>
        </ul>
    </div>
     <div className={Style.imagebox}>
        <Image src={"/ss3.png"} alt={""} width={410} height={410}  />
    </div>
</div>
</div>

  <div className={Style.boxstyle}>
<div className={Style.iinerbox}> 
    <div className={Style.imagebox}>
        <Image src={"/ss4.png"} alt={""} width={410} height={410}  />
    </div>
    <div className={Style.contentbox}>
        <h3>Tap. Sync. Close.</h3>
        <h4>We integrate your world, calls, maps, emails, right into Salesforce. </h4>
        <ul>
            <li>
             Auto-logging calls
            </li>
            <li>Map-based lead capture</li>
       <li>Push notifications that matter</li>
        </ul>
    </div>
     
</div>
</div>

  
  
   
  


                </div>
            </div>
        </section>
        </>
    )
}
export default WhatWeBring;