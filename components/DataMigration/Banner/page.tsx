import Style from "./style.module.scss"

import Image from "next/image";
interface NewProps {
    setOpen: (open: boolean) => void;
}
const DataMigrationBanner = ({setOpen}:NewProps) =>{
    return(
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
            <h4>Data Migration <span>Done Right</span></h4>
            <h5>Don’t Just Move Your Data, Elevate It.</h5>
             
        </div>
        <div className={Style.perstyle}>
            
            <p>Make every record count with Salesforce-aligned migration strategies.</p>
            
        </div>
       
        <div className={`${Style.btn} ${Style.btndsktop}`}>
            <a onClick={() => setOpen(true)}>Get Started. <b>its for free!</b></a>
        </div>
       
       </div>
       <div className={Style.imagebox}>
       <Image src={"/Group39662.svg"} width={639} height={556} alt={"Frame427319200"} 
        priority={true}
        />
       </div>

       <div className={Style.btnmobile}>
            <a onClick={() => setOpen(true)}>Get Started. <b>its for free!</b></a>
        </div>
    </div>
</div>
</section>
        </>
        
    )
}

export default DataMigrationBanner;