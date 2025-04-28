import Image from "next/image";
import Style from "./aboutbanner.module.scss"

const AboutbannerIndustry = ()=>{
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
            <h4>Everyone’s Looking for a Partner Who Gets Them.</h4>
             
        </div>
        <div className={Style.perstyle}>
            <p>Every industry has its own language. Its own pace. Its own pain points. But the real challenge? Finding a tech partner who understands all that and knows how to solve it</p>
            <p><b>That’s exactly the gap Synexc was created to fill</b></p>
        </div>
       

        <div className={Style.btn}>
            <a href="#">Get Started. <b>its for free!</b></a>
        </div>
       </div>
       <div className={Style.imagebox}>
       <Image src={"/industry-banner.svg"} width={639} height={556} alt={"Frame427319200"} 
        priority={true}
        />
       </div>
    </div>
</div>
</section>
        </>
    )
}

export default AboutbannerIndustry;